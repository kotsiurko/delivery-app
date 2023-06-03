import { Grid } from "@mui/material";
import ProductItem from "./ProductItem";

function ProductList({ store1Arr }) {
  return (
    <Grid
      container
      paddingTop={2}
      paddingBottom={4}
      gap={2}
      justifyContent="center"
    >
      {store1Arr.map((product) => {
        return <ProductItem product={product} key={product.title} />;
      })}
    </Grid>
  );
}

export default ProductList;
