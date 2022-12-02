import { Box } from '@mui/system';
import image from '../assets/header.jpg';
import HeaderDetails from './HeaderDetails';

const Header = () => {
  return (
    <Box sx={{
      display: 'grid',
      position: 'relative',
      width: '100vw',
      height: 300,
      background: `url(${image}) center/cover`
    }}>
      <HeaderDetails />
    </Box>
  )
}

export default Header;