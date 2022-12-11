import { Typography, TextField, Button, Box, InputAdornment } from '@mui/material'
import React from 'react'
import { useState } from "react";
import AccountCircle from '@mui/icons-material/AccountCircle';
// import SubjectIcon from '@mui/icons-material/Subject';
import PinIcon from '@mui/icons-material/Pin';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';


export default function Poppup() {

  
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    const user = localStorage.getItem("userId");

    const [values, setValues] = React.useState({
      fname: '',
      lname: '',
      subjects: '',
      number: '',
      userId: user,
    });
  
  
    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  
    axios.interceptors.request.use(
        config => {
          config.headers.authorization = `Bearer ${token}`;
          return config;
        },
        error => {
          return Promise.reject(error)
        }
      )
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const url = "http://localhost:8080/users";
        const { data: res } = await axios.post(url, values);
        navigate("/dashboard");
        console.log(res.message);
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
        <Typography>
            {error && (
                <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    This is an error alert — <strong>{error}</strong>
                </Alert>
            )}
            <Box
                component="form"
                noValidate
                autoComplete="on"
                spacing={2}
            >
                <FormControl fullWidth sx={{ mt: '20px', mb: '10px' }}>
                    <TextField
                        fullWidth
                        required
                        id="filled-required"
                        label="First Name"
                        variant="outlined"
                        value={values.fname}
                        onChange={handleChange("fname")}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment container justifyContent="flex-end">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                    />
                </FormControl>
                <FormControl fullWidth sx={{ mt: '20px', mb: '10px' }}>
                    <TextField
                        fullWidth
                        required
                        id="filled-required"
                        label="Last Name"
                        variant="outlined"
                        value={values.lname}
                        onChange={handleChange("lname")}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment container justifyContent="flex-end">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                    />
                </FormControl>
                <FormControl fullWidth sx={{ mt: '20px', mb: '10px' }}>
                    <InputLabel id="demo-simple-select-label">Choosing subjects</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Subjects"
                        value={values.subjects}
                        onChange={handleChange("subjects")}
                    >
                        <MenuItem value={'Mathematics'}>Mathematics</MenuItem>
                        <MenuItem value={'English'}>English</MenuItem>
                        <MenuItem value={'Communication'}>Communication</MenuItem>
                        <MenuItem value={'Philosophy'}>Philosophy</MenuItem>
                        <MenuItem value={'Natural'}>Natural Sciences</MenuItem>
                        <MenuItem value={'Social'}>Social Sciences</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth sx={{ mt: '20px', mb: '10px' }}>
                    <TextField
                        fullWidth
                        required
                        id="outlined-required"
                        type="number"
                        label="number"
                        variant="outlined"
                        value={values.number}
                        onChange={handleChange("number")}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment container justifyContent="flex-end">
                                    <PinIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </FormControl>
                <FormControl onClick={handleSubmit} sx={{ width: '100%', height: '50px', mt: '50px' }}>
                    <Button variant="contained"
                        sx={{ bgcolor: 'green' }}
                    >
                        Submit
                    </Button>
                </FormControl>
            </Box>
        </Typography>
    )
}
