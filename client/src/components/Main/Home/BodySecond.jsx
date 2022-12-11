import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import { Box, Container, Typography } from '@mui/material'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export default function BodySecond({ second }) {
    return (
        <Box sx={{ bgcolor: '#2C3E50', mt: '10px', pt: '40px', pb: '40px' }}>
            <Container maxWidth="lg" sx={{}}>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant='h4' sx={{ mb: '60px' }}>Why AAOO CHALE?</Typography>
                    <Grid container spacing={{ xs: 4, md: 3 }} columns={{ xs: 3, sm: 12, md: 12 }}>
                        {second.map((data, index) => (
                            <Grid item xs={6} sm={4} md={4} key={index}>
                                <Item style={{ boxShadow: "none" }} sx={{ bgcolor: '#34495E' }}>
                                    <Card sx={{ maxWidth: 340, boxShadow: 6, }}>
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            height="140"
                                            image={data.imge1}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {data.head}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {data.pera}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" to={data.link1}>Share</Button>
                                            <Button size="small" to={data.link2}>Learn More</Button>
                                        </CardActions>
                                    </Card>
                                </Item>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}
