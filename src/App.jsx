import { Box } from '@mui/system'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import ContactModal from './components/modal/ContactModal'
import { Routing } from './libs/Routing'
import useModalStore from './store/store'
import SearchModal from './components/modal/SearchModal'


function App() {
  const {themeColors} = useModalStore()

  return (
    <Box width='100%' height='100%' bgcolor={themeColors.background}>
    <Header/>
    <Routing/>
    <Footer/>
    <ContactModal/>
    <SearchModal/>
    </Box>
  )
}

export default App
