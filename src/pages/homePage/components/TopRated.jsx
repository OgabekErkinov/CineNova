import { useQuery } from '@tanstack/react-query';
import { getTopData } from '../../../services/service.Api';
import CustomSwiper from '../../../components/swiper/CustomSwiper';

import 'swiper/css';

const TopRated = () => {

  const {data, isError, isPending} = useQuery({queryKey : ['topRated'], queryFn : getTopData})

  return (
       <CustomSwiper array={data} error={isError} pending={isPending}/>
  )
}

export default TopRated