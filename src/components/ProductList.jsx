import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import { useLocation } from "react-router-dom";

// function ProductList({ store1Arr }) {
function ProductList({ pathname }) {
  console.log("pathname :>> ", pathname);

  let productList = [];
  const { fakestoreArr } = useSelector((state) => state.fakestore);
  const { escuelajsArr } = useSelector((state) => state.escuelajs);
  if (pathname === "/fakestore") {
    productList = fakestoreArr;
  }
  if (pathname === "/escuelajs") {
    productList = escuelajsArr;
  }

  console.log("productList :>> ", productList);
  // const dispatch = useDispatch();

  return (
    <Grid
      container
      paddingTop={2}
      paddingBottom={4}
      gap={2}
      justifyContent="center"
    >
      {productList.map((product) => {
        return <ProductItem product={product} key={product.title} />;
      })}
      {/* Product array list */}
    </Grid>
  );
}

export default ProductList;
