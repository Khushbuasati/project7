import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useTheme } from '@mui/material/styles';

import AppBarRoot from './appBar';
import DrawerRoot from './drawer';
import SmallCards from './smallCard';
import ProgressCards from './progressCard';
import InfoCards from './infoCard';
import Title from '../UIComponents/title';


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
