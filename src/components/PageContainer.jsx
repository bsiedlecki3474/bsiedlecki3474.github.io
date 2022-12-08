import { Container, Paper, Box } from "@mui/material";

import Header from './Header'
import DataTablePanel from "./panels/DataTablePanel";
import Particles from "./Particles";

const PageContainer = props => {
  return (
    <Box sx={{
      display: 'grid',
      placeItems: 'center',
      width: '100%',
      height: '100%'
    }}>

      <Particles />
      
      <Box sx={{ height: '100vh', width: '100%', overflowY: 'auto' }}>
        <Box sx={{ height: '300px', display: 'flex' }}>
          <Header />
        </Box>
        <Box sx={{ height: 'calc(100% - 300px)' }}>

          <Container>
            <Paper elevation={6} sx={{
              position: 'relative',
              padding: 4,
              mb: 12
            }}>

              <DataTablePanel />
              <p>content</p>
              <p>content</p>
              <p>content</p>
              <p>content</p>
              <p>content</p>
              <p>content</p>
              <p>content</p>
              <p>content</p>
              <p>content</p>
              <p>content</p>
              <p>content</p>
              <p>content</p>
              <p>content</p>
              <p>content</p>
              <p>content</p>
              <p>content</p>
              <p>content</p>
              <p>content</p>
              <p>content</p>
              <p>content</p>
              <p>content</p>
              <p>content</p>
              <p>content</p>
              <p>content</p>
              <p>content</p>
              <p>content</p>
              <p>content</p>

            </Paper>
          </Container>
        </Box>
      </Box>


    </Box>
  )
}

export default PageContainer;