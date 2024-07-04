import { faker } from '@faker-js/faker';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';

import AppTasks from '../app-tasks';
import AppNewsUpdate from '../app-news-update';
import AppOrderTimeline from '../app-order-timeline';
import AppCurrentVisits from '../app-current-visits';
import AppWebsiteVisits from '../app-website-visits';
import AppWidgetSummary from '../app-widget-summary';
import AppTrafficBySite from '../app-traffic-by-site';
import AppCurrentSubject from '../app-current-subject';
import AppConversionRates from '../app-conversion-rates';

import axios from 'axios';
import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useRouter } from 'src/routes/hooks';

// ----------------------------------------------------------------------
// Modulos de ejemplo

/*
<Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Weekly Sales"
            total={714000}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="New Users"
            total={1352831}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Item Orders"
            total={1723315}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Bug Reports"
            total={234}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid><Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Website Visits"
            subheader="(+43%) than last year"
            chart={{
              labels: [
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ],
              series: [
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ],
            }}
          />
        </Grid>
        <Grid xs={12} md={6} lg={4}>
          <AppCurrentSubject
            title="Current Subject"
            chart={{
              categories: ['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math'],
              series: [
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ],
            }}
          />
        </Grid>
        <Grid xs={12} md={6} lg={4}>
          <AppOrderTimeline
            title="Order Timeline"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: [
                '1983, orders, $4220',
                '12 Invoices have been paid',
                'Order #37745 from September',
                'New order placed #XF-2356',
                'New order placed #XF-2346',
              ][index],
              type: `order${index + 1}`,
              time: faker.date.past(),
            }))}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppTrafficBySite
            title="Traffic by Site"
            list={[
              {
                name: 'FaceBook',
                value: 323234,
                icon: <Iconify icon="eva:facebook-fill" color="#1877F2" width={32} />,
              },
              {
                name: 'Google',
                value: 341212,
                icon: <Iconify icon="eva:google-fill" color="#DF3E30" width={32} />,
              },
              {
                name: 'Linkedin',
                value: 411213,
                icon: <Iconify icon="eva:linkedin-fill" color="#006097" width={32} />,
              },
              {
                name: 'Twitter',
                value: 443232,
                icon: <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={32} />,
              },
            ]}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppTasks
            title="Tasks"
            list={[
              { id: '1', name: 'Create FireStone Logo' },
              { id: '2', name: 'Add SCSS and JS files if required' },
              { id: '3', name: 'Stakeholder Meeting' },
              { id: '4', name: 'Scoping & Estimations' },
              { id: '5', name: 'Sprint Showcase' },
            ]}
          />
        </Grid>
        */

const supabase = createClient("https://gmaornmomezzjfuzkxlj.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtYW9ybm1vbWV6empmdXpreGxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAwMzcyNDIsImV4cCI6MjAxNTYxMzI0Mn0.LxTkpzI94O7j1NjR4BjpsgsNHYQ7knHmCmYOKBUi2Nc")

export default function AppView() {
  const [periodicos, setPeriodicos] = useState([]);
  const [noticias, setNoticias] = useState([]);
  const [comentarios, setComentarios] = useState([]);
  const [logo, setLogo] = useState(false);
  const router = useRouter();

  const getData = async () => {
    const { data, error } = await supabase.from("periodicos").select('periodico, valor_noticias, valor_comentarios')
    dataset.map((data) => {
      setPeriodicos((prevPeriodicos) => [
        ...prevPeriodicos,
        {
          periodico: data.periodico,
          valor_noticias: data.valor_noticias,
          valor_comentarios: data.valor_comentarios
        },
      ])
    })
  }

  // https://devtrium.com/posts/async-functions-useeffect#what-if-you-need-to-extract-the-function-outside-useeffect

  const periodicos_name = ["20minutos", "ABC", "AlertaDigital", "ElConfidencial", "ElDebate", "ElDiario", "ElEspañol", "ElMundo", "ElPais", "LaGaceta", "DiarioHispanidad", "LaVanguardia",
  "Moncloa", "NTVEspaña", "OkDiario", "RamblaLibre", "TheObjective", "Marca", "VozPopuli", "ElPeriodistaDigital"]

  const periodicos_comentarios = ["ElPais", "OkDiario", "ElMundo", "ElConfidencial", "Marca", "ABC", "ElEspañol", "NTVEspaña", "ElPeriodistaDigital", "VozPopuli", "ElDebate", "AlertaDigital"]

  const calls = async () => {
    const result = await axios.get("http://gplsi1.iuii.ua.es:8105/test-scrapers")
    setNoticias(result.data["crawlers"])
    setComentarios(result.data["scrapers"])
  };

  const updateData = async () => {
    periodicos_name.map(async (periodico) => {
      const periodico_l = periodico.toLocaleLowerCase()
      const { data, error } = await supabase.from("periodicos").update({ valor_noticias: noticias[periodico_l]}).eq("periodico", periodico)
      console.log(periodico_l, noticias[periodico_l])
    })
    periodicos_comentarios.map(async (periodico) => {
      const periodico_l = periodico.toLocaleLowerCase()
      const { data, error } = await supabase.from("periodicos").update({ valor_comentarios: comentarios[periodico_l]}).eq("periodico", periodico)
      console.log(periodico_l, comentarios[periodico_l])
    })
  }

  return (
    <Container maxWidth="xl">

      <Grid xs={12} md={6} lg={4} mb={3}>
          <AppNewsUpdate
            title="Historial de errores"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: faker.person.jobTitle(),
              description: faker.commerce.productDescription(),
              image: `/assets/images/covers/cover_${index + 1}.jpg`,
              postedAt: faker.date.recent(),
            }))}
          />
      </Grid>

      <Grid container spacing={3}>
        <Grid xs={12} md={6} lg={8}>
          <AppConversionRates
            title="Periódicos más consultados"
            subheader="por enlaces usados en la app"
            chart={{
              series: [
                { label: 'Italy', value: 400 },
                { label: 'Japan', value: 430 },
                { label: 'China', value: 448 },
                { label: 'Canada', value: 470 },
                { label: 'France', value: 540 },
                { label: 'Germany', value: 580 },
                { label: 'South Korea', value: 690 },
                { label: 'Netherlands', value: 1100 },
                { label: 'United States', value: 1200 },
                { label: 'United Kingdom', value: 1380 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Current Visits"
            chart={{
              series: [
                { label: 'America', value: 4344 },
                { label: 'Asia', value: 5435 },
                { label: 'Europe', value: 1443 },
                { label: 'Africa', value: 4443 },
              ],
            }}
          />
        </Grid>

        
  
      </Grid>
    </Container>
  );
}
