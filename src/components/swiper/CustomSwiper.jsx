import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import SwiperItem from './SwiperItem';
import useUIStore from '../../store/store';


const CustomSwiper = ({array, error, pending}) => {
  const {themeColors} = useUIStore()

  let isLoading = (error || pending) ? true : false
  return (
        <Swiper
              
              breakpoints={{
                            240 : { slidesPerView : 1 },
                            426 : { slidesPerView : 2 },
                            540 : { slidesPerView : 3 },
                            750 : { slidesPerView : 4 }
                          }}
              modules={[ Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={4}
               loop
               autoplay={{
               delay : 3000,
               disableOnInteraction: false,
                         }}
               style={{width : '95%'}} >
      {Array.isArray(array) && array.slice(0, 10).map((item, idx) => {
  
            return item.backdrop_path ? (
                       <SwiperSlide key={idx}
                                    style={{
                                     border: `1px solid ${themeColors.color}`,
                                     borderRadius: '5px',
                                     padding: '5px',
                                     boxSizing: 'border-box',
                                     height: '12rem',
                                     overflow: 'hidden',
                                    }}>
                                  <SwiperItem item={item} isLoading={isLoading} />
                     </SwiperSlide>
                                        ) : null; 
})}

        </Swiper>
  )
}

export default CustomSwiper