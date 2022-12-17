import * as React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
// import FilledInput from '@mui/material/FilledInput';
// import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
// import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
// import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Button, Link, Typography } from '@mui/material';
import { Container, Stack } from '@mui/system';
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import {SERVER_URI} from '../../config/keys'


export default function Login() {
    const [values, setValues] = React.useState({
        email: '',
        password: '',
        showPassword: false,
    });

    const [error, setError] = useState("");

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

	const handleSubmit = async (e) => {
		// e.preventDefault();
		try {
			const url = `${SERVER_URI}/login`
			const { data: res } = await axios.post(url, values);
			localStorage.setItem("token", res.data.token);
            localStorage.setItem("userId", res.data.userId);
			window.location = "/dashboard";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

    return (
        <React.Fragment>
            <Container maxWidth="sm">
                <Box container direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    sx={{bgcolor:'#fff4' , mt:'100px',pb:'50px', boxShadow:10, borderRadius:'10px'}}>
                    <Stack
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={3}
                    >
                        <Typography sx={{ pt: '20px', ml: '30px' }}>
                            <h1>Login your Account</h1>
                        </Typography>
                        {error && (
                            <Alert severity="error">
                                <AlertTitle>Error</AlertTitle>
                                This is an error alert — <strong>{error}</strong>
                            </Alert>
                        )}
                        <FormControl sx={{ m: 1, width: '40ch' }} variant="standard">
                            <InputLabel htmlFor="standard-adornment-email">email</InputLabel>
                            <Input
                                id="standard-adornment-email"
                                type='email'
                                value={values.email}
                                onChange={handleChange('email')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <AccountCircle />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '40ch' }} variant="standard">
                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormControl onClick={handleSubmit}  sx={{ width: '50%', height: '40px', mt: '50px' }}>
                            <Button variant="contained" sx={{bgcolor:'green'}}>
                            Login
                            </Button>
                        </FormControl>
                        <div>
                            <Link href='/signup'>
                                <Button variant="text" >
                                    Need an account? SignUp.
                                </Button>
                            </Link>
                        </div>
                    </Stack>
                </Box>
            </Container>
        </React.Fragment>
    )
}
