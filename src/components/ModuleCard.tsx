import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box, IconButton } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { Module } from '../types';

interface ModuleCardProps {
  module: Module;
  onEdit: (module: Module) => void;
  onDelete: (id: number) => void;
}

const categoryColors: Record<string, string> = {
  'Pemrograman': '#1e1b4b',
  'Creative Marketing': '#f97316',
  'Management SDM': '#eab308',
  'Pengembangan API': '#10b981'
};

const ModuleCard: React.FC<ModuleCardProps> = ({ module, onEdit, onDelete }) => {
  return (
    <Card sx={{ borderRadius: 3, overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="140"
        image={module.image_url || 'https://picsum.photos/seed/default/400/250'}
        alt={module.title}
      />
      <CardContent sx={{ flex: 1, p: 2 }}>
        <Typography
          variant="caption"
          sx={{
            color: categoryColors[module.category] || '#6366f1',
            fontWeight: 'bold',
            textTransform: 'uppercase'
          }}
        >
          MATERI KOMPETENSI
        </Typography>
        <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 1, mb: 1 }}>
          {module.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {module.description.length > 80
            ? `${module.description.substring(0, 80)}...`
            : module.description}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
          <Typography variant="caption" color="text.secondary">
            {module.instructor} • {module.duration}
          </Typography>
          <Box>
            <IconButton size="small" onClick={() => onEdit(module)}>
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" onClick={() => onDelete(module.id)} color="error">
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ModuleCard;
