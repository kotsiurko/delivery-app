import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Breadcrumbs({ shopObj }) {
  return (
    <Box aria-label="breadcrumb" paddingTop={2} paddingBottom={2}>
      <Link to="/">Main</Link>
      {shopObj && (
        <>
          <> / </>
          <Link to={shopObj.relativeURL}>{shopObj.shopName} Shop</Link>
        </>
      )}
    </Box>
  );
}

export default Breadcrumbs;
