import { Box, Typography } from "@mui/material";

const Header = () => {
  const h1 = null;
  return (
    <Box sx={{ display: "flex", height: 600, justifyContent: "space-evenly" }}>
      <Box sx={{ margin: "auto", flex: "0.5" }}>
        <Typography variant="h4" align="center">
          Dell Support Dashboard
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
