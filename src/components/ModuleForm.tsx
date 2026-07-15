import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Grid,
  MenuItem
} from '@mui/material';
import { Module } from '../types';

interface ModuleFormProps {
  open: boolean;
  module: Module | null;
  onClose: () => void;
  onSubmit: (data: Partial<Module>) => void;
}

const categories = ['Pemrograman', 'Creative Marketing', 'Management SDM', 'Pengembangan API'];
const statuses = ['draft', 'published'];

const ModuleForm: React.FC<ModuleFormProps> = ({ open, module, onClose, onSubmit }) => {
  const [formData, setFormData] = useState<Partial<Module>>({
    title: '',
    category: 'Pemrograman',
    description: '',
    instructor: '',
    duration: '',
    status: 'draft',
    image_url: 'https://picsum.photos/seed/default/400/250'
  });

  useEffect(() => {
    if (module) {
      setFormData({
        title: module.title,
        category: module.category,
        description: module.description,
        instructor: module.instructor,
        duration: module.duration || '',
        status: module.status,
        image_url: module.image_url || 'https://picsum.photos/seed/default/400/250'
      });
    } else {
      setFormData({
        title: '',
        category: 'Pemrograman',
        description: '',
        instructor: '',
        duration: '',
        status: 'draft',
        image_url: 'https://picsum.photos/seed/default/400/250'
      });
    }
  }, [module, open]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{module ? 'Edit Modul' : 'Tambah Modul'}</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Judul Modul"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                select
                label="Kategori"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                {categories.map((cat) => (
                  <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                select
                label="Status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                required
              >
                {statuses.map((status) => (
                  <MenuItem key={status} value={status}>{status}</MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Pemateri"
                name="instructor"
                value={formData.instructor}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Durasi"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                placeholder="Contoh: 14 Jam"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Deskripsi"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="URL Gambar"
                name="image_url"
                value={formData.image_url}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Batal</Button>
          <Button type="submit" variant="contained">
            {module ? 'Simpan Perubahan' : 'Tambah Modul'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default ModuleForm;
