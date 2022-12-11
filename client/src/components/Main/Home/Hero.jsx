import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Card, Container, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import LocationSearchInput from './LocationSearchInput'
// import GoogleMaps from './LocationInputBox'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Hero() {
    const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Container sx={{ flexGrow: 1, mt: '20px' }} >
                <Grid container spacing={2} columns={12} justifyContent="center"
                    alignItems="center" direction={{ xs: 'column-reverse', sm: 'row' }}>
                    <Grid item xs={6}>
                        <Item
                            style={{ boxShadow: "none" }}
                        >
                            <Box item sx={{ width: '100%', justifyContent: 'center' }}>
                                <Card className="App " style={{ justifyContent: 'center' }}
                                    sx={{
                                        p: '5px',
                                        height: "100%",
                                        width: "100%",
                                        maxHeight: { xs: "100%", md: 550 },
                                        maxWidth: { xs: '100%', xl: '100%', md: 550 },
                                    }}
                                >
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <Stack
                                            direction="column"
                                            justifyContent="center"
                                            alignItems="center"
                                            spacing={3}
                                            sx={{ pb: '50px' }}
                                        >
                                            <Typography variant="h4">Start travele with aaoo chale!</Typography>
                                            <Typography variant="h5">Reduce road rush, save money, and make a healthy
                                                environment.
                                            </Typography>
                                            <Stack
                                                direction="row"
                                                justifyContent="center"
                                                alignItems="center"
                                                spacing={2}>
                                                <TextField
                                                    sx={{
                                                        width: { sm: 180, md: 250 },
                                                        "& .MuiInputBase-root": {
                                                            height: 50
                                                        }
                                                    }}
                                                    id="standard-basic"
                                                    label="From"
                                                    variant="filled"
                                                    placeholder="Pickup location...."
                                                    maxWidth='55%'
                                                />
                                                <TextField
                                                    sx={{
                                                        width: { sm: 180, md: 250 },
                                                        "& .MuiInputBase-root": {
                                                            height: 50
                                                        }
                                                    }}
                                                    id="standard-basic"
                                                    label="To"
                                                    variant="filled"
                                                    placeholder="Destination location....."
                                                    maxWidth='55%'
                                                />
                                            </Stack>
                                            <Stack
                                                direction="row"
                                                justifyContent="center"
                                                alignItems="center"
                                                spacing={2}>
                                                <DateTimePicker
                                                    sx={{
                                                        width: { sm: 180, md: 250 },
                                                        "& .MuiInputBase-root": {
                                                            height: 50
                                                        }
                                                    }}
                                                    label="From"
                                                    value={value}
                                                    onChange={handleChange}
                                                    renderInput={(params) => <TextField {...params} />}
                                                />
                                                <DateTimePicker
                                                    sx={{
                                                        width: { sm: 180, md: 250 },
                                                        "& .MuiInputBase-root": {
                                                            height: 50
                                                        }
                                                    }}
                                                    label="To"
                                                    value={value}
                                                    onChange={handleChange}
                                                    renderInput={(params) => <TextField {...params} />}
                                                />
                                            </Stack>
                                            <Stack
                                                direction="row"
                                                justifyContent="center"
                                                alignItems="center"
                                                spacing={2}>
                                                <TextField
                                                    sx={{
                                                        width: { sm: 50, md: 200 },
                                                        "& .MuiInputBase-root": {
                                                            height: 50
                                                        }
                                                    }}
                                                    label="Adult"
                                                    id="outlined-size-small"
                                                    // defaultValue="Small"
                                                    size="small"
                                                />
                                                <TextField
                                                    sx={{
                                                        width: { sm: 50, md: 200 },
                                                        "& .MuiInputBase-root": {
                                                            height: 50
                                                        }
                                                    }}
                                                    label="Child"
                                                    id="outlined-size-small"
                                                    // defaultValue="Small"
                                                    size="small"
                                                />
                                                <Button variant="contained">Book</Button>
                                            </Stack>
                                        </Stack>
                                    </LocalizationProvider>
                                </Card>
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
