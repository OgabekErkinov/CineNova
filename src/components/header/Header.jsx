import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import { Avatar, List, ListItem, Stack, Typography, useMediaQuery } from '@mui/material'

import Logo from '../../assets/Logo.png'
import SearchModal from '../modal/SearchModal'

const Header = () => {
    const isSmall = useMediaQuery('(max-Width : 430px)')
    const isMedium = useMediaQuery('(max-width : 900px)')

    const arrayLinks = [
        {title : 'home' , path : '/'},
        {title : 'about' , path : '/about'},
        {title : 'byGenre' , path : '/search'}
      ]
  
      const [isModalOpen, setIsModalOpen] = useState(false);

      const handleModalClose = () => {
        setIsModalOpen(false)
      }

      useEffect(() => {
        if (isModalOpen) {
          // Skrollni bloklash
          document.body.style.overflow = 'hidden';
        } else {
          // Skrollni qayta yoqish
          document.body.style.overflow = 'auto';
        }})
      
  return (
      <Stack width={'95%'} 
             height={'10rem'} 
             padding={'0.5rem 1rem'} 
             marginBottom={'1rem'}
             borderBottom={'1px solid blue'} 
            //  borderRadius={'0 0 10px 10px'} 
             boxSizing={'border-box'}>
 
         <Stack  direction={!(isSmall || isMedium) ? 'row' : 'column'} 
                 justifyContent={'space-around'} 
                 alignItems={'center'} 
                 padding={'0 10px'} 
                 width={'100%'} 
                 height={'100%'}>

         <Link to = '/' 
               style={{textDecoration : 'none'}}>
              <Stack direction={'row'} 
                     alignItems={'center'} 
                     gap={'1.5rem'} 
                     fontSize={'1.5rem'} 
                     color={'aliceblue'}>
                
              <Avatar src={Logo} 
                      alt="Logo" 
                      sx={{ height: (isSmall || isMedium) ? '50px' : '100%', 
                            width : (isSmall || isMedium) ? '50px' : '8rem' }} />
              <Typography display={'flex'} 
                          fontSize={'1.5rem'}>
                            movie<span style = {{color : 'blue'}}>
                                      App
                                  </span>
              </Typography>

              </Stack>
         </Link>

      <List sx={{display : 'flex', 
                 justifyContent : 'center', 
                 alignItems : 'center', 
                 listStyle : 'none', 
                 height : '100%', 
                 gap : '5px', 
                 fontSize : '1.5rem'}}>
      {arrayLinks?.map((el,idx)=>{
                    return <ListItem key={idx} sx={{ borderRadius : '5px', 
                                                     border : '0.5px solid blue', 
                                                     padding : '5px', 
                                                     mb : '1rem', 
                                                     transition : '0.4s', 
                                                     color : 'blue',
                                                    '&:hover' : {transition : '0.4s', 
                                                                 transform : 'scale(1.1)'}}}>
                              <Link to={el.path} 
                                    style={{textDecoration : 'none'}}> 
                                    {el.title} 
                              </Link> 

                           </ListItem>
            })}
            <ListItem  onClick={() => setIsModalOpen(true)} sx={{borderRadius : '5px', 
                                                                 border : '0.5px solid blue', 
                                                                 padding : '5px', mb : '1rem', 
                                                                 transition : '0.4s', 
                                                                 '&:hover' : {transition : '0.4s', 
                                                                              transform : 'scale(1.1)'}}}>
                 <FontAwesomeIcon icon={faSearch} color='blue' 
                                 />
             </ListItem>  
             <SearchModal isOpen={isModalOpen} onClose={handleModalClose}/>


      </List>

         </Stack>

      </Stack>

  )
}

export default Header