import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button,Container, Typography } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Head() {
    return (
        <>
            <Container sx={{ flexGrow: 1, mt: '20px' }} >
                <Grid container spacing={2} columns={12} justifyContent="center"
                    alignItems="center" direction={{ xs: 'column-reverse', sm: 'row' }}>
                    <Grid item xs={6}>
                        <Item
                            style={{ boxShadow: "none" }}
                        >
                            <Box item  sx={{ width: '75%', justifyContent: 'center' }}>
                                <Typography variant="h4" sx={{m:'5px', color:'black'}}>Start travele with aaoo chale!</Typography>
                                <Typography variant="h5">Reduce road rush, save money, and make a healthy
                                    environment.
                                </Typography>
                                <Button href='/login' variant="contained" sx={{bgcolor:'black', width:'200px', m:'25px'}}>Get start</Button>
                            </Box>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item
                            style={{ boxShadow: "none" }}
                        >
                            <Box
                                component="img"
                                sx={{

                                    height: 433,
                                    width: 550,
                                    maxHeight: { xs: "100%", md: 450, xl: 550 },
                                    maxWidth: { xs: '100%', xl: 590, md: 500 },
                                }}
                                alt="The house from the offer."
                                src="https://catalog.wlimg.com/about-image/about-14.png"
                            />
                        </Item>
                    </Grid>
                </Grid>
            </Container >
        </>
    );
}
