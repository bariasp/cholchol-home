import React from 'react';
import { Box, Typography, Link, Container, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

function Footer() {
  return (
    <Box component="footer" sx={{ backgroundColor: '#003366', color: '#fff', py: 4 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <Typography variant="h6" component="p" gutterBottom>
            Municipalidad de Cholchol
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Dirección: Calle Principal 123, Cholchol, Región de La Araucanía
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Teléfono: +56 45 2 123456 | Correo: contacto@cholchol.cl
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <IconButton aria-label="Facebook institucional" color="inherit" href="https://facebook.com" target="_blank">
              <Facebook />
            </IconButton>
            <IconButton aria-label="Twitter institucional" color="inherit" href="https://twitter.com" target="_blank">
              <Twitter />
            </IconButton>
            <IconButton aria-label="Instagram institucional" color="inherit" href="https://instagram.com" target="_blank">
              <Instagram />
            </IconButton>
          </Box>

          <Typography variant="body2">
            © {new Date().getFullYear()} Municipalidad de Cholchol. Todos los derechos reservados.
          </Typography>
          <Link href="/politica-privacidad" color="inherit" underline="hover" sx={{ mt: 1 }}>
            Política de privacidad
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;