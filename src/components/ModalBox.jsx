import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { clearAllFavs } from "../store/sliceFavs";

export default function ModalBox({ handleClose }) {
  const { favsProducts } = useSelector((state) => state.favs);
  const dispatch = useDispatch();

  return (
    <>
      {favsProducts.length > 0 && (
        <Box display="flex" flexDirection="column">
          <Box
            display="flex"
            justifyContent="space-between"
            mb={2}
            alignItems="center"
          >
            <Typography id="modal-modal-title" variant="h5" component="h2">
              Favourite products
            </Typography>
            <Button
              onClick={() => dispatch(clearAllFavs())}
              to="/"
              variant="outlined"
              color="primary"
            >
              Clear favourites
            </Button>
          </Box>
          <Box display="flex" gap={2} flexWrap="wrap">
            <Box sx={{ width: 946, bgcolor: "background.paper", p: 2 }}>
              <Box
                sx={{
                  overflowY: "auto",
                  maxHeight: 460,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "16px",
                  justifyContent: "space-evenly",
                }}
              >
                {/* Scrollable content */}
                {favsProducts.map((item) => {
                  return <ProductItem key={item.title} product={item} />;
                })}
                {/* Scrollable content */}
              </Box>
            </Box>
          </Box>
        </Box>
      )}
      {favsProducts.length === 0 && (
        <Box display="flex" flexDirection="column">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Seems like you don't have favourites products now
          </Typography>
          <Box display="flex" alignItems="baseline" justifyContent="center">
            <Typography id="modal-modal-description" sx={{ mt: 2, mr: 2 }}>
              Go ahead and find something intresting
            </Typography>
            <Button
              component={Link}
              onClick={handleClose}
              to="/"
              variant="outlined"
              color="primary"
            >
              Go to stores
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
}
