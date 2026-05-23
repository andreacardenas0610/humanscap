import React from 'react';
import { ThemeProvider, CssBaseline, AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import theme from './theme';
import RegistroForm from './RegistroForm';

function App() {
  const irSeccionRegistro = () => {
    const element = document.getElementById('registro-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      {/* 🌌 FONDO ÚNICO E ININTERRUMPIDO PARA TODA LA WEB */}
      <Box sx={{
        backgroundImage: 'url("/fondo-lineas.png")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed', 
        backgroundColor: '#02000A',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}>

        {/* 1. BARRA DE NAVEGACIÓN */}
        <AppBar position="fixed" sx={{ bgcolor: 'rgba(2, 0, 10, 0.85)', backdropFilter: 'blur(12px)', backgroundImage: 'none' }}>
          <Toolbar sx={{ justifyContent: 'space-between', px: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 900, letterSpacing: '1px', display: 'flex', alignItems: 'center' }}>
              <img src="/logoja.png" alt="Logo" style={{ height: '35px', marginRight: '10px' }} /> 
              HUMAN<span style={{ color: '#00E5FF' }}>SCANP</span>
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button color="inherit" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Inicio</Button>
              <Button variant="contained" color="primary" onClick={irSeccionRegistro}>Registrarse</Button>
            </Box>
          </Toolbar>
        </AppBar>

        {/* 2. HERO SECTION */}
        <Box sx={{ pt: 24, pb: 10, textAlign: 'center' }}>
          <Container maxWidth="md">
            <Typography variant="overline" color="secondary" sx={{ fontWeight: 'bold', letterSpacing: '3px', textShadow: '0 0 10px #FF007F' }}>
              El futuro ya vive en ti
            </Typography>
            
            <Typography variant="h2" sx={{ fontSize: { xs: '2.5rem', md: '5rem' }, my: 3, fontWeight: 900, lineHeight: 1.1, textShadow: '0 0 20px rgba(0,0,0,0.9)' }}>
              TU IDENTIDAD.<br />
              <span style={{ color: '#00E5FF' }}>TU PIEL.</span> TU LLAVE.
            </Typography>

            <Typography variant="h6" color="text.primary" sx={{ mb: 5, px: 2, lineHeight: 1.6, textShadow: '0 2px 12px rgba(0,0,0,1)' }}>
              El futuro ya está aquí. Con nuestro chip inteligente, olvídate del efectivo, tarjetas y documentos físicos. Tecnología diseñada para avanzar contigo.
            </Typography>

            <Button variant="contained" size="large" sx={{ px: 6, py: 2, fontSize: '1.1rem' }} onClick={irSeccionRegistro}>
              Comenzar Inscripción
            </Button>
          </Container>
        </Box>

        {/* 3. SECCIÓN DE BENEFICIOS (CSS GRID NATIVO ULTRA-CENTRADO) */}
        <Container maxWidth="lg" sx={{ my: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <Typography 
            variant="h4" 
            fontWeight="bold" 
            sx={{ 
              mb: 6, 
              color: '#FFFFFF', 
              letterSpacing: '1px',
              textAlign: 'center',
              textShadow: '0 2px 10px rgba(0,0,0,0.9)'
            }}
          >
            SECCIÓN DE BENEFICIOS
          </Typography>
          
          {/* Contenedor Grid con CSS puro para evitar desalineaciones por herencia */}
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr', md: 'repeat(3, 1fr)' },
            gap: '32px',
            width: '100%',
            maxWidth: '1100px',
            justifyContent: 'center',
            alignItems: 'stretch',
            mx: 'auto'
          }}>
            {[
              { t: '⚡ Paga de forma rápida y segura', d: 'Olvida las tarjetas y el efectivo en tus transacciones diarias comerciales.' },
              { t: '🛡️ Protege tu identidad contra fraudes', d: 'Seguridad avanzada y protección de datos blindada en tu chip inteligente.' },
              { t: '📱 Accede a múltiples funciones', d: 'Consulta tu saldo, movimientos y gestiona tu chip en tiempo real desde la app.' }
            ].map((item, index) => (
              <Box 
                key={index}
                sx={{ 
                  p: 4, 
                  borderRadius: 4, 
                  bgcolor: 'rgba(11, 17, 32, 0.85)', // Cristal oscuro translúcido para ver el fondo
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(0, 229, 255, 0.15)', 
                  textAlign: 'center', 
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  transition: 'transform 0.3s, border-color 0.3s, box-shadow 0.3s',
                  '&:hover': { 
                    transform: 'translateY(-5px)', 
                    borderColor: '#00E5FF', 
                    boxShadow: '0 0 20px rgba(0,229,255,0.3)' 
                  }
                }}
              >
                <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ fontSize: '1.2rem', color: '#00E5FF', mb: 2 }}>
                  {item.t}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  {item.d}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>

        {/* 4. SECCIÓN DEL FORMULARIO INTEGRADO */}
        <Box sx={{ my: 8, width: '100%' }}>
          <RegistroForm />
        </Box>

        {/* 5. FOOTER COMERCIAL */}
        <Box sx={{ mt: 'auto', py: 6, borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', bgcolor: 'rgba(2, 0, 10, 0.9)', backdropFilter: 'blur(8px)' }}>
          <Container maxWidth="md">
            <Typography variant="body1" fontWeight="bold" sx={{ color: '#FF007F', mb: 1 }}>
              Soporte WhatsApp: 80267895 / 80465689
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Contacto de Correo: humanscap@gmail.com
            </Typography>
            <Typography variant="caption" color="text.secondary" display="block">
              Humanscanp © | Tecnología diseñada para un mundo más rápido, seguro y conectado.
            </Typography>
          </Container>
        </Box>

      </Box>
    </ThemeProvider>
  );
}

export default App;