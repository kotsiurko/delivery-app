import { useDispatch } from "react-redux";
import { setDataFakeStore } from "../store/sliceShop1";
import { setDataEscuelajs } from "../store/sliceShop2";
import {
  useEffect,
  // useState
} from "react";
import ProductList from "./ProductList";
import {
  Box,
  Typography,
  // Button
} from "@mui/material";
import {
  Link,
  useLocation,
  // useNavigate
} from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import { getShopinfo } from "../utils/helpers";

const Stores = () => {
  const dispatch = useDispatch();
  // const [productsArr, setProductsArr] = useState([]);

  // const navigate = useNavigate();
  // const goBack = () => {
  //   navigate(-1);
  // };

  const { pathname } = useLocation();
  // console.log("location :>> ", location);
  let storeAPI = "";
  if (pathname === "/fakestore") {
    console.log("first");
    storeAPI = "https://fakestoreapi.com/products";
  }
  if (pathname === "/escuelajs") {
    console.log("second");
    storeAPI =
      "https://api.escuelajs.co/api/v1/products/?price_min=100&price_max=1000&offset=10&limit=10";
  }

  // console.log("storeAPI :>> ", storeAPI);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(storeAPI);
        const data = await response.json();
        const newData = data.map((item) => {
          return {
            ...item,
            // store: pathname,
            store: getShopinfo(pathname).shopName,
          };
        });
        if (pathname === "/fakestore") {
          dispatch(setDataFakeStore(newData));
        }
        if (pathname === "/escuelajs") {
          dispatch(setDataEscuelajs(newData));
        }

        // setProductsArr(newData);
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
        {/* <Button
          onClick={goBack}
          variant="contained"
          color="primary"
          // sx={{ position: "absolute" }}
        >
          Back
        </Button> */}
        <Typography variant="h4" sx={{ mx: "auto" }}>
          {pathname === "/fakestore" && <>You are in the Fakestore Shop</>}
          {pathname === "/escuelajs" && <>You are in the Escuelajs Shop</>}
        </Typography>
      </Box>
      {/* <ProductList store1Arr={store1Arr} /> */}
      <ProductList pathname={pathname} />
    </>
  );
};

export default Stores;
