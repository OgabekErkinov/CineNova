import { Box } from "@mui/material" 

const NotFoundPage = () => {
  return (
    <Box width={'95%'}
         height={'30rem'}
         borderRadius={'10px'}
         overflow={'hidden'}
         
         
         >
          <img src='src\assets\notFound.png' 
               style={{height : '100%', width : '100%', objectFit : 'contain', userSelect : 'none'}}/>
         </Box>
  )
}

export default NotFoundPage