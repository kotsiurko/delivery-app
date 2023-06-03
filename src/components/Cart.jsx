import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearAllItems } from "../store/sliceCart";

const ShoppingCart = () => {
  const { cartProducts } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cartProducts.reduce(
    (accumulator, cartProducts) => accumulator + cartProducts.price,
    0
  );

  return (
    <>
      <Box display="flex" alignItems="center" mt={2}>
        <Button component={Link} to="/" variant="contained" color="primary">
          Back
        </Button>
        <Typography variant="h4" sx={{ mx: "auto" }}>
          Cart
        </Typography>
        {cartProducts.length > 0 && (
          <Button
            variant="contained"
            color="primary"
            onClick={() => dispatch(clearAllItems())}
          >
            Clear Cart
          </Button>
        )}
      </Box>

      <Box display="flex" flexDirection="column" mt={4} alignItems="center">
        {totalPrice === 0 && (
          <>
            <Typography variant="h5" mb={2}>
              Your cart is empty now, but you can buy anything in one of our
              shops
            </Typography>
            <Button component={Link} to="/" variant="contained" color="primary">
              Go shopping now
            </Button>
          </>
        )}
      </Box>

      <Box display="flex" flexDirection="column" gap={4}>
        {cartProducts.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </Box>
      {totalPrice > 0 && (
        <Box display="flex" justifyContent="flex-end" mt={4}>
          <Typography variant="h6">Total: ${totalPrice}</Typography>
        </Box>
      )}
    </>
  );
};

export default ShoppingCart;
