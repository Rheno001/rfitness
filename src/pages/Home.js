import React, {useState} from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';

const Home = () => {
  const [bodyPart, setbodyPart] = useState('all')
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
        <HeroBanner/>
        <SearchExercises setExercises={setExercises}
        bodyPart={bodyPart}/>
        <Exercises/>
    </Box>
  )
}

export default Home