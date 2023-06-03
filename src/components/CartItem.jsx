import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/sliceCart";

const maxDescriptionLength = 300;

const CardItem = ({ item }) => {
  const dispatch = useDispatch();

  const { title, price, description, image, images } = item;
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

  return (
    <Card>
      <Box display="flex" justifyContent="space-between" p={1}>
        <Box display="flex" p={1}>
          <CardMedia
            component="img"
            src={img}
            alt={title}
            sx={{ width: 100 }}
          />
          <CardContent
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography variant="subtitle1" component="div">
                {title}
              </Typography>
              <Typography variant="body2" component="div">
                {truncatedDescription}
              </Typography>
            </Box>
            <Typography variant="body2">Price: ${price}</Typography>
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
