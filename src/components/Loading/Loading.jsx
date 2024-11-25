import { Skeleton } from '@mui/material'
import React from 'react'

const Loading = () => {
  return (
    
    <Skeleton variant='rounded' 
              width={'100%'} 
              height={'100%'}
              sx={{bgcolor : 'grey.800'}}/>  
  
  )
}

export default Loading