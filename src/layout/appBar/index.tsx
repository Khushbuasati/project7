import React from 'react';
import { AppBar, Toolbar, IconButton, Stack, Badge, Avatar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmojiFlagsOutlinedIcon from '@mui/icons-material/EmojiFlagsOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import { useTheme, styled } from '@mui/material/styles';
import profile from '../../assets/images/profile.jpg';

function AppBarRoot({ drawerWidth }: any) {
  const theme = useTheme();
  return (
    <AppBar
      position="fixed"
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    >
      <Toolbar sx={{ padding: '0px 10px !important', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <IconButton><MenuIcon fontSize='small' sx={{ color: theme.palette.background.paper }} /></IconButton>
        <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
          {
            [MailOutlineOutlinedIcon, NotificationsOutlinedIcon, EmojiFlagsOutlinedIcon].map((Item: any, index: number) => (
              <IconButton>
                <Badge badgeContent={5}
                  sx={{
                    '& .MuiBadge-badge': {
                      color: 'white',
                      background: index === 0 ? theme.palette.success.main : index === 1
                        ? theme.palette.orange.light : theme.palette.error.main,
                      borderRadius: '3px',
                      fontSize: '8px',
                      height: '14px',
                      minWidth: '0px',
                      padding: '0px 4px'
                    }
                  }}
                >
                  <Item fontSize='small' sx={{ color: theme.palette.background.paper }} />
                </Badge>
              </IconButton>
            ))
          }
          <IconButton><Avatar alt="A" src={profile} sx={{ width: '30px', height: '30px' }} /></IconButton>
        <Typography sx={{color: theme.palette.background.paper, fontSize: '12px', margin: '0px 1rem 0px 0.2rem !important'}}>Alexander Pierce</Typography>
        <IconButton><SettingsSuggestOutlinedIcon fontSize='small' sx={{ color: theme.palette.background.paper }} /></IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default AppBarRoot;
