import { addToCart, removeFromCart } from "../store/sliceCart";
import { addToFavs, removeFromFavs } from "../store/sliceFavs";
import {
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import { getShopinfo } from "../utils/helpers";
import { useDispatch, useSelector } from "react-redux";

function Item() {
  const { id } = useParams();
  const location = useLocation();
  const { pathname } = location;
  const [product, setProduct] = useState();
  const shopObj = getShopinfo(pathname);
  const { cartProducts } = useSelector((state) => state.cart);
  const { favsProducts } = useSelector((state) => state.favs);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(shopObj.storeAPI);
        const data = await response.json();
        const newArr = data.map((item) => {
          return {
            ...item,
            store: shopObj.shopName,
            amount: 1,
          };
        });

        let storeProduct = newArr.find((el) => el.id === Number(id));
        setProduct(storeProduct);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id, pathname, shopObj.storeAPI, shopObj.shopName]);

  return (
    <>
      {product && (
        <>
          <Breadcrumbs shopObj={shopObj} />
          <Container maxWidth="lg">
            <Grid container spacing={3} paddingTop={4} paddingBottom={4}>
              <Grid item xs={12} md={6}>
                <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                  <CardMedia
                    component="img"
                    image={product.image ?? product.images[0]}
                    alt={product.title}
                    style={{ objectFit: "contain" }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h3" component="h1" gutterBottom>
                  {product.title}
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                  Price: ${product.price}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {product.description}
                </Typography>
                <Box display="flex" justifyContent="space-between">
                  <Box>
                    {console.log("cartProducts :>> ", cartProducts)}
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
                    {console.log("favsProducts :>> ", favsProducts)}
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
              </Grid>
            </Grid>
          </Container>
        </>
      )}
    </>
  );
}

export default Item;
