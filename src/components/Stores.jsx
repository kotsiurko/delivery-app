import { useDispatch } from "react-redux";
import { setDataFakeStore } from "../store/sliceShop1";
import { setDataEscuelajs } from "../store/sliceShop2";
import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import { getShopinfo } from "../utils/helpers";
import Loader from "./Loader";

const Stores = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);

  let storeAPI = "";
  if (pathname === "/fakestore") {
    storeAPI = "https://fakestoreapi.com/products";
  }
  if (pathname === "/escuelajs") {
    storeAPI =
      "https://api.escuelajs.co/api/v1/products/?price_min=100&price_max=1000&offset=10&limit=10";
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(storeAPI);
        const data = await response.json();
        const newData = data.map((item) => {
          return {
            ...item,
            store: getShopinfo(pathname).shopName,
            amount: 1,
          };
        });
        setLoading(false);
        if (pathname === "/fakestore") {
          dispatch(setDataFakeStore(newData));
        }
        if (pathname === "/escuelajs") {
          dispatch(setDataEscuelajs(newData));
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch, pathname, storeAPI]);

  return (
    <>
      <Breadcrumbs />
      <Box display="flex" alignItems="center" mt={2}>
        <Typography variant="h4" sx={{ mx: "auto" }}>
          {pathname === "/fakestore" && <>You are in the Fakestore Shop</>}
          {pathname === "/escuelajs" && <>You are in the Escuelajs Shop</>}
        </Typography>
      </Box>
      {loading && <Loader />}
      {!loading && <ProductList pathname={pathname} />}
    </>
  );
};

export default Stores;
