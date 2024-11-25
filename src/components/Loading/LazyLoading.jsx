import { CircularProgress } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const LazyLoading = () => {
  return (
    <Stack justifyContent={'center'} 
           alignItems={'center'} 
           color={'blue'}>
        <CircularProgress size={'medium'}/>
    </Stack>
  )
}

export default LazyLoading