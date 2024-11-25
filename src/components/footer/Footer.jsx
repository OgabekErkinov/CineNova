import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";
import { Box, Stack, Typography } from '@mui/material';
const Footer = () => {

    const iconsTab = [
        { icon: <FaFacebookF /> },
        { icon: <AiOutlineTwitter /> },
        { icon: <AiFillYoutube /> },
        { icon: <BiLogoPinterestAlt /> },
      ]; 

  return (
    
      <Box height={'20rem'}
           width={'95%'}
           borderRadius={'1rem'}
           padding={'2rem'}
           boxSizing={'border-box'}
           border={'0.5px solid blue'}
           marginY={'2rem'}    
       >

       <Box height={'100%'}
            width={'100%'}
            bgcolor={'grey'}>
                <Stack direction={'row'}
                       width={'100%'}
                       height={'70%'}
                       justifyContent={'center'}
                       alignItems={'center'}
                       fontSize={'2rem'}
                       gap={{sm : '1rem', md : '2rem', lg : '3rem'}}
                       color={'blue'}>

                      {iconsTab.map(({ icon }, index) => {
                               return (
                                 <Box key={index} 
                                      sx={{
                                        transition : '0.4s',
                                        '&:hover' : {
                                          scale : '1.1',
                                          transition : '0.4s'
                                        }
                                      }}>
                                          {icon}
                                </Box>
                                       );
                       })}
               </Stack>
               <Stack direction={'row'}
                              alignItems={'center'}
                              justifyContent={'center'}
                              bgcolor={'rgba(77, 75, 75, 0.582)'}
                              width={'100%'}
                              height={'30%'}>
                                 <Typography width={'100%'}>© 2024 CopyRight: MyWebSite.com</Typography>

                      
                                
                       </Stack>
           

       </Box>
      </Box>
       

  )
}

export default Footer