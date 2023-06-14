import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/sliceCart";
import { addToFavs, removeFromFavs } from "../store/sliceFavs";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import { getShopinfo } from "../utils/helpers";

const maxTitleLength = 32;

function ProductItem({ product }) {
  const { cartProducts } = useSelector((state) => state.cart);
  const { favsProducts } = useSelector((state) => state.favs);

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
        <Link to={`${getShopinfo(product.store).relativeURL}/${product.id}`}>
          <CardMedia
            component="img"
            height="200"
            image={img}
            alt={product.title}
            style={{ objectFit: "contain" }}
          />
        </Link>
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

            <Box display="flex" justifyContent="space-between">
              <Box>
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
                    variant="outlined"
                    onClick={() => dispatch(addToCart(product))}
                  >
                    Add to cart
                  </Button>
                )}
              </Box>
              <Box>
                {favsProducts.some(
                  (favItem) => favItem.title === product.title
                ) ? (
                  <Button
                    variant="contained"
                    onClick={() => dispatch(removeFromFavs(product))}
                  >
                    <FavoriteIcon />
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    onClick={() => dispatch(addToFavs(product))}
                  >
                    <FavoriteIcon />
                  </Button>
                )}
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

export default ProductItem;
