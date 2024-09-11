import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack>
        <Link to="/">
        <img src={Logo} alt="logo" className='w-[48px] h-[48px] my-0 mx-[20px]'/>
        </Link>
        <Stack>
            <Link to="/" className='no-underline'>
            Home
            </Link>
            <a href="#exercises" className='text-red-500'>Exercises</a>
        </Stack>
    </Stack>
  )
}

export default Navbar