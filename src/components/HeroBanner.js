import React from 'react';
import {Box, Stack, Typography, Button} from '@mui/material';

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: {lg: '212px', xs: '70px'}, ml: {sm: '50px'} 
    }} position= 'relative' p= '20px'>
        <Typography className='text-green-800' fontWeight="600" fontSize="26px">fitness club</Typography>
        <Typography fontWeight='700' sx={{fontsize: {lg:'44px', xs: '40px'}}}>Sweat, Smile <br />and Repeat</Typography>
        <Typography fontSize='22px' lineHeight='35px'>Check out the most effective exercises</Typography>
        <Button variant='contained' className='bg-green-800'>Explore Exercises</Button>
    </Box>
  )
}

export default HeroBanner