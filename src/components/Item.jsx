// import { addToCart, removeFromCart } from "../store/sliceCart";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import { useEffect, useState } from "react";
import // useDispatch,
// useSelector
"react-redux";
import { useLocation, useParams } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import { getShopinfo } from "../utils/helpers";

function Item() {
  const { id } = useParams();
  const location = useLocation();
  const { pathname } = location;

  const [product, setProduct] = useState();

  // let storeAPI = "";
  // if (pathname.includes("fakestore")) {
  //   console.log("first");
  //   storeAPI = "https://fakestoreapi.com/products";
  // }
  // if (pathname.includes("escuelajs")) {
  //   console.log("second");
  //   storeAPI =
  //     "https://api.escuelajs.co/api/v1/products/?price_min=100&price_max=1000&offset=10&limit=10";
  // }

  const shopObj = getShopinfo(pathname);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(shopObj.storeAPI);
        const data = await response.json();
        const newArr = data.map((item) => {
          return {
            ...item,
            store: pathname,
          };
        });

        // console.log("newArr :>> ", newArr);
        // console.log("id :>> ", id);
        let storeProduct = newArr.find((el) => el.id === Number(id));
        // console.log("storeProduct is :>> ", storeProduct);
        setProduct(storeProduct);

        // setProductsArr(newData);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id, pathname, shopObj.storeAPI]);

  console.log("I'm in the product page");

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
                <Button variant="contained" color="primary">
                  Add to Cart
                </Button>
              </Grid>
            </Grid>
          </Container>
        </>
      )}
    </>
  );
}

export default Item;
