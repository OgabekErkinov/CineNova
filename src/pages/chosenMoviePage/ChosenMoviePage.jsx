import { useQuery } from '@tanstack/react-query';
import { Box, Stack, Typography } from '@mui/material';
import { useParams } from 'react-router';

import { getSingleMovie } from '../../services/service.Api';
import { imageUrl } from '../../utils/imageUrl';
import Similar from './similarMovies/Similar';
import HeaderSection from '../../components/sectionHeader/HeaderSection';
import LazyLoading from '../../components/Loading/LazyLoading';

const ChosenMoviePage = () => {
  const { id } = useParams();
  const similarId = id.split('-').pop();

  const { data, isError, isPending } = useQuery({
    queryKey: ['singleMovie', similarId],
    queryFn: ({ queryKey }) => getSingleMovie(queryKey[1]),
  });
 

  if (isError || isPending) {
    return <LazyLoading/>;
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
    // first general container 
    <Stack width={'100%'} height={'auto'} >

      {/* and main section in chosen movie */}
     <Stack
      width="90%"
      height={{sm : '48rem', md : '50rem', lg : '50rem'}}
      bgcolor="rgba(116, 116, 121, 0.62)"
      color="rgba(231, 242, 243, 0.7)"
      fontWeight={700}
      margin={'1rem auto'}
      padding="0.5rem"
      borderRadius="5px"
      direction={{sm : 'column', md : 'column', lg : 'row'}}
    >
      {/* the main image of movie in here */}
      <Stack height={{sm : '100%', md : '20rem', lg : '100%'}} 
             width={{sm : '100%', md : '80%', lg : '45%'}} 
             padding={1} boxSizing="border-box">
        <img
          src={`${imageUrl.img500}${data?.poster_path}`}
          alt="Movie poster"
          style={{
            height: '100%',
            boxShadow: '0 0 9px 3px rgba(75, 75, 82, 0.62)',
            borderRadius: '5px',
          }}
        />
      </Stack>

      {/* information of movie in here */}
      <Stack height={{sm : '10rem', md : '20rem', lg : '8rem'}} 
             width={{sm : '100%', md : '100%', lg : '50%'}}>
              
        <Box my="0.5rem">{data?.overview}</Box>
        {infoAboutMovie.map((item, idx) => (
          <Stack key={idx} 
                 flexDirection="row" 
                 justifyContent="space-between" 
                 marginY="5px" 
                 width="100%">

            <Box width="100%" 
                 padding="5px" 
                 display="flex" 
                 alignItems={'center'}             
                 bgcolor="rgba(57, 57, 59, 0.1)" >

                <Box width={{sm : '30%'}} 
                     mr="10px">
                   {item.type}
                </Box>

                <Typography variant="body2" 
                            component="span" 
                            padding={1} 
                            boxSizing={'border-box'}>
                              {item.value}
                </Typography>
            </Box>

          </Stack>
        ))}

        {/* production companies' logos are showed in here */}
        <Stack width="100%" 
               direction="row" 
               flexWrap="wrap" 
               justifyContent={'space-evenly'}>

               {data?.production_companies?.map((item, idx) => (
               item?.logo_path ?  <img
                                    src={`${imageUrl.img500}${item.logo_path}`}
                                    key={idx}
                                    alt={`${item?.name} logo`}
                                    style={{ height: '5rem', 
                                             width: '5rem', 
                                             margin: '5px', 
                                             objectFit : 'contain', 
                                             borderBottom : '0.5px solid rgba(231, 242, 243, 0.7)'}}
             /> : null
                              
         ))}

        </Stack>

      </Stack>

     </Stack>

     {/* similar movies will be showed in here */}
     <Box height={'16rem'} 
          width={'90%'} 
          margin = {'0.5rem auto'} 
          padding={'0.5rem'}
          borderRadius={'15px'}
          overflow={'hidden'}
          // bgcolor="rgba(116, 116, 121, 0.62)"
          >

           <HeaderSection sectionTitle={'Similar Movies'}/>
          <Similar id={similarId}/>
     </Box>
     
    
    </Stack>
  );
};

export default ChosenMoviePage;
