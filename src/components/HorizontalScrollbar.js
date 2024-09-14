import React from 'react'
import {Box} from '@mui/material';

const HorizaontalScrollbar = (data) => {
  return (
    <div>
        {data.map((item) => <Box></Box>)}
    </div>
  )
}

export default HorizaontalScrollbar