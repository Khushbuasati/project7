import React from 'react';
import { Drawer, Toolbar, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function DrawerRoot({ drawerWidth }: any) {
    const theme = useTheme();
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    border: 'none'
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar sx={{ bgcolor: theme.palette.primary.dark, padding: '0px 10px !important', justifyContent: 'center' }}>
                <Typography
                    sx={{
                        color: theme.palette.background.paper, fontSize: '16px',
                        margin: '0px 1rem 0px 0.2rem !important',
                        fontWeight: 'bold', display: 'flex'
                    }}
                >
                    Admin<Typography>LTE</Typography>
                </Typography>
            </Toolbar>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}

export default DrawerRoot;