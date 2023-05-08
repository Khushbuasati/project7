import React from 'react';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import AppBarRoot from './appBar';
import DrawerRoot from './drawer';
import SmallCards from './smallCard';
import ProgressCards from './progressCard';
import InfoCards from './infoCard';

const drawerWidth = 200;

export default function PermanentDrawerLeft() {
  const theme = useTheme();
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBarRoot drawerWidth={drawerWidth} />
      <DrawerRoot drawerWidth={drawerWidth} />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <SmallCards />
        <ProgressCards />
        <InfoCards />
      </Box>
    </Box>
  );
}
