import { Typography, Stack } from '@mui/material'

const AboutPage = () => {
    return (
      <Stack width={'100%'} 
             height={'auto'} 
             color={'white'} 
             padding={'1rem'} >
              
        <Typography
      variant="h2" 
      sx={{
        fontSize: '3rem', 
        fontWeight: 'bold', 
        textAlign: 'center', 
        color: '#6200ea',
        letterSpacing: '0.5rem',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        lineHeight: '1.5', 
        transition: 'all 0.3s ease', 
        '&:hover': {
          color: '#3700b3', 
          textShadow: '4px 4px 8px rgba(0, 0, 0, 0.4)',
        }
      }}
    >
      About me:
    </Typography>
    <Typography
      variant="body1" 
      sx={{
        fontSize: '1.2rem', 
        color: 'white', 
        lineHeight: 1.8,
        letterSpacing: '0.02rem', 
        textAlign: 'justify', 
        maxWidth: '100%', 
        margin: '0 auto', 
        padding: '1rem',
        backgroundColor: 'transparent', 
        borderRadius: '8px', 
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
        transition: 'all 0.8s ease', 
        '&:hover': {
          backgroundColor: 'rgba(128, 128, 128, 0.2)', 
          color : 'rgba(128, 128, 128, 1)',
          boxShadow: '0 6px 8px rgba(0, 0, 0, 0.2)', 
          transition: 'all 0.8s ease'
        },
      }}
    >
      This fake site was created for only practise... <br />
      To create site is called 'MovieApp' , I had used HTML , CSS , JavaScript , React , Routing , WebPack , Axios , TanStack Query, MUI , <br />
      Apis and another several technologies!
    </Typography>

      </Stack>
    )
  }
  
  export default AboutPage