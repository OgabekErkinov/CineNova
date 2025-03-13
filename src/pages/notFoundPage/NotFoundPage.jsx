import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useUIStore from "../../store/store";
import notFoundImg from "../../assets/notFound.png";

const NotFoundPage = () => {
  const {themeColors} = useUIStore()
  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        background: `linear-gradient(135deg,${themeColors.background} , ${themeColors.color})`,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Box width="100%"
          maxWidth="500px"
          height="300px"
          borderRadius="10px"
          overflow="hidden"
          boxShadow={3}
        >
          <img
            src={notFoundImg}
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              userSelect: "none",
            }}
            alt="Not Found"
          />
        </Box>
      </motion.div>

      <Typography variant="h4" mt={2} color={themeColors.color}>
        Oops! Page Not Found
      </Typography>

      <Typography variant="body1" color={themeColors.color} mt={1} textAlign="center">
        Kechirasiz, siz qidirgan sahifa topilmadi.
      </Typography>

      <Button
        component={Link}
        to="/"
        variant="contained"
        
        sx={{ mt: 3, px: 3, py: 1, borderRadius: "20px", 
              bgcolor : themeColors.background, color:themeColors.color}}
      >
        Bosh sahifaga qaytish
      </Button>
    </Box>
  );
};

export default NotFoundPage;
