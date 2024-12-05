import {  CircularProgress, Link, Typography } from "@mui/material"
import { toSinglePage } from "../../utils/helperCode"
import {imageUrl} from "../../utils/imageUrl"

const SwiperItem = ({item, isLoading}) => {
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
                      color={'white'}
                      fontSize={{sm : '4px', md : '8px', lg : '10px'}}
                      overflow={'hidden'}
                      fontWeight={700}
                      bgcolor={'rgba(12, 12, 85, 0.24)'}
                      width={'100%'}
                      paddingX={'5px'}
                      boxSizing={'border-box'}
                      bottom={'8px'}>{item?.title}
          </Typography>                            
      </Link>
    )
  }
  
}

export default SwiperItem