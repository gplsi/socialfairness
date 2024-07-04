import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

import { users } from 'src/_mock/user';

import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';

import TableNoData from '../table-no-data';
import UserTableRow from '../user-table-row';
import UserTableHead from '../user-table-head';
import TableEmptyRows from '../table-empty-rows';
import UserTableToolbar from '../user-table-toolbar';
import { emptyRows, applyFilter, getComparator } from '../utils';

import axios from 'axios';
import { createClient } from '@supabase/supabase-js';

// ----------------------------------------------------------------------

export default function UserPage() {
  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [periodicos, setPeriodicos] = useState([])
  const [noticias, setNoticias] = useState([]);
  const [comentarios, setComentarios] = useState([]);

  const [setUser, user] = useState("");

  const supabase = createClient("https://gmaornmomezzjfuzkxlj.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtYW9ybm1vbWV6empmdXpreGxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAwMzcyNDIsImV4cCI6MjAxNTYxMzI0Mn0.LxTkpzI94O7j1NjR4BjpsgsNHYQ7knHmCmYOKBUi2Nc")
  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("userToken")
      if (loggedInUser){
        console.log("Logueado")
      }
      else{
        <Navigate to="/" replace />
      }
    getData();
  }, []);

  const periodicos_name = ["20minutos", "ABC", "AlertaDigital", "ElConfidencial", "ElDebate", "ElDiario", "ElEspañol", "ElMundo", "ElPais", "LaGaceta", "DiarioHispanidad", "LaVanguardia",
  "Moncloa", "NTVEspaña", "OkDiario", "RamblaLibre", "TheObjective", "Marca", "VozPopuli", "ElPeriodistaDigital"]

  const periodicos_comentarios = ["ElPais", "OkDiario", "ElMundo", "ElConfidencial", "Marca", "ABC", "ElEspañol", "NTVEspaña", "ElPeriodistaDigital", "VozPopuli", "ElDebate", "AlertaDigital"]

  const calls = async () => {
    const result = await axios.get("https://socialfairness.demos.gplsi.es/api/test-scrapers")
    setNoticias(result.data["crawlers"])
    setComentarios(result.data["scrapers"])
  };

  const getData = async () => {
    const { data, error } = await supabase.from("periodicos").select()
    setPeriodicos(data)
  }

  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = users.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const dataFiltered = applyFilter({
    inputData: users,
    comparator: getComparator(order, orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Estado de los scrapers</Typography>
      </Stack>

      <Card>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <UserTableHead
                order={order}
                orderBy={orderBy}
                rowCount={20}
                numSelected={selected.length}
                onRequestSort={handleSort}
                onSelectAllClick={handleSelectAllClick}
                headLabel={[
                  { id: 'name', label: 'Periodicos' },
                  { id: 'company', label: 'Noticias' },
                  { id: 'role', label: 'Comentarios' },
                ]}
              />
              <TableBody>
                {periodicos
                  //.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <UserTableRow
                      name={row.periodico}
                      role={row.valor_noticias}
                      status={row.valor_comentarios}
                      company={row.periodico}
                      selected={selected.indexOf(row.periodico) !== -1}
                      handleClick={(event) => handleClick(event, row.periodico)}
                    />
                  ))}

                <TableEmptyRows
                  height={77}
                  emptyRows={emptyRows(page, rowsPerPage, users.length)}
                />

                {notFound && <TableNoData query={filterName} />}
              </TableBody>
            </Table>
          </TableContainer>
      </Card>
      <Box sx={{ p: 2, textAlign: 'left' }}>
        <Button
          size="small"
          color="inherit"
          onClick={calls}
        >
          Actualizar status de los scrapers
        </Button>
      </Box>
    </Container>
  );
}
