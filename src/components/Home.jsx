import { Link } from "react-router-dom";
import { Box, Card, CardContent, Typography } from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";
import StorefrontIcon from "@mui/icons-material/Storefront";

const Home = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
        <Typography variant="h3" textAlign="center">
          Welcome to the Awesome Delivery App!
        </Typography>
        <Typography variant="h4">
          Please, choose one of our online-store:
        </Typography>
      </Box>

      <Box display="flex" justifyContent="center" mt={2}>
        <Card
          component={Link}
          to="fakestore"
          sx={{
            m: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            width: 200,
            height: 200,
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <StoreIcon fontSize="large" sx={{ fontSize: 64, mb: 1 }} />
            <Typography sx={{ mt: 1, textAlign: "center" }}>
              Fakestoreapi Store
            </Typography>
          </CardContent>
        </Card>

        <Card
          component={Link}
          to="escuelajs"
          sx={{
            m: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            width: 200,
            height: 200,
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <StorefrontIcon fontSize="large" sx={{ fontSize: 64, mb: 1 }} />
            <Typography sx={{ mt: 1, textAlign: "center" }}>
              Escuelajs Store
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Home;
