import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  CardMedia
} from '@mui/material';
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';

const schedules = [
  { title: 'Storytelling dalam Pemasaran', time: '09:00 - 11:00', color: '#6366f1' },
  { title: 'Pemrograman Frontend Modern', time: '12:00 - 14:00', color: '#f97316' },
  { title: 'Pengembangan API', time: '14:30 - 16:30', color: '#eab308' }
];

const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const dates = [1, 2, 3, 4, 5, 6, 7];

const RightSidebar: React.FC = () => {
  const { user } = useAuth();

  return (
    <Box sx={{ width: 300, p: 2, display: { xs: 'none', lg: 'block' } }}>
      <Paper sx={{ borderRadius: 3, p: 3, mb: 2, textAlign: 'center' }}>
        <Avatar
          src="https://picsum.photos/seed/user/80/80"
          sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }}
        />
        <Typography variant="h6" fontWeight="bold">
          SELAMAT DATANG, {user?.name?.toUpperCase() || 'USER'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Di LMS by Adhivasindo
        </Typography>
      </Paper>

      <Paper sx={{ borderRadius: 3, p: 2, mb: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <ChevronLeftIcon />
          <Typography variant="subtitle1" fontWeight="bold">April 2025</Typography>
          <ChevronRightIcon />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {days.map((day, index) => (
            <Box key={day} sx={{ textAlign: 'center', p: 0.5 }}>
              <Typography variant="caption" color="text.secondary">{day}</Typography>
              <Box
                sx={{
                  width: 28,
                  height: 28,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  bgcolor: dates[index] === 4 ? '#1e1b4b' : 'transparent',
                  color: dates[index] === 4 ? 'white' : 'inherit',
                  mt: 0.5
                }}
              >
                {dates[index]}
              </Box>
            </Box>
          ))}
        </Box>
      </Paper>

      <Paper sx={{ borderRadius: 3, p: 2 }}>
        <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 2 }}>
          JADWAL PEMATERI
        </Typography>
        <List sx={{ p: 0 }}>
          {schedules.map((schedule, index) => (
            <ListItem key={index} sx={{ px: 0, py: 1 }}>
              <ListItemAvatar>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 2,
                    bgcolor: schedule.color
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={schedule.title}
                secondary={schedule.time}
                primaryTypographyProps={{ fontWeight: 'medium', variant: 'body2' }}
                secondaryTypographyProps={{ variant: 'caption' }}
              />
            </ListItem>
          ))}
        </List>
        <CardMedia
          component="img"
          height="100"
          image="https://picsum.photos/seed/tech/300/150"
          sx={{ borderRadius: 2, mt: 1 }}
        />
      </Paper>
    </Box>
  );
};

export default RightSidebar;
