import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  Container,
} from '@mui/material';

function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es obligatorio';
    if (!formData.correo.trim()) {
      newErrors.correo = 'El correo es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
      newErrors.correo = 'Correo electrónico inválido';
    }
    if (!formData.mensaje.trim()) newErrors.mensaje = 'El mensaje es obligatorio';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
    } else {
      setSubmitted(true);
      console.log('Formulario enviado:', formData);
      // Aquí podrías agregar lógica para enviar los datos a un backend
    }
  };

  return (
    <Box component="section" sx={{ py: 6, backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="sm">
        <Typography variant="h4" component="h2" gutterBottom>
          Contáctanos
        </Typography>
        <form onSubmit={handleSubmit} noValidate aria-label="Formulario de contacto institucional">
          <TextField
            label="Nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={!!errors.nombre}
            helperText={errors.nombre}
            required
            inputProps={{ 'aria-required': true }}
          />
          <TextField
            label="Correo electrónico"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={!!errors.correo}
            helperText={errors.correo}
            required
            inputProps={{ 'aria-required': true }}
          />
          <TextField
            label="Mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={4}
            error={!!errors.mensaje}
            helperText={errors.mensaje}
            required
            inputProps={{ 'aria-required': true }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Enviar
          </Button>
        </form>
        {submitted && (
          <Alert severity="success" sx={{ mt: 3 }}>
            ¡Gracias por tu mensaje! Nos pondremos en contacto pronto.
          </Alert>
        )}
      </Container>
    </Box>
  );
}

export default ContactForm;