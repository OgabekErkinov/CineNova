import { Box } from '@mui/material'

const HeaderSection = ({sectionTitle}) => {
  return (
    <Box height={'3rem'} 
         width={'95%'} 
         textAlign={'start'} 
         fontSize={'2rem'} 
         fontWeight={'700'} 
         color={'blue'}
         marginX={'auto'}
         >
       {sectionTitle}
    </Box>
    
  )
}

export default HeaderSection