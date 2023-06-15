import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

function Loader() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", paddingTop: "1rem" }}>
      <CircularProgress />
    </Box>
  );
}

export default Loader;
