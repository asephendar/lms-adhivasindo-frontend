import React from 'react';
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Avatar,
  Badge,
  useMediaQuery,
  useTheme
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        py: 2,
        px: { xs: 2, md: 3 },
        bgcolor: 'white',
        width: '100%',
        minWidth: 0,
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
        flexWrap: 'nowrap',
        overflow: 'hidden'
      }}
    >
      <Typography
        variant={isMobile ? 'subtitle1' : 'h6'}
        sx={{
          fontWeight: 'bold',
          color: '#1e1b4b',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          flexShrink: 0
        }}
      >
        {isSmall ? 'LMS' : 'LEARNING MANAGEMENT SYSTEM'}
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, md: 2 }, minWidth: 0, flex: 1, justifyContent: 'flex-end' }}>
        <TextField
          size="small"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: '#9ca3af', fontSize: 18 }} />
              </InputAdornment>
            )
          }}
          sx={{
            width: { xs: 140, sm: 200, md: 300 },
            maxWidth: '100%',
            bgcolor: '#f3f4f6',
            borderRadius: 2,
            '& .MuiOutlinedInput-root': { borderRadius: 2 }
          }}
        />
        <IconButton size="small">
          <Badge badgeContent={3} color="error">
            <NotificationsIcon fontSize="small" />
          </Badge>
        </IconButton>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 0, flexShrink: 0 }}>
          <Avatar src="https://picsum.photos/seed/user/40/40" sx={{ width: 32, height: 32 }} />
          {!isMobile && (
            <Typography
              variant="body2"
              sx={{
                fontWeight: 'medium',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: 120
              }}
            >
              {user?.name || 'User'}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
