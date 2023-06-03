import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/sliceCart";
import {
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

  return (
    <>
      <Card sx={{ width: 276, display: "flex", flexDirection: "column" }}>
        {product.image && (
          <CardMedia
            component="img"
            height="200"
            image={product.image}
            alt="Product Image"
          />
        )}
        {product.images && (
          <CardMedia
            component="img"
            height="200"
            image={product.images[0]}
            alt="Product Image"
          />
        )}
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flexGrow: "1",
          }}
        >
          <Typography variant="h6">{truncatedTitle}</Typography>
          <Typography variant="body1" color="textSecondary">
            Price: ${product.price}
          </Typography>

          {cartProducts.some((cartItem) => cartItem.title === product.title) ? (
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
        </CardContent>
      </Card>
    </>
  );
}

export default ProductItem;
