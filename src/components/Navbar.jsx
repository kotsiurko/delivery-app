import React from "react";
import { AppBar, Toolbar, IconButton, Badge, Box } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cartProducts } = useSelector((state) => state.cart);

  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <IconButton edge="start" color="inherit" aria-label="Main">
            Delivery App
          </IconButton>
        </Link>
        <Box sx={{ flexGrow: 1 }} />
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
