import { Box, Container, Typography } from '@mui/material'
import React from 'react'

export default function BodyThird() {
    return (
        <Box sx={{ bgcolor: '#ECF0F1 ', pt: '120px', pb: '100px', mt: '60px' }}>
            <Container maxWidth="lg" sx={{}}>
                <Box sx={{
                    color: "#273746",
                }}>
                    <Typography variant='h4' sx={{ mb: '20px' }}> Why Should We Choose Aaoo Chale?</Typography>
                    <Typography>
                        If we could all shares our Ride with the needed one, it would be helpful
                        to reduce the rush from the road. It means it gives a good extent to the
                        road. Also helpful for the environment and gives fresh air to human
                        beings which benefits their heaths.

                        It gives us a comfortable and pocket-friendly ride with fewer people.
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}
