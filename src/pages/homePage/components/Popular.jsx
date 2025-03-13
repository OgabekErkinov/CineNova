import { useQuery } from '@tanstack/react-query';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { getPopularData } from '../../../services/service.Api';
import MovieCard from './MovieCard';
import Loading from '../../../components/Loading/Loading';

const Popular = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ['popularMovie'],
    queryFn: getPopularData,
  });

  return (
    <Box width="95%" height="42rem" marginX="auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ dynamicBullets: true }}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        style={{ height: '100%' }}
      >
        {data?.slice(0, 10).map((item, idx) => {
          return (
            <SwiperSlide
              key={idx}
              style={{
                height: '100%',
                width: '100%',
                borderRadius: '10px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center', 
              }}
            >
              {!isError && !isPending ? (
                <MovieCard movie={item} />
              ) : (
                <Loading />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default Popular;
