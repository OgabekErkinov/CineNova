import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const MyPagination = ({countPages, handleChangePagination}) => {

  return (
    <Stack spacing={2} className='m-t-b'>
        <Pagination count={countPages} 
                    variant="outlined"
                    shape="circular"
                    onChange={(e,p)=>handleChangePagination(e,p)}/>
    </Stack>
  )
}

export default MyPagination