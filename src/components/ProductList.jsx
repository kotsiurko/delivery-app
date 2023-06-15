import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

function ProductList({ pathname }) {
  let productList = [];
  const { fakestoreArr } = useSelector((state) => state.fakestore);
  const { escuelajsArr } = useSelector((state) => state.escuelajs);
  if (pathname === "/fakestore") {
    productList = fakestoreArr;
  }
  if (pathname === "/escuelajs") {
    productList = escuelajsArr;
  }

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
    </Grid>
  );
}

export default ProductList;
