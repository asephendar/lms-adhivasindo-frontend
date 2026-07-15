import React from 'react';
import { Box } from '@mui/material';
import Sidebar from './Sidebar';
import Header from './Header';
import RightSidebar from './RightSidebar';

interface LayoutProps {
  children: React.ReactNode;
  onSearchChange: (value: string) => void;
  searchQuery: string;
}

const Layout: React.FC<LayoutProps> = ({ children, onSearchChange, searchQuery }) => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f5f7fa' }}>
      <Sidebar />
      <Box sx={{ flex: 1, ml: '260px', display: 'flex', flexDirection: 'column' }}>
        <Header searchQuery={searchQuery} onSearchChange={onSearchChange} />
        <Box sx={{ flex: 1, display: 'flex' }}>
          <Box sx={{ flex: 1, p: 3 }}>
            {children}
          </Box>
          <RightSidebar />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
