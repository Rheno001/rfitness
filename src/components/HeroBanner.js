import React from 'react';
import {Box, Stack, Typography, Button} from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box className='flex justify-center' sx={{
        mt: {lg: '50px', xs: '70px'}, ml: {sm: '50px'} 
    }} position= 'relative' p= '20px'>
        <div className='mt-[100px]'>
        <Typography className='text-green-800' fontWeight="600" sx= {{ fontSize: {lg: "30px", xs: "25"}}}>Fitness club</Typography>
        <Typography fontWeight='700' className='text-green-700' sx= {{ fontSize: {lg: "20px", xs: "15"}}}>Sweat, Smile <br />and Repeat</Typography>
        <Typography className='text-green-800'mb={2} lineHeight='35px' fontWeight='600' sx= {{ fontSize: {lg: "30px", xs: "25"}}}>Check out the most effective exercises</Typography>
        <Button color='success' variant='contained' href='#exercises' sx={{padding: '15px', fontSize: {lg: '15px', xs: '10px'}}}>Explore Exercises</Button>
        <Typography fontWeight='600' color='#ff2625' position='absolute'  fontSize='200px' sx={{opacity: 0.1, display: {lg: 'block', xs:'none'}}}>
          Exercise
        </Typography>
        </div>
        <div><img src={HeroBannerImage} alt="banner" position='relative' className='hero-banner-img h-3/4' /></div>
    </Box>
  )
}

export default HeroBanner