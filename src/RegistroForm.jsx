import React, { useState } from 'react';
import { Container, Box, Card, CardContent, Typography, TextField, Button, Stack } from '@mui/material';

export default function RegistroForm() {
  const [usuario, setUsuario] = useState({
    nombreCompleto: '',
    cedulaIdentidad: '',
    estadoSalud: ''
  });

  const manejarCambio = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    });
  };

  const enviarFormulario = (e) => {
    e.preventDefault();
    console.log("🔒 Datos del chip sincronizados:", usuario);
    alert(`Inscripción completada para: ${usuario.nombreCompleto}`);
    setUsuario({ nombreCompleto: '', cedulaIdentidad: '', estadoSalud: '' });
  };

  return (
    <Container maxWidth="sm" id="registro-section">
      <Card variant="outlined" sx={{ borderRadius: 4, borderColor: '#1E293B', bgcolor: 'background.paper' }}>
        <CardContent sx={{ p: { xs: 3, md: 5 } }}>
          
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 1, color: '#00E5FF' }}>
            🔒 INSCRIPCIÓN Y VERIFICACIÓN
          </Typography>
          
          <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
            Módulo oficial de captura de datos personales. Ingrese su perfil clínico y documentos oficiales para enlazar su cuenta al chip inteligente.
          </Typography>

          <Box component="form" onSubmit={enviarFormulario}>
            <Stack spacing={3}>
              
              <TextField
                label="Información Personal (Nombre Completo)"
                name="nombreCompleto"
                variant="outlined"
                fullWidth
                required
                value={usuario.nombreCompleto}
                onChange={manejarCambio}
                InputLabelProps={{ shrink: true }}
                placeholder="Nombre de cada persona"
              />

              <TextField
                label="Dónde verificar los datos (ID / Cédula)"
                name="cedulaIdentidad"
                variant="outlined"
                fullWidth
                required
                value={usuario.cedulaIdentidad}
                onChange={manejarCambio}
                InputLabelProps={{ shrink: true }}
                placeholder="Número de documento de identidad"
              />

              <TextField
                label="Estado de Salud"
                name="estadoSalud"
                variant="outlined"
                fullWidth
                required
                multiline
                rows={4}
                value={usuario.estadoSalud}
                onChange={manejarCambio}
                InputLabelProps={{ shrink: true }}
                placeholder="Indique condiciones médicas, tipo de sangre o alergias"
              />

              <Button type="submit" variant="contained" color="primary" size="large" fullWidth sx={{ py: 1.8 }}>
                Sincronizar Información del Chip
              </Button>

            </Stack>
          </Box>

        </CardContent>
      </Card>
    </Container>
  );
}