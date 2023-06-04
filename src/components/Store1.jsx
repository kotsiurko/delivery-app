import { useDispatch } from "react-redux";
import { setData } from "../store/sliceShop1";
import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Store1 = () => {
  const dispatch = useDispatch();
  const [store1Arr, setStore1Arr] = useState([]);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        dispatch(setData(data));
        setStore1Arr(data);
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
          onClick={goBack}
          variant="contained"
          color="primary"
          sx={{ position: "absolute" }}
        >
          Back
        </Button>
        <Typography variant="h4" sx={{ mx: "auto" }}>
          You are in the Fakestoreapi Shop
        </Typography>
      </Box>
      <ProductList store1Arr={store1Arr} />
    </>
  );
};

export default Store1;
