import { Box, Button, Typography } from "@mui/material";
import { imageUrl } from "../../../utils/imageUrl";
import { toSinglePage } from "../../../utils/helperCode";
import useUIStore from "../../../store/store";

const MovieCard = ({ movie }) => {
  const {themeColors} = useUIStore()
  return (
    <Box position="relative" height="100%" width="100%">
      <img 
        src={`${imageUrl.img500}${movie?.backdrop_path}`} 
        alt="image"
        style={{
          height: '100%', 
          width: '100%',
          objectFit: 'cover',  
        }} 
      />
      <Box 
        position="absolute"
        zIndex={1}
        bottom="5%"
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="10px"
      >
        <Typography 
          width="100%" 
          height="auto"
          fontWeight="700" 
          fontSize={{ sm: '1rem', md: '2rem', lg: '3rem' }} 
          color={themeColors.color}
          bgcolor={themeColors.background}
          textAlign="center"
          padding="10px"
        >
          {movie?.title}
        </Typography>

        <Button 
          variant="contained" 
          href={toSinglePage(movie)}
          size="small"
          sx={{
            width: '120px', 
            textTransform: 'none', 
            bgcolor: themeColors.background,
            color: themeColors.color,
            '&:hover': {
              bgcolor: 'rgb(38, 44, 68)',
            }
          }}
        >
          Show More
        </Button>             
      </Box> 
    </Box>
  );
};

export default MovieCard;
