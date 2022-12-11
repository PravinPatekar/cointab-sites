import React from 'react';
import {Typography,Box} from '@mui/material'

export default function HeaderImg(){
    return (
        <Box sx={{mt:'-20px'}}>
            <Box style={{ backgroundImage: `url(https://cdn.pixabay.com/photo/2017/06/12/08/29/victoria-memorial-2394784__480.jpg)`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'}}>

                <div className="container" style={{minHeight: '200px'}}>
                    <Typography >
                        <h1 className="pt-5 pb-3">About</h1>
                        <h5>sidhfsdjvjnldlx</h5>
                    </Typography>
                </div>
            </Box>
        </Box>
    )
}