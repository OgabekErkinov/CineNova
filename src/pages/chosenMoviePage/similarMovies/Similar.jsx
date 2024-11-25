import { useQuery } from '@tanstack/react-query';
import { getSimilarMovies } from '../../../services/service.Api';
import CustomSwiper from '../../../components/swiper/CustomSwiper';
import LazyLoading from '../../../components/Loading/LazyLoading';

const Similar = ({ id }) => {
  const { data, isError, isPending } = useQuery({
    queryKey: ['similarMovies', id],
    queryFn: () => getSimilarMovies(id)
  });

  if (isError || isPending) {
    return <LazyLoading/>;
  }

  return (  
      
      <CustomSwiper array={data}  error={isError} pending={isPending} />
    
  );
};

export default Similar;
