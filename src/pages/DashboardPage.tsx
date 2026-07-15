import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Pagination,
  Snackbar,
  Alert
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import Layout from '../components/Layout';
import HeroBanner from '../components/HeroBanner';
import ModuleCard from '../components/ModuleCard';
import ModuleForm from '../components/ModuleForm';
import ParticipantTable from '../components/ParticipantTable';
import { moduleService } from '../services/module.service';
import type { Module } from '../types';

const DashboardPage: React.FC = () => {
  const [modules, setModules] = useState<Module[]>([]);
  const [meta, setMeta] = useState({ page: 1, limit: 6, total: 0, totalPages: 1 });
  const [searchQuery, setSearchQuery] = useState('');
  const [formOpen, setFormOpen] = useState(false);
  const [editingModule, setEditingModule] = useState<Module | null>(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' as 'success' | 'error' });

  const fetchModules = async (page: number = 1, search: string = searchQuery) => {
    try {
      const response = await moduleService.getModules({
        page,
        limit: 6,
        search
      });
      setModules(response.data);
      setMeta(response.meta);
    } catch (error: any) {
      setSnackbar({
        open: true,
        message: error.response?.data?.message || 'Failed to fetch modules',
        severity: 'error'
      });
    }
  };

  useEffect(() => {
    fetchModules(1, searchQuery);
  }, [searchQuery]);

  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    fetchModules(page, searchQuery);
  };

  const handleEdit = (module: Module) => {
    setEditingModule(module);
    setFormOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Apakah Anda yakin ingin menghapus modul ini?')) return;

    try {
      await moduleService.deleteModule(id);
      setSnackbar({ open: true, message: 'Modul berhasil dihapus', severity: 'success' });
      fetchModules(meta.page, searchQuery);
    } catch (error: any) {
      setSnackbar({
        open: true,
        message: error.response?.data?.message || 'Failed to delete module',
        severity: 'error'
      });
    }
  };

  const handleSubmit = async (data: Partial<Module>) => {
    try {
      if (editingModule) {
        await moduleService.updateModule(editingModule.id, data);
        setSnackbar({ open: true, message: 'Modul berhasil diupdate', severity: 'success' });
      } else {
        await moduleService.createModule(data);
        setSnackbar({ open: true, message: 'Modul berhasil ditambahkan', severity: 'success' });
      }
      setFormOpen(false);
      setEditingModule(null);
      fetchModules(1, searchQuery);
    } catch (error: any) {
      setSnackbar({
        open: true,
        message: error.response?.data?.message || 'Failed to save module',
        severity: 'error'
      });
    }
  };

  const handleAddNew = () => {
    setEditingModule(null);
    setFormOpen(true);
  };

  return (
    <Layout searchQuery={searchQuery} onSearchChange={setSearchQuery}>
      <HeroBanner />

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6" fontWeight="bold">
          MODUL KOMPETENSI
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddNew}
          sx={{ bgcolor: '#6366f1' }}
        >
          Tambah Modul
        </Button>
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {modules.map((module) => (
          <Grid item xs={12} md={6} lg={4} key={module.id}>
            <ModuleCard module={module} onEdit={handleEdit} onDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>

      {meta.totalPages > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <Pagination
            count={meta.totalPages}
            page={meta.page}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>
      )}

      <ParticipantTable />

      <ModuleForm
        open={formOpen}
        module={editingModule}
        onClose={() => {
          setFormOpen(false);
          setEditingModule(null);
        }}
        onSubmit={handleSubmit}
      />

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert severity={snackbar.severity} onClose={() => setSnackbar({ ...snackbar, open: false })}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Layout>
  );
};

export default DashboardPage;
