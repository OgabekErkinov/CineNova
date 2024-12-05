import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { Box, Button, Stack, TextField } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { createPortal } from 'react-dom';

import { useDebounce } from '../../hook/useDebounce';
import MyPagination from '../pagination/MyPagination';
import SwiperItem from '../swiper/SwiperItem';
import { getSearchedMovie } from '../../services/service.Api';

const SearchModal = ({ isOpen, onClose, children }) => {
  if(!isOpen) {
    return null
  }

  const [inputValue, setInputValue] = useState('');
  const { debounceValue } = useDebounce(inputValue);

  const { data, isError, isPending } = useQuery({
    queryKey: ['searchedMovies', debounceValue],
    queryFn: () => getSearchedMovie(debounceValue),
  });

  const searchPerView = 13;
  const [currentSearchPage, setCurrentSearchPage] = useState(1);
  const [searchPageCount, setSearchPageCount] = useState(1);

  useEffect(() => {
    setSearchPageCount(Math.ceil((data?.length || 0) / searchPerView));
  }, [data]);
  const firstIndex = (currentSearchPage - 1) * searchPerView;
  const lastIndex = currentSearchPage * searchPerView;

  const isLoading = isPending || isError;

  const handle = {
    searchChange: (e, p) => setCurrentSearchPage(p),
    inputChange: (e) => setInputValue(e.target.value),
  };

  return (
    createPortal(
      <Stack
      height='auto'
      width="90%"
      border="1px solid rgb(21, 11, 173)"
      borderRadius="10px"
      boxSizing='border-box'
      bgcolor="rgba(69, 68, 104, 0.8)"
      position="fixed"
      overflow="hidden"
      zIndex={2}
      alignItems="center"
      
      
      
    >
      <Button
        sx={{
          height: '3rem',
          width: '3rem',
          borderRadius: '50%',
          marginLeft: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxSizing : 'border-box'
        }}
        onClick={onClose}
      >
        <FontAwesomeIcon icon={faClose} color="white" />
      </Button>

      <Box boxSizing={'border-box'} 
           height={'2rem'}>
      <TextField
           variant="standard"
           value={inputValue}
           onChange={handle.inputChange}
           placeholder="movie name"
           sx={{
               backgroundColor: 'transparent',
               border: 'none',
               borderRadius: '5px',
               color: 'white',
              //  boxShadow: '0 0 3px 1px rgba(251, 251, 252, 0.973)',
               height: '100%',
               margin: '0 auto',
               
               '& .MuiInputBase-input': {
                   backgroundColor: 'transparent',
                   borderRadius: '5px',
                   color: 'white',
                   height : '100%',
                   boxSizing: 'border-box',
                   padding : '5px',
                   },
                   }}
                   />
      </Box>

      <Box 
        overflow={'scroll'} width={'100%'} maxHeight={'28rem'} marginY={'0.5rem'}
        display={'grid'} gridTemplateColumns={{sm : 'repeat(2,1fr)', md : 'repeat(3,1fr)', lg : 'repeat(4,1fr)'}}
                         gridTemplateRows={{sm : 'repeat(6,1fr)', md : 'repeat(4,1fr)', lg : 'repeat(3,1fr)'}} 
                         rowGap={1.5}
                         justifyItems={'center'}
                         sx={{
                          overflowX : 'hidden',
                          '&::-webkit-scrollbar': {
                            width: '8px', 
                          },
                          '&::-webkit-scrollbar-thumb': {
                            backgroundColor: '#888', 
                            borderRadius: '10px', 
                          },
                          '&::-webkit-scrollbar-track': {
                            backgroundColor: '#f1f1f1', 
                          },
                          '&::-webkit-scrollbar-thumb:hover': {
                            backgroundColor: '#555', 
                          },
                        }}

        >
      
        {data?.slice(firstIndex, lastIndex).map((item, idx) => (
          item.backdrop_path && 
          <Box key={idx}
               height={'10rem'} 
               width={'16rem'} 
               border={'1px solid blue'} 
               padding={'5px'} 
               marginX={'5px'} 
               boxSizing={'border-box'} 
               position={'relative'}
               borderRadius={'5px'}
               overflow={'hidden'}>
               <SwiperItem item={item} isLoading={isLoading}  />
          </Box>
            
          ))}
      </Box>

      <MyPagination
        countPages={searchPageCount}
        handleChangePagination={handle.searchChange}
      />
    </Stack>,
    document.getElementById('root')

    )
   
  );
};

export default SearchModal;
