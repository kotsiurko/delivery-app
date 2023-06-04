import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/sliceCart";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const maxTitleLength = 32;

function ProductItem({ product }) {
  const { cartProducts } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  let truncatedTitle = "";
  if (product.title.length > maxTitleLength) {
    truncatedTitle = product.title.slice(0, maxTitleLength) + "...";
  } else {
    truncatedTitle = product.title;
  }

  let img = "";
  if (product.image) {
    img = product.image;
  } else {
    img = product.images[0];
  }

  return (
    <>
      <Card sx={{ width: 276, display: "flex", flexDirection: "column" }}>
        <CardMedia
          component="img"
          height="200"
          image={img}
          alt={product.title}
          style={{ objectFit: "contain" }}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flexGrow: "1",
          }}
        >
          <Typography variant="h6">{truncatedTitle}</Typography>
          <Box>
            <Typography variant="body1" color="#1c1414cc" mb={2}>
              Price: ${product.price}
            </Typography>

            <Box display="flex" justifyContent="center">
              {cartProducts.some(
                (cartItem) => cartItem.title === product.title
              ) ? (
                <Button
                  variant="contained"
                  onClick={() => dispatch(removeFromCart(product))}
                >
                  Remove from cart
                </Button>
              ) : (
                <Button
                  variant="contained"
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add to cart
                </Button>
              )}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

export default ProductItem;
