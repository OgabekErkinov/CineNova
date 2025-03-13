import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import useUIStore from '../../store/store';

const HeaderSection = ({ sectionTitle }) => {
  const { themeColors } = useUIStore();

  return (
    <Box
      sx={{
        height: { xs: '24px', md: '28px', lg: '32px' },
        my : '12px',
        width: '95%',
        textAlign: 'left',
        fontSize: '24px',
        fontWeight: '700',
        color: themeColors.color,
      }}
    >
      {sectionTitle}
    </Box>
  );
};

HeaderSection.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
};

export default HeaderSection;
