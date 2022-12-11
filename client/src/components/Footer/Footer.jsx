import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Container } from '@mui/system';
import { Button, Divider, Stack, TextField } from '@mui/material';
import Fcard from './FCard';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Footer({ foonav }) {
  return (
    <Container maxWidth="500" sx={{ bgcolor: 'blue', mt: '100px' }}>
      <Grid container spacing={5} xs={12}>
        <Grid xs={12} md={5} lg={4}>
          <Item style={{ boxShadow: "none" }} sx={{ bgcolor: 'blue' }}>
            <h2 sx={{ color: 'black' }}>Email subscribe section</h2>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={-0.9}
              >
                <TextField
                  label="email"
                  id="outlined-size-small"
                  defaultValue=""
                  size="small"
                  sx={{ bgcolor: '#ffff' }}
                />
                <Button sx={{ bgcolor: 'black', mt: '2px' }}>Subscribe</Button>
              </Stack>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={3}
                sx={{mt:'20px'}}
              >
                <Button variant="outlined" size="medium"
                  sx={{ borderColor: 'black', color: 'black', }}
                  startIcon={<AndroidIcon sx={{ color: 'green' }} />}>
                  Android app
                </Button>
                <Button variant="outlined" size="medium"
                  sx={{ borderColor: 'black', color: 'black', }}
                  startIcon={<AppleIcon sx={{ color: 'black' }} />}>
                  IOS app
                </Button>
              </Stack>
            </Box>
          </Item>
        </Grid>
        <Grid container xs={12} md={7} lg={8} spacing={4}>
          <Stack
            direction={{ lg: 'row', xl: "row", md: "column", sm: 'column' }}
            justifyContent="center"
            alignItems="center"
            spacing={12}
          >
            {foonav.map((item, index) => (
              <Fcard key={item.image} index={index} hade={item.hade} hade1={item.hade1} link1={item.link1} hade2={item.hade2} link2={item.link2} hade3={item.hade3} link3={item.link3} />
            ))}
          </Stack>
        </Grid>
        <Divider sx={{ width: "100%", fontWeight: "bold", ml: "20px", mr: '20px', mt: '20px', bgcolor: '#ffff' }} />
        <Grid
          xs={12}
          container
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ xs: 'column', sm: 'row' }}
          sx={{ fontSize: '10px' }}
        >
          <Grid sx={{ order: { xs: 2, sm: 1 } }}>
            <Item style={{ boxShadow: "none" }} sx={{ bgcolor: 'blue', color: 'black' }}>Copyright © 2022 by Aaoochale</Item>
          </Grid>
          <Grid container columnSpacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
            <Grid>
              <Item style={{ boxShadow: "none" }} sx={{ bgcolor: 'blue' }}>
                <Avatar>
                  <Link to="/"><FacebookIcon /></Link>
                </Avatar>
              </Item>
            </Grid>
            <Grid>
              <Item style={{ boxShadow: "none" }} sx={{ bgcolor: 'blue' }}>
                <Avatar>
                  <Link to="/"><YouTubeIcon /></Link>
                </Avatar>
              </Item>
            </Grid>
            <Grid>
              <Item style={{ boxShadow: "none" }} sx={{ bgcolor: 'blue' }}>
                <Avatar>
                  <Link to="/"><InstagramIcon /></Link>
                </Avatar>
              </Item>
            </Grid>
            <Grid>
              <Item style={{ boxShadow: "none" }} sx={{ bgcolor: 'blue' }}>
                <Avatar>
                  <Link to="/"><TwitterIcon/></Link>
                </Avatar>
              </Item>
            </Grid>
            <Grid>
              <Item style={{ boxShadow: "none" }} sx={{ bgcolor: 'blue' }}>
                <Avatar>
                  <Link to="/"><LinkedInIcon/></Link>
                </Avatar>
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
