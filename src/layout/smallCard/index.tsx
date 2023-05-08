import React from 'react';
import { Grid, Card, Box, Typography, CardContent, CardMedia } from '@mui/material';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import EmojiFlagsOutlinedIcon from '@mui/icons-material/EmojiFlagsOutlined';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { useTheme } from '@mui/material/styles';

const list = [
    { title: 'MESSAGE', Icon: MailOutlineOutlinedIcon, value: '1,410' },
    { title: 'BOOKMARKS', Icon: EmojiFlagsOutlinedIcon, value: '410' },
    { title: 'UPLOADS', Icon: FileCopyOutlinedIcon, value: '13,648' },
    { title: 'LIKES', Icon: StarBorderOutlinedIcon, value: '93,139' }
]

function SmallCards() {
    const theme = useTheme();
    return (
        <Grid container spacing={2}>
            {list.map((item: any, index: number) => (
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ display: 'flex', borderRadius: '2px' }}>
                        <CardMedia
                            sx={{
                                width: '35%',
                                background: index === 0 ? theme.palette.blue.main : index === 1 ?
                                    theme.palette.success.main : index === 2 ?
                                        theme.palette.orange.light : theme.palette.error.main,
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <item.Icon sx={{ fontSize: '35px', color: theme.palette.common.white }} />
                        </CardMedia>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto', padding: '5px 16px 2rem 8px !important' }}>
                                <Typography
                                    component="div"
                                    variant="subtitle1"
                                    color="secondary"
                                    sx={{ fontSize: '12px' }}
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    component="div"
                                    sx={{ fontSize: '14px', color: theme.palette.secondary.dark, fontWeight: 'bold' }}
                                >
                                    {item.value}
                                </Typography>
                            </CardContent>
                        </Box>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};
export default SmallCards;
