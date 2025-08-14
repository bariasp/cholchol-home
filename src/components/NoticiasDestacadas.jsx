import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Container,
  Skeleton,
} from '@mui/material';

const noticiasSimuladas = [
  {
    titulo: 'Nueva plaza comunitaria inaugurada en Cholchol',
    resumen: 'La municipalidad celebró la apertura de un nuevo espacio público para la comunidad.',
    imagen: '/assets/plaza-cholchol.jpg',
  },
  {
    titulo: 'Programa de becas 2025 ya está disponible',
    resumen: 'Estudiantes de la comuna pueden postular al nuevo fondo de apoyo educativo.',
    imagen: '/assets/becas-cholchol.png',
  },
  {
    titulo: 'Operativo de salud rural este fin de semana',
    resumen: 'Equipos médicos visitarán sectores rurales para atención gratuita.',
    imagen: '/assets/salud-rural.jpg',
  },
];

function NoticiasDestacadas() {
  const [noticias, setNoticias] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // Simula carga de datos
    const timer = setTimeout(() => {
      setNoticias(noticiasSimuladas);
      setCargando(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box component="section" sx={{ py: 6, backgroundColor: '#fafafa' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Noticias Destacadas
        </Typography>
        <Grid container spacing={4}>
          {(cargando ? Array.from(new Array(3)) : noticias).map((noticia, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card role="article" aria-label={noticia?.titulo || 'Cargando noticia'}>
                {cargando ? (
                  <Skeleton variant="rectangular" height={180} />
                ) : (
                  <CardMedia
                    component="img"
                    height="180"
                    image={noticia.imagen}
                    alt={`Imagen de ${noticia.titulo}`}
                  />
                )}
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {cargando ? <Skeleton width="80%" /> : noticia.titulo}
                  </Typography>
                  <Typography variant="body2">
                    {cargando ? <Skeleton width="100%" /> : noticia.resumen}
                  </Typography>
                </CardContent>
                {!cargando && (
                  <Box sx={{ textAlign: 'center', pb: 2 }}>
                    <Button size="small" variant="outlined" color="primary">
                      Leer más
                    </Button>
                  </Box>
                )}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default NoticiasDestacadas;
