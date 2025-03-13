import { useQuery } from '@tanstack/react-query';
import { Box, Stack, Typography } from '@mui/material';
import { useParams } from 'react-router';
import { getSingleMovie } from '../../services/service.Api';
import { imageUrl } from '../../utils/imageUrl';
import Similar from './similarMovies/Similar';
import HeaderSection from '../../components/sectionHeader/HeaderSection';
import LazyLoading from '../../components/Loading/LazyLoading';
import useUIStore from '../../store/store';

const ChosenMoviePage = () => {
  const {themeColors} = useUIStore()
  const { id } = useParams();
  const similarId = id.split('-').pop();

  const { data, isError, isPending } = useQuery({
    queryKey: ['singleMovie', similarId],
    queryFn: ({ queryKey }) => getSingleMovie(queryKey[1]),
  });

  if (isError || isPending) {
    return <LazyLoading />;
  }

  const infoAboutMovie = [
    { type: 'Name:', value: data?.original_title },
    { type: 'Year:', value: new Date(data?.release_date).getFullYear() },
    { type: 'Genres:', value: data?.genres?.map((item) => item.name).join(' | ') },
    { type: 'Votes:', value: data?.vote_count },
    { type: 'Country:', value: data?.production_countries.map((item) => item.name).join(' | ') },
    { type: 'Date:', value: data?.release_date },
    { type: 'Languages:', value: data?.spoken_languages.map((item) => item.name).join(' | ') },
    { type: 'Duration:', value: `${Math.floor(data?.runtime / 60)} h ${data.runtime % 60} m` },
  ];

  return (
    <Stack width="100%" height="auto" pt='15vh'>
      {/* Main container with movie details */}
      <Stack
        width="90%"
        mx='auto'
        height='auto'
        bgcolor="rgba(116, 116, 121, 0.62)"
        color={themeColors.color}
        fontWeight={700}
        padding="0.5rem"
        gap='12px'
        borderRadius="5px"
        direction={{ sm: 'column', md: 'column', lg: 'row' }}
      >
        {/* Movie poster */}
        <Stack
          height='80vh'
          width={{ sm: '100%', md: '80%', lg: '45%' }}
          mx='auto'
          boxSizing="border-box"
          display="flex"
          justifyContent="center"
        >
          <img
            src={`${imageUrl.img500}${data?.poster_path}`}
            alt="Movie poster"
            style={{
              maxWidth: '100%',
              height : '100%',
              boxShadow: '0 0 9px 3px rgba(75, 75, 82, 0.62)',
              borderRadius: '5px',
            }}
          />
        </Stack>

        {/* Movie information */}
        <Stack
          height={{xs : 'auto', sm : 'auto', md:'auto', lg:'70vh'}}
          width={{ sm: '100%', md: '100%', lg: '50%' }}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box width='100%' >{data?.overview}</Box>
          <Box>
          {infoAboutMovie.map((item, idx) => (
            <Stack
              key={idx}
              flexDirection="row"
              justifyContent="space-between"
              width="100%"
            >
              <Box
                width="100%"
                padding="5px"
                display="flex"
                alignItems="center"
                bgcolor="rgba(57, 57, 59, 0.1)"
              >
                <Box width={{ sm: '30%' }} mr="10px">
                  {item.type}
                </Box>
                <Typography variant="body2" component="span" boxSizing="border-box">
                  {item.value}
                </Typography>
              </Box>
            </Stack>
          ))}
          </Box>

          {/* Production companies logos */}
          <Stack width="100%" height='auto' direction="row" flexWrap="wrap" justifyContent="space-evenly">
            {data?.production_companies?.map(
              (item, idx) =>
                item?.logo_path && (
                  <img
                    src={`${imageUrl.img500}${item.logo_path}`}
                    key={idx}
                    alt={`${item?.name} logo`}
                    style={{
                      height: '52px',
                      width: '52px',
                      margin: '5px',
                      objectFit: 'contain',
                      borderBottom: '0.5px solid rgba(231, 242, 243, 0.7)',
                    }}
                  />
                )
            )}
          </Stack>
        </Stack>
      </Stack>

      {/* Similar Movies Section */}
      <Box
        height="40vh"
        width="90%"
        margin="0.5rem auto"
        padding="0.5rem"
        borderRadius="15px"
        overflow="hidden"
      >
        <HeaderSection sectionTitle={'Similar Movies'} />
        <Similar id={similarId} />
      </Box>
    </Stack>
  );
};

export default ChosenMoviePage;
