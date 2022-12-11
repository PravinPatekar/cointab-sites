import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import data from '../../LocalData/data.json'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function NotFound() {
    return (
      <div>
      <Navbar/>
        <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh'
        }}
      >
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid xs={6}>
              <Typography variant="h1">
                404
              </Typography>
              <Typography variant="h6">
                The page you’re looking for doesn’t exist.
              </Typography>
              <Button variant="contained" ><Link to='/home' underline="none">Back Home</Link></Button>
            </Grid>
            <Grid xs={6}>
              <img
                src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
                alt=""
                width={500} height={250}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer foonav={data.foonav}/>
      </div>
    )
}