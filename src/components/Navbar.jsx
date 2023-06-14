import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Box,
  Fade,
  Backdrop,
} from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector } from "react-redux";
import Modal from "@mui/material/Modal";
import ModalBox from "./ModalBox";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 1000,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const Navbar = () => {
  const { cartProducts } = useSelector((state) => state.cart);
  const { favsProducts } = useSelector((state) => state.favs);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <AppBar position="static">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <ModalBox handleClose={handleClose} />
          </Box>
        </Fade>
      </Modal>

      <Toolbar>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <IconButton edge="start" color="inherit" aria-label="Main">
            Delivery App
          </IconButton>
        </Link>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton
          color="inherit"
          aria-label="Favourites"
          onClick={handleOpen}
        >
          <Badge badgeContent={favsProducts.length} color="secondary">
            <FavoriteIcon />
          </Badge>
        </IconButton>

        <IconButton
          component={Link}
          to="/cart"
          color="inherit"
          aria-label="Cart"
        >
          <Badge badgeContent={cartProducts.length} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
