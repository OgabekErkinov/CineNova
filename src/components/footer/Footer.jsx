import { Box, Stack, Typography, IconButton } from '@mui/material';
import { YouTube, LinkedIn, Telegram, Mail } from '@mui/icons-material'; // MUI icons
import useUIStore from '../../store/store';

const Footer = () => {
  const {themeColors} = useUIStore()

  const iconsTab = [
    { icon: <YouTube />, label: "YouTube", link: "https://www.youtube.com" },
    { icon: <LinkedIn />, label: "LinkedIn", link: "https://www.linkedin.com" },
    { icon: <Telegram />, label: "Telegram", link: "https://t.me/OgabekErkinov" },
    { icon: <Mail />, label: "Email", link: "ogabekekinov56@gmail.com" },
  ]; 

  return (
    <Box
      height="20vh"
      width="95%"
      borderRadius="12px"
      padding="12px"
      border={`1px solid ${themeColors.color}`}
      marginY="2rem"
      mx='auto'
    >
      <Box
        height="100%"
        width="100%"
        bgcolor={themeColors.background}
      >
        <Stack
          direction="row"
          width="100%"
          height="70%"
          justifyContent="center"
          alignItems="center"
          fontSize="2rem"
          gap={{ sm: '1rem', md: '2rem', lg: '3rem' }}
        >
          {iconsTab.map(({ icon, label, link }, index) => (
            <a key={index} href={link} target="_blank" rel="noopener noreferrer">
              <IconButton
                aria-label={`Go to ${label}`}
                sx={{
                  transition: '0.4s',
                   
                  '&:hover': {
                    scale: '1.1',
                    color: themeColors.background, 
                    bgcolor:themeColors.color,
                    transition: '0.4s',
                  },
                  color: themeColors.color,
                  scale : '1.5'
                }}
              >
                {icon}
              </IconButton>
            </a>
          ))}
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          bgcolor="rgba(77, 75, 75, 0.582)"
          width="100%"
          height="30%"
        >
          <Typography width="100%" color={themeColors.color}>
            © 2024 CopyRight: MyWebSite.com
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
