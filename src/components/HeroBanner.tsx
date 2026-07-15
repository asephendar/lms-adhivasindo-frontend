import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { Person as PersonIcon, CalendarToday as CalendarIcon } from '@mui/icons-material';

const HeroBanner: React.FC = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        borderRadius: 3,
        p: 4,
        color: 'white',
        mb: 3
      }}
    >
      <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.8)', fontWeight: 'bold' }}>
        PEMROGRAMAN
      </Typography>
      <Typography variant="h4" fontWeight="bold" sx={{ mt: 1, mb: 2 }}>
        Pemrograman Frontend Modern dengan React dan Angular
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, maxWidth: 600, color: 'rgba(255,255,255,0.9)' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Belajar membangun aplikasi web modern dengan teknologi terkini.
      </Typography>
      <Grid container spacing={2} alignItems="center" sx={{ mb: 3 }}>
        <Grid item sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <PersonIcon fontSize="small" />
          <Typography variant="body2">Pemateri By Josep</Typography>
        </Grid>
        <Grid item sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <CalendarIcon fontSize="small" />
          <Typography variant="body2">14-06-2025</Typography>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        sx={{
          bgcolor: 'white',
          color: '#6366f1',
          fontWeight: 'bold',
          '&:hover': { bgcolor: '#f3f4f6' }
        }}
      >
        MULAI LEARNING
      </Button>
    </Box>
  );
};

export default HeroBanner;
