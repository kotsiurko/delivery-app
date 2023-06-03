import { useDispatch } from "react-redux";
import { setData } from "../store/sliceShop2";
import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Store2 = () => {
  const dispatch = useDispatch();
  const [store2Arr, setStore2Arr] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products/?price_min=100&price_max=1000&offset=10&limit=10"
        );
        const data = await response.json();
        dispatch(setData(data));
        setStore2Arr(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <>
      <Box display="flex" alignItems="center" mt={2}>
        <Button
          component={Link}
          to="/"
          variant="contained"
          color="primary"
          sx={{ position: "absolute" }}
        >
          Back
        </Button>
        <Typography variant="h4" sx={{ mx: "auto" }}>
          You are in the Escuelajs Shop
        </Typography>
      </Box>
      <ProductList store1Arr={store2Arr} />
    </>
  );
};

export default Store2;
