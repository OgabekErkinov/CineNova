import {  CircularProgress, Link, Typography } from "@mui/material"
import { toSinglePage } from "../../utils/helperCode"
import {imageUrl} from "../../utils/imageUrl"
import useUIStore from "../../store/store"

const SwiperItem = ({item, isLoading}) => {
  const {themeColors} = useUIStore()
  if(isLoading){
    return (
      <CircularProgress/>
    )
  }else{
    return (
      <Link href = {toSinglePage(item)}>
          <img src={`${imageUrl.img500}${item?.backdrop_path}`} 
               alt="image"  
               style={{height : '100%', width : '100%'}}/>
          <Typography zIndex={1}
                      position={'absolute'}
                      color={themeColors.color}
                      fontSize={{sm : '12px', md : '14px', lg : '18px'}}
                      overflow={'hidden'}
                      fontWeight={700}
                      bgcolor={themeColors.background}
                      width={'100%'}
                      paddingX={'5px'}
                      boxSizing={'border-box'}
                      bottom={'8px'}>{item?.title?.split('').slice(0,16).join('')}
          </Typography>                            
      </Link>
    )
  }
  
}

export default SwiperItem