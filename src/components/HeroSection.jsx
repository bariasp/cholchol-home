import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/system';

const HeroContainer = styled(Box)(({ theme }) => ({
  backgroundImage: 'url("/assets/hero-cholchol.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '80vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.secondary,
  textAlign: 'center',
  padding: theme.spacing(4),
  animation: 'fadeIn 1.5s ease-in-out',
  '@keyframes fadeIn': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
}));

function HeroSection() {
  return (
    <HeroContainer role="banner" aria-label="Imagen institucional de Cholchol">
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" gutterBottom>
          Bienvenido a la Municipalidad de Cholchol
        </Typography>
        <Typography variant="h6" component="p" sx={{ mb: 3 }}>
          Comprometidos con el desarrollo local, la transparencia y el bienestar de nuestra comunidad.
        </Typography>
        <Button variant="contained" color="secondary" size="large" onClick={() => alert('Gracias por visitarnos')}>
          Conoce más
        </Button>
      </Container>
    </HeroContainer>
  );
}

export default HeroSection;