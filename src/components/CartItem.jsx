import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Button,
  ButtonGroup,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { removeFromCart, updateAmount } from "../store/sliceCart";
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import React from "react";

const maxDescriptionLength = 300;

const CardItem = ({ item }) => {
  const dispatch = useDispatch();

  const { title, price, description, image, images, amount } = item;
  let truncatedDescription = "";
  if (description.length > maxDescriptionLength) {
    truncatedDescription = description.slice(0, maxDescriptionLength) + "...";
  } else {
    truncatedDescription = description;
  }
  let img = "";
  if (image) {
    img = image;
  } else {
    img = images[0];
  }

  const handleSetAmount = (number) => {
    if (item.amount === 1 && number < 0) {
      dispatch(removeFromCart(item));
    } else {
      dispatch(
        updateAmount({
          item,
          value: -1,
        })
      );
    }
  };

  return (
    <Card>
      <Box display="flex" justifyContent="space-between" p={2}>
        <Box display="flex">
          <CardMedia
            component="img"
            src={img}
            alt={title}
            sx={{ width: 100 }}
            objectfit="contain"
          />
          <CardContent
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              paddingTop: "8px",
            }}
          >
            <Box>
              <Typography variant="h6" component="div">
                {title}
              </Typography>
              <Typography variant="body2" component="div">
                {truncatedDescription}
              </Typography>
            </Box>
            <Typography variant="body2" pt={1} pb={1}>
              Price: ${price}
            </Typography>
            <Typography variant="body2" pt={1} pb={1}>
              Amount:
            </Typography>
            <ButtonGroup size="small" aria-label="small button group">
              <Button variant="text">Amount:</Button>
              <Button
                variant="text"
                onClick={() => {
                  handleSetAmount(-1);
                }}
              >
                <RemoveCircleOutline fontSize="small" />
              </Button>
              <TextField
                size="small"
                aria-label="small button group"
                value={amount}
                inputProps={{ min: 1 }}
                style={{ width: "38px", textAlign: "center" }}
              />
              <Button
                variant="text"
                onClick={() => {
                  return dispatch(
                    updateAmount({
                      item,
                      value: 1,
                    })
                  );
                }}
              >
                <AddCircleOutline fontSize="small" />
              </Button>
            </ButtonGroup>
          </CardContent>
        </Box>
        <IconButton
          sx={{
            position: "relative",
            top: 0,
            right: 0,
            width: "38px",
            height: "38px",
            alignItems: "flex-start",
          }}
          onClick={() => dispatch(removeFromCart(item))}
        >
          <CloseIcon />
        </IconButton>
      </Box>
    </Card>
  );
};

export default CardItem;
