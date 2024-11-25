import { Box } from '@mui/material'

import {Popular, TopRated, Upcoming} from "./components/index"
import HeaderSection from '../../components/sectionHeader/HeaderSection'


const HomePage = () => {
  return (
      <Box height={'auto'} width={'100%'}>
          <HeaderSection sectionTitle={'Premiere'}/>
          <Popular/>
          <HeaderSection sectionTitle={'Upcoming'}/>
          <Upcoming/>
          <HeaderSection sectionTitle={'TopRated'}/>
          <TopRated/>
      </Box>
    
  )
}

export default HomePage