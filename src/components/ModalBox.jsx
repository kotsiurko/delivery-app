import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function ModalBox({ handleClose }) {
  const { favsProducts } = useSelector((state) => state.favs);
  return (
    <>
      {/* НАПИСАТИ ЗАГЛУШКУ НА ВИПАДОК, КОЛИ НЕМА УЛЮБЛЕНИХ ТОВАРІВ */}
      {favsProducts.length > 0 && (
        <>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Favourite products
          </Typography>
          <Box display="flex" gap={2}>
            {favsProducts.map((item) => {
              return <ProductItem key={item.title} product={item} />;
            })}
          </Box>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Total cost:
          </Typography>
        </>
      )}
      {favsProducts.length === 0 && (
        <>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Seems like you don't have favourites products now
          </Typography>
          <Box display="flex" alignItems="baseline">
            <Typography id="modal-modal-description" sx={{ mt: 2, mr: 2 }}>
              Go ahead and find something intresting
            </Typography>
            <Button
              component={Link}
              onClick={handleClose}
              to="/"
              variant="contained"
              color="primary"
            >
              Go to stores
            </Button>
          </Box>
        </>
      )}
    </>
  );
}
