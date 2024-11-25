import { Box, Button, Typography } from "@mui/material"
import {imageUrl} from "../../../utils/imageUrl"
import {toSinglePage} from "../../../utils/helperCode"

const MovieCard = ({movie}) => {
  return (
    <Box height={'100%'} width={'100%'}>
      <img src={`${imageUrl.img500}${movie?.backdrop_path}`} alt="image"
           style={{height : '100%', width : '100%'}} />
                       <Box position={'absolute'} 
                            zIndex={1} 
                            bottom={'5%'} 
                            width={'100%'}
                            display={'flex'}
                            flexDirection={'column'}
                            alignItems={'center'}
                            gap={'10px'}>
                            
                           <Typography width={'100%'} 
                                       height = {'auto'}
                                       fontWeight={'700'} 
                                       fontSize={{sm : '1rem', md : '2rem', lg : '3rem' }} 
                                       color={'white'}
                                       bgcolor={'rgba(12, 48, 176, 0.3)'}
                                       
                                       >
                                        {movie?.title}
                           </Typography>

                           <Button variant="contained" 
                                            href={toSinglePage(movie)}
                                            size="small"
                                            style={{width : '120px'}}
                                            >
                                      show more
                           </Button>             
                                      
                       </Box> 
    </Box>
  )
}

export default MovieCard
