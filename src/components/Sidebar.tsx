import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Avatar,
  Divider
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  School as SchoolIcon,
  People as PeopleIcon,
  Chat as ChatIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
  CalendarToday as CalendarIcon,
  Logout as LogoutIcon
} from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';

const Sidebar: React.FC = () => {
  const { logout } = useAuth();

  const mainMenu = [
    { label: 'Dashboard', icon: <DashboardIcon />, active: true },
    { label: 'Modul', icon: <SchoolIcon /> },
    { label: 'Peserta', icon: <PeopleIcon /> },
    { label: 'Group Chat', icon: <ChatIcon /> },
    { label: 'Pemateri', icon: <PersonIcon /> }
  ];

  const profileMenu = [
    { label: 'Settings', icon: <SettingsIcon /> },
    { label: 'Kalender', icon: <CalendarIcon /> }
  ];

  return (
    <Box
      sx={{
        width: 260,
        height: '100vh',
        bgcolor: '#1e1b4b',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        left: 0,
        top: 0
      }}
    >
      <Box sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatar
          src="https://picsum.photos/seed/adhivasindo/40/40"
          sx={{ width: 40, height: 40 }}
        />
        <Typography variant="h6" fontWeight="bold">
          adhivasindo
        </Typography>
      </Box>

      <List sx={{ flex: 1, px: 2 }}>
        {mainMenu.map((item) => (
          <ListItem key={item.label} disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              sx={{
                borderRadius: 2,
                bgcolor: item.active ? 'rgba(255,255,255,0.1)' : 'transparent',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.15)' }
              }}
            >
              <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)', mx: 2 }} />

      <Typography variant="caption" sx={{ px: 3, py: 1, color: 'rgba(255,255,255,0.6)' }}>
        PROFILE
      </Typography>

      <List sx={{ px: 2, pb: 2 }}>
        {profileMenu.map((item) => (
          <ListItem key={item.label} disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton sx={{ borderRadius: 2, '&:hover': { bgcolor: 'rgba(255,255,255,0.15)' } }}>
              <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton
            onClick={logout}
            sx={{ borderRadius: 2, '&:hover': { bgcolor: 'rgba(255,255,255,0.15)' } }}
          >
            <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
