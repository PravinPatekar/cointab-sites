import { Box, Container, Typography } from '@mui/material'
import React from 'react'

export default function BodyFirst() {
    return (
        <Box sx={{bgcolor:'#ECF0F1 ', pt:'120px',pb:'100px', mt:'60px'}}>
            <Container maxWidth="lg" sx={{ }}>
                <Box sx={{
                    color: "#273746",
                }}>
                    <Typography variant='h4' sx={{ mb: '20px' }}> What is AAOO CHALE?</Typography>
                    <Typography>
                        AAOO CHALE is the city’s new and leading Ride Share Service Platform.
                        It is the unit of Dreams Platform Private Limited. Here you can book and
                        share your Ride with another one via AAOO CHALE App. This company
                        does not own any kind of vehicle. This company only provides you Ride
                        Sharing Service. This concept allows you to give your participation to
                        reduce the rush from the road without doing anything extra. Just enjoy
                        your ride through the Aaoo Chale Platform. This can also build relations
                        between people during their ride. This platform helps those people
                        who want a safe and pocket-friendly but convenient ride instead of by
                        bus or train.
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}
