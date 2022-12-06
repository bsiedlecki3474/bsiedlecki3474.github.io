import { Container, Paper } from "@mui/material";

import Header from './Header'
import DataTablePanel from "./panels/DataTablePanel";

const PageContainer = props => {
  return (
    <>
      <Header />
      <Container sx={{ marginTop: -2 }} >
        <Paper elevation={6} sx={{
          position: 'relative',
          my: -6,
          padding: 4
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
    </>
  )
}

export default PageContainer;