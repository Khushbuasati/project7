import React from 'react';
import { Grid, Card, Box, Typography, CardContent, CardMedia } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import { useTheme, styled } from '@mui/material/styles';
import { darkBackgroundColor, lightBackgroundColor } from '../../utils/index';

const BorderLinearProgress = styled(LinearProgress)<any>(({ theme, index }) => ({
    height: 2,
    marginBottom: '0.5rem',
    borderRadius: 0,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: darkBackgroundColor(theme, index),
    },
    [`& .${linearProgressClasses.bar}`]: {
        backgroundColor: theme.palette.common.white,
    },
}));

const list = [
    { title: 'BOOKMARKS', Icon: BookmarkBorderOutlinedIcon, value: '41,410', progress: 70 },
    { title: 'LIKES', Icon: ThumbUpOffAltOutlinedIcon, value: '41,410', progress: 50 },
    { title: 'EVENTS', Icon: CalendarMonthIcon, value: '41,410', progress: 70 },
    { title: 'COMMENTS', Icon: MapsUgcOutlinedIcon, value: '41,410', progress: 70 }
]

function ProgressCards() {
    const theme = useTheme();
    return (
        <Grid container spacing={2} sx={{ marginTop: '0px' }}>
            {list.map((item: any, index: number) => (
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ display: 'flex', borderRadius: '2px' }}>
                        <CardMedia
                            sx={{
                                width: '35%',
                                background: darkBackgroundColor(theme, index),
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <item.Icon sx={{ fontSize: '35px', color: theme.palette.common.white }} />
                        </CardMedia>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                background: lightBackgroundColor(theme, index),
                                width: '65%'
                            }}
                        >
                            <CardContent sx={{ flex: '1 0 auto', padding: '5px 0px 0.5rem !important', color: theme.palette.common.white }}>
                                <Typography
                                    component="div"
                                    variant="subtitle1"
                                    sx={{ fontSize: '11px', padding: '0px 16px 0px 8px' }}
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    component="div"
                                    sx={{ fontSize: '14px', fontWeight: 'bold', padding: '0px 16px 0px 8px' }}
                                >
                                    {item.value}
                                </Typography>
                                <BorderLinearProgress variant="determinate" value={item.progress} index={index} />
                                <Typography
                                    component="div"
                                    variant="subtitle1"
                                    sx={{ fontSize: '11px', padding: '0px 16px 0px 8px' }}
                                >
                                    {item.progress}% Increase in 30 days
                                </Typography>
                            </CardContent>
                        </Box>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};
export default ProgressCards;

