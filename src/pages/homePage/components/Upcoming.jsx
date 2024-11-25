import { useQuery } from '@tanstack/react-query'
import { getNewMovies } from '../../../services/service.Api'
import CustomSwiper from '../../../components/swiper/CustomSwiper'


const Upcoming = () => {
      const {data, isError, isPending} = useQuery({queryKey : ['upComing'], queryFn : getNewMovies})

  return ( 
         <CustomSwiper array={data} error={isError} pending={isPending}/>

  )
}


export default Upcoming