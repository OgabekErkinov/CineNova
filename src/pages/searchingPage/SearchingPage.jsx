import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Avatar, Box, Button, CircularProgress, Stack, Typography } from "@mui/material";
import { getMoviebyGenre } from "../../services/service.Api";
import { genres } from "./constanta";
import MyPagination from '../../components/pagination/MyPagination';
import SwiperItem from '../../components/swiper/SwiperItem';
import useUIStore from '../../store/store';

const SearchingPage = () => {
  const {themeColors} = useUIStore()
  const [chosenGenre, setChosenGenre] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const chosenPerView = 10;

  // Calculate firstIndex for pagination
  const firstIndex = chosenPerView * (currentPage - 1);

  const { data, isError, isLoading } = useQuery({
    queryKey: ['searchByGenres', chosenGenre, currentPage],  
    queryFn: ({ queryKey }) => getMoviebyGenre(queryKey[1]),
  });

  // Calculate number of pages whenever data changes
  const countPages = data ? Math.ceil(data.length / chosenPerView) : 1;

  const handle = {
    genre: (genreId) => {
      setChosenGenre(`&with_genres=${genreId}`);
      setCurrentPage(1); // Reset page
    },
    changePage: (e, page) => {
      setCurrentPage(page);
    },
  };

  if (isLoading) return <CircularProgress />;
  if (isError) return <CircularProgress />;

  return (
    <Stack
      width={'100%'}
      height={'auto'}
      direction={'row'}
      flexWrap={'wrap'}
      padding={'0.5rem'}
      gap='12px'
      pt='12vh'
      justifyContent={'center'}
      bgcolor={themeColors.background}
    >
      {/* Genre Selection */}
      <Stack height={'5rem'} width={'100%'} margin={'1rem'} direction={'row'} justifyContent={'space-evenly'} 
        sx={{
          overflowX: 'auto',
          overflowY: 'hidden',
          '&::-webkit-scrollbar': {
            height: '8px',
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
        {genres.map((item, idx) => (
          <Button key={idx} onClick={() => handle.genre(item.id)}>
            <Stack height={'100%'} width={'3rem'} alignItems={'center'} gap={'0.5rem'} marginX={'5px'}>
              <Avatar src={item.image} />
              <Typography color={themeColors.color} width={'100%'} fontSize={'10px'} textAlign={'center'}>
                {item.name}
              </Typography>
            </Stack>
          </Button>
        ))}
      </Stack>

      {/* Movie Swiper */}
      <Box display={'grid'} gridTemplateColumns={{ sm: "repeat(2, 2fr)", md: "repeat(3, 2fr)", lg: "repeat(5, 2fr)" }} 
        gridTemplateRows={{ sm: "repeat(5, auto)", md: "repeat(4, auto)", lg: "repeat(2, auto)" }} 
        width={'100%'} justifyItems={'center'} rowGap={'5px'}
      >
        {Array.isArray(data) && data.slice(firstIndex, firstIndex + chosenPerView).map((item, idx) => (
          <Box height={'12rem'} width={'16rem'} border={`1px solid ${themeColors.color}`} padding={'5px'} marginX={'5px'} position={'relative'}
            borderRadius={'5px'} key={idx}
          >
            <SwiperItem item={item} isLoading={isLoading} />
          </Box>
        ))}
      </Box>

      {/* Pagination */}
      <MyPagination countPages={countPages} handleChangePagination={handle.changePage} />
    </Stack>
  );
};

export default SearchingPage;
