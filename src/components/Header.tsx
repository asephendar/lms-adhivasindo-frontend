import React from 'react';
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Avatar,
  Badge
} from '@mui/material';
import {
  Search as SearchIcon,
  Notifications as NotificationsIcon
} from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchQuery, onSearchChange }) => {
  const { user } = useAuth();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        py: 2,
        px: 3,
        bgcolor: 'white'
      }}
    >
      <Typography variant="h6" fontWeight="bold" color="#1e1b4b">
        LEARNING MANAGEMENT SYSTEM
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          size="small"
          placeholder="Search class..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: '#9ca3af' }} />
              </InputAdornment>
            )
          }}
          sx={{ width: 300, bgcolor: '#f3f4f6', borderRadius: 2 }}
        />
        <IconButton>
          <Badge badgeContent={3} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Avatar src="https://picsum.photos/seed/user/40/40" />
          <Typography variant="body2" fontWeight="medium">
            {user?.name || 'User'}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
