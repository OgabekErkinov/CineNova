import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useDebounce } from '../../hook/useDebounce';
import MyPagination from '../pagination/MyPagination';
import SwiperItem from '../swiper/SwiperItem';
import { getSearchedMovie } from '../../services/service.Api';
import useUIStore from '../../store/store';
import useSearchStore from '../../store/search';

const SearchModal = () => {
  const { themeColors } = useUIStore();
  const { isSearchModalOpen, toggleSearchModal, searchInputValue} = useSearchStore()
  const {debounceValue} = useDebounce(searchInputValue);

  const { data, isError, isPending } = useQuery({
    queryKey: ['searchedMovies', debounceValue],
    queryFn: () => getSearchedMovie(debounceValue),
    enabled: !!(debounceValue),
  });

  const searchPerView = 12;
  const [currentSearchPage, setCurrentSearchPage] = useState(1);
  const [searchPageCount, setSearchPageCount] = useState(1);

  useEffect(() => {
    setSearchPageCount(Math.ceil((data?.length || 0) / searchPerView));
  }, [data]);

  const firstIndex = (currentSearchPage - 1) * searchPerView;
  const lastIndex = currentSearchPage * searchPerView;
  const isLoading = isPending || isError;

  return (
    <Stack
      display={isSearchModalOpen ? 'flex' : 'none'}
      flexDirection="column"
      height="90vh"
      width="100%"
      py={4}
      px={2}
      borderRadius="12px"
      bgcolor={themeColors.background}
      position="fixed"
      top="12vh"
      left="0"
      zIndex={10}
      alignItems="center"
      justifyContent="center"
      sx={{ backdropFilter: 'blur(10px)' }}
    >
      <Button
        aria-label="Close Search Modal"
        sx={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          color: themeColors.color,
        }}
        onClick={toggleSearchModal}
      >
        <FontAwesomeIcon icon={faClose} fontSize="24px" />
      </Button>

      {/* Filmlar uchun scroll qismi */}
      <Box
        width="90%"
        maxHeight="65vh"
        display="grid"
        gridTemplateColumns={{
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg : 'repeat(4,1fr)'
        }}
        rowGap={2}
        justifyItems="center"
        sx={{
          overflowY:'auto',
          overflowX: 'hidden',
          '&::-webkit-scrollbar': { width: '6px' },
          '&::-webkit-scrollbar-thumb': { backgroundColor: '#888', borderRadius: '10px' },
          '&::-webkit-scrollbar-track': { backgroundColor: '#f1f1f1' },
          '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '#555' },
        }}
      >
        {data?.slice(firstIndex, lastIndex).map((item, idx) => (
          item.backdrop_path && (
            <Box
              key={idx}
              height="10rem"
              width="16rem"
              border={`1px solid ${themeColors.color}`}
              position="relative"
              borderRadius="8px"
              overflow="hidden"
              boxShadow="0px 4px 15px rgba(0, 0, 0, 0.2)"
              sx={{
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              <SwiperItem item={item} isLoading={isLoading} />
            </Box>
          )
        ))}
      </Box>

      {!isLoading && data?.length === 0 && (
        <Typography variant="h6" color={themeColors.color} mt={2}>
          Hech narsa topilmadi
        </Typography>
      )}

      {data?.length > 0 && (
        <Box width="100%" height="10vh" display="flex" alignItems="center" justifyContent="center">
          <MyPagination countPages={searchPageCount} handleChangePagination={setCurrentSearchPage} />
        </Box>
      )}
    </Stack>
  );
};

export default SearchModal;
