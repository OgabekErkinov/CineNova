import { CircularProgress } from '@mui/material'
import { Stack } from '@mui/system'

const LazyLoading = () => {
  return (
    <Stack  height='100%'
            width='100%'
           justifyContent={'center'} 
           alignItems={'center'} 
           color={'blue'}>
        <CircularProgress size={'medium'} color='white'/>
    </Stack>
  )
}

export default LazyLoading