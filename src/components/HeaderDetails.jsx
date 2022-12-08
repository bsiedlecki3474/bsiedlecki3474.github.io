import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const HeaderDetails = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{
      width: '100%',
      alignSelf: 'center',
      boxSizing: 'border-box',
      px: isMobile ? 0 : 16,
      textAlign: isMobile ? 'center' : 'right',
      zIndex: 0,
      pointerEvents: 'none'
    }}>
      <Typography
        component="h1"
        variant="h3"
        color="#eee"
        sx={{  }}
      >Bartosz Siedlecki</Typography>
      <Typography
        component="h2"
        variant="h4"
        color="#eee"
        sx={{ fontWeight: 300, textShadow: '2px 2px 4px #000' }}
      >fullstack developer</Typography>
    </Box>
  )
}

export default HeaderDetails;