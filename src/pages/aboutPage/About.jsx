import { Typography, Stack } from '@mui/material'
import useUIStore from '../../store/store'

const AboutPage = () => {
  const {themeColors} = useUIStore()
    return (
      <Stack width={'100%'} 
             height={'auto'} 
             color={themeColors.color} 
             pt='12vh' >
              
        <Typography
      variant="h2" 
      sx={{
        fontSize: '3rem', 
        fontWeight: 'bold', 
        textAlign: 'center', 
        color: themeColors.color,
        letterSpacing: '0.5rem',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        lineHeight: '1.5', 
        transition: 'all 0.3s ease', 
        '&:hover': {
          color: themeColors.background, 
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
        color: themeColors.color, 
        lineHeight: 1.8,
        letterSpacing: '0.02rem', 
        textAlign: 'justify', 
        maxWidth: '100%', 
        margin: '0 auto', 
        padding: '1rem',
        background : `linear-gradient(to right bottom, ${themeColors.background}, ${themeColors.color})`, 
        borderRadius: '8px', 
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
        transition: 'all 0.8s ease', 
        '&:hover': {
          background : `linear-gradient(to right bottom, ${themeColors.color}, ${themeColors.background})`, 
          color : 'rgba(128, 128, 128, 1)',
          boxShadow: '0 6px 8px rgba(0, 0, 0, 0.2)', 
          transition: 'all 0.8s ease'
        },
      }}
    >
      This site is a practice project called 'MovieApp', where I implemented several modern web technologies:

      <ul>
        <li><strong>HTML</strong>: The foundation of the website’s structure, providing the basic markup.</li>
        <li><strong>CSS</strong>: Used for styling the page, ensuring it is responsive and looks visually appealing across devices.</li>
        <li><strong>JavaScript</strong>: Core language for dynamic behavior, allowing interaction with the user and the API.</li>
        <li><strong>React</strong>: A powerful library for building user interfaces efficiently by creating reusable components.</li>
        <li><strong>React Router</strong>: Allows seamless navigation between different pages (like movie details, search, etc.) without reloading the entire page.</li>
        <li><strong>WebPack</strong>: A bundler used to manage and optimize the app's assets, such as JavaScript, CSS, and images.</li>
        <li><strong>Axios</strong>: A promise-based HTTP client to interact with external APIs for fetching movie data.</li>
        <li><strong>TanStack Query</strong>: Used for managing server-side data fetching, caching, and synchronization, making API calls more efficient.</li>
        <li><strong>MUI (Material-UI)</strong>: A React component library that provides pre-built components, making the UI modern and consistent.</li>
        <li><strong>APIs</strong>: Used to fetch real-time data about movies, genres, and reviews from third-party movie databases.</li>
        <li><strong>Others</strong>: Several other tools and libraries were used to improve the app's functionality, including for state management, animations, and optimization.</li>
      </ul>
      This project helped me strengthen my web development skills by applying these technologies to create a fully functional and dynamic movie website.
    </Typography>

      </Stack>
    )
}

export default AboutPage
