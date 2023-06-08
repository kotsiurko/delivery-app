import { addToCart, removeFromCart } from "../store/sliceCart";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { useEffect, useState } from "react";
import {
  useDispatch,
  // useSelector
} from "react-redux";
import { useLocation, useParams } from "react-router-dom";

const maxTitleLength = 32;

function Item() {
  // const { cartProducts } = useSelector((state) => state.cart);

  const { id } = useParams();
  const location = useLocation();
  const { pathname } = location;
  const dispatch = useDispatch();
  console.log("location :>> ", location);

  const [storeProduct, setStoreProduct] = useState();

  let storeAPI = "";
  if (pathname.includes("fakestore")) {
    console.log("first");
    storeAPI = "https://fakestoreapi.com/products";
  }
  if (pathname.includes("escuelajs")) {
    console.log("second");
    storeAPI =
      "https://api.escuelajs.co/api/v1/products/?price_min=100&price_max=1000&offset=10&limit=10";
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(storeAPI);
        const data = await response.json();
        const newArr = data.map((item) => {
          return {
            ...item,
            store: pathname,
          };
        });

        console.log("newArr :>> ", newArr);
        console.log("id :>> ", id);
        let storeProduct = newArr.find((el) => el.id === Number(id));
        console.log("storeProduct is :>> ", storeProduct);
        setStoreProduct(storeProduct);

        // setProductsArr(newData);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  // let truncatedTitle = "";
  // if (storeProduct.title.length > maxTitleLength) {
  //   truncatedTitle = storeProduct.title.slice(0, maxTitleLength) + "...";
  // } else {
  //   truncatedTitle = storeProduct.title;
  // }

  // let img = "";
  // if (storeProduct.image) {
  //   img = storeProduct.image;
  // } else {
  //   img = storeProduct.images[0];
  // }

  return (
    <>
      <hr />
      <div>Page with detailed product description of product with id#{id}</div>
      {/* <div>Product title: {storeProduct.title}</div> */}
      <hr />
      <div>Styles will be soon)</div>
      {/* <Card sx={{ width: 276, display: "flex", flexDirection: "column" }}>
        <CardMedia
          component="img"
          height="200"
          image={img}
          alt={storeProduct.title}
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
              Price: ${storeProduct.price}
            </Typography>

            <Box display="flex" justifyContent="center">
              {cartProducts.some(
                (cartItem) => cartItem.title === storeProduct.title
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
      </Card> */}
    </>
  );
}

export default Item;
