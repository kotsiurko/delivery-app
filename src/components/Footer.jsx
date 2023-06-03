import { Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1976d2",
        padding: "1rem",
        textAlign: "center",
        marginTop: "auto",
      }}
    >
      <Typography variant="body2" color="#fff">
        2023 &copy; Roman Kotsiurko
      </Typography>
    </Box>
  );
};

export default Footer;
