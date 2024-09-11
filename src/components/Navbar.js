import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack direction="row" className='flex justify-around px-[20px]' sx={{ gap: {sm: '122px', xs: '40px'}, mt: {sm: '32px', xs: '20px'}, justifyContent: 'none'}}>
        <Link to="/">
        <img src={Logo} alt="logo" className='w-[48px] h-[48px] my-0 mx-[20px]'/>
        </Link>
        <Stack direction="row" className='flex items-end gap-2 text-[20px]'>
            <Link to="/" className='no-underline text-blue-500 border-b-[3px] border-b-blue-500'>
            Home
            </Link>
            <a href="#exercises" className='text-blue-500 no-underline'>Exercises</a>
        </Stack>
    </Stack>
  )
}

export default Navbar