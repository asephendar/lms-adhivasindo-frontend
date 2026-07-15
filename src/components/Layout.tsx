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

const SIDEBAR_WIDTH = 260;
const RIGHT_SIDEBAR_WIDTH = 300;

const Layout: React.FC<LayoutProps> = ({ children, onSearchChange, searchQuery }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        width: '100%',
        bgcolor: '#f5f7fa',
        overflowX: 'hidden'
      }}
    >
      <Box
        component="aside"
        sx={{
          width: SIDEBAR_WIDTH,
          flexShrink: 0,
          position: 'fixed',
          left: 0,
          top: 0,
          height: '100vh',
          zIndex: 1200
        }}
      >
        <Sidebar />
      </Box>

      <Box
        component="main"
        sx={{
          flex: 1,
          minWidth: 0,
          ml: { xs: 0, md: `${SIDEBAR_WIDTH}px` },
          display: 'flex',
          flexDirection: 'column',
          transition: 'margin-left 0.3s ease'
        }}
      >
        <Header searchQuery={searchQuery} onSearchChange={onSearchChange} />
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            width: '100%',
            minWidth: 0,
            overflowX: 'hidden'
          }}
        >
          <Box
            sx={{
              flex: 1,
              minWidth: 0,
              p: { xs: 2, md: 3 }
            }}
          >
            {children}
          </Box>
          <Box
            sx={{
              width: RIGHT_SIDEBAR_WIDTH,
              flexShrink: 0,
              display: { xs: 'none', xl: 'block' }
            }}
          >
            <RightSidebar />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
