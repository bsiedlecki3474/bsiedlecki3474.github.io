import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const Panel = props => {
  return (
    <>
      <Typography variant="h4" component="h3" sx={{ mb: 4 }}>{props.title}</Typography>
      <Box sx={{ minHeight: props.height ?? 400, background: '#ccc' }}>
        {props.children}
      </Box>
    </>
  )
}

export default Panel;