import { Box } from '@mui/material'

import {Popular, TopRated, Upcoming} from "./components/index"
import HeaderSection from '../../components/sectionHeader/HeaderSection'
import { Stack } from '@mui/system'


const HomePage = () => {
  return (
      <Box height={'auto'} width={'100%'} mt='15vh'>
        <Stack spacing={2} px={1} alignItems='center'>
          <HeaderSection sectionTitle={'Premiere'}/>
          <Popular/>
          <HeaderSection sectionTitle={'Upcoming'}/>
          <Upcoming/>
          <HeaderSection sectionTitle={'TopRated'}/>
          <TopRated/>
          </Stack>
      </Box>
    
  )
}

export default HomePage