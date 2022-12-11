import React from 'react'
import { Grid, Link, Typography } from '@mui/material';


export default function Fcard({ hade, hade1, link1, hade2, link2, hade3, link3 }) {
    return (
        <React.Fragment>
            <Typography variant='div'>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{pl: '60px' }}
                >
                    <h3 className=''>{hade}</h3>
                    <Typography variant='div' sx={{fontSize: 18, mt: '13px'}}>
                        <Link href={link1} underline="none" color='black'>{hade1}</Link>
                    </Typography>
                    <Typography variant='div' sx={{fontSize: 18, mt: '13px'}}>
                        <Link href={link2} underline="none" color='black'>{hade2}</Link>
                    </Typography>
                    <Typography variant='div' sx={{fontSize: 18, mt: '13px'}}>
                        <Link href={link3} underline="none" color='black'>{hade3}</Link>
                    </Typography>
                </Grid>
            </Typography>
        </React.Fragment>
    )
}