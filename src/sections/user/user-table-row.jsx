import { useState } from 'react';
import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function UserTableRow({
  selected,
  name,
  avatarUrl,
  company,
  role,
  isVerified,
  status,
  handleClick,
}) {
  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  
  function valorNoticia(value){
    let valor
    if (value == true)
      valor = 'success'
    else
      valor = 'error'
    return valor
  }

  
  function valorComentario(value){
    let valor
    if (value == true)
      valor = 'success'
    else
      valor = 'error'
    return valor
  }

  function working(value){
    let work
    if (value == true)
      work = "Funcionando"
    else
      work = "Error"
    return work
  }

  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
    
        <TableCell component="th" scope="row" padding="none">
          <Stack direction="row" alignItems="center" spacing={2}>
          </Stack>
        </TableCell>

        <TableCell>{company}</TableCell>

        <TableCell ><Label color={valorNoticia(role)}>{working(role)}</Label></TableCell>

        <TableCell>
          <Label color={valorComentario(status)}>{working(status)}</Label>
        </TableCell>

      </TableRow>
    </>
  );
}

UserTableRow.propTypes = {
  avatarUrl: PropTypes.any,
  company: PropTypes.any,
  handleClick: PropTypes.func,
  isVerified: PropTypes.any,
  name: PropTypes.any,
  role: PropTypes.any,
  selected: PropTypes.any,
  status: PropTypes.any,
};
