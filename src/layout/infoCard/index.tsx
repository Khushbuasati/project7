import React from 'react';
import { Grid, Card, Paper, Box, Typography, CardContent, CardMedia, Button } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from '@mui/material/styles';
import { darkBackgroundColor, lightBackgroundColor } from '../../utils/index';

const list = [
    { title: 'New Orders', Icon: ShoppingCartOutlinedIcon, value: '150' },
    { title: 'Bounce Rate', Icon: EqualizerOutlinedIcon, value: '53%' },
    { title: 'User Registrations', Icon: PersonAddAlt1Icon, value: '44' },
    { title: 'Unique Visitors', Icon: DonutSmallIcon, value: '65' }
];

function ProgressCards() {
    const theme = useTheme();
    return (
        <Grid container spacing={2} sx={{ marginTop: '0px' }}>
            {list.map((item: any, index: number) => (
                <Grid item xs={12} sm={6} md={3}>
                    <Paper>
                        <Card
                            sx={{
                                display: 'flex', borderRadius: '2px',
                                background: lightBackgroundColor(theme, index),
                                borderBottomLeftRadius: '0px',
                                borderBottomRightRadius: '0px',
                                paddingBottom: '0.5rem'
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: '65%'
                                }}
                            >
                                <CardContent sx={{ flex: '1 0 auto', padding: '5px 0px 0.5rem !important', color: theme.palette.common.white }}>
                                    <Typography
                                        variant="subtitle1"
                                        component="div"
                                        sx={{ fontSize: '26px', fontWeight: 'bold', padding: '0px 16px 0px 8px', marginBottom: '-5px' }}
                                    >
                                        {item.value}
                                    </Typography>
                                    <Typography
                                        component="div"
                                        variant="subtitle1"
                                        sx={{ fontSize: '12px', padding: '0px 16px 0px 8px' }}
                                    >
                                        {item.title}
                                    </Typography>
                                </CardContent>
                            </Box>
                            <CardMedia
                                sx={{
                                    width: '35%',
                                    alignItems: 'center',
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <item.Icon
                                    sx={{
                                        fontSize: '60px',
                                        color: darkBackgroundColor(theme, index)
                                    }}
                                />
                            </CardMedia>
                        </Card>
                        <Button
                            fullWidth
                            sx={{
                                color: theme.palette.common.white,
                                fontSize: '12px',
                                textTransform: 'capitalize',
                                bgcolor: darkBackgroundColor(theme, index),
                                borderTopLeftRadius: '0px',
                                borderTopRightRadius: '0px',
                                '&:hover': {
                                    bgcolor: darkBackgroundColor(theme, index)
                                }
                            }}
                        >
                            More info <ArrowForwardIcon
                                sx={{
                                    fontSize: '12px',
                                    background: theme.palette.common.white,
                                    color: darkBackgroundColor(theme, index),
                                    borderRadius: '50%',
                                    padding: '1px',
                                    marginLeft: '3px',
                                }}
                            />
                        </Button>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
};
export default ProgressCards;