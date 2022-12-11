import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import YouTube from 'react-youtube';
import YoutubeVideo from './YoutubeVideo';
import { Container, Typography } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BodyForth() {
    return (
        <>
            <Container sx={{ flexGrow: 1, mt: '20px' }} >
                <Grid container spacing={2} columns={12} justifyContent="center"
                    alignItems="center" direction={{ xs: 'column', sm: 'row' }}>
                    <Grid item xs={6}>
                        <Item
                            style={{ boxShadow: "none" }}
                        >
                            <Box item sx={{ width: '75%', justifyContent: 'center' }}>
                                <Typography variant="h4" sx={{ m: '5px', color: 'black', mb: '20px' }}>
                                    Watch the video to know the importance of the AAOOCHALE App
                                </Typography>
                                <Typography variant="h5">
                                    Attach the videos to a youtube channel.
                                </Typography>
                            </Box>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item
                            style={{ boxShadow: "none" }}
                        >
                            <YoutubeVideo/>
                        </Item>
                    </Grid>
                </Grid>
            </Container >
        </>
    )

}
