import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Container,
} from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SchoolIcon from '@mui/icons-material/School';
import BuildIcon from '@mui/icons-material/Build';

const servicios = [
  {
    titulo: 'Salud Municipal',
    descripcion: 'Atención primaria, vacunación y programas de bienestar.',
    icono: <LocalHospitalIcon fontSize="large" />,
  },
  {
    titulo: 'Educación',
    descripcion: 'Apoyo a escuelas, becas y actividades educativas.',
    icono: <SchoolIcon fontSize="large" />,
  },
  {
    titulo: 'Infraestructura',
    descripcion: 'Mantenimiento de calles, alumbrado y espacios públicos.',
    icono: <BuildIcon fontSize="large" />,
  },
];

function ServiciosMunicipales() {
  return (
    <Box component="section" sx={{ py: 6, backgroundColor: '#e0e0e0' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Servicios Municipales
        </Typography>
        <Grid container spacing={4}>
          {servicios.map((servicio, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: '#fff',
                }}
                role="region"
                aria-label={`Servicio: ${servicio.titulo}`}
              >
                <CardContent>
                  <Box sx={{ textAlign: 'center', mb: 2 }}>{servicio.icono}</Box>
                  <Typography variant="h6" component="h3" gutterBottom align="center">
                    {servicio.titulo}
                  </Typography>
                  <Typography variant="body2" align="center">
                    {servicio.descripcion}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>
                  <Button size="small" variant="outlined" color="primary">
                    Más información
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ServiciosMunicipales;