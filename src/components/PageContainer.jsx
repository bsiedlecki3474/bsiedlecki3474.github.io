import { Container, Paper } from "@mui/material";

import Header from './Header'

const PageContainer = props => {
  return (
    <>
      <Header />
      <Container sx={{ marginTop: -2 }} >
        <Paper elevation={6} sx={{
          position: 'relative',
          marginTop: -6,
          padding: 4
        }}>

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