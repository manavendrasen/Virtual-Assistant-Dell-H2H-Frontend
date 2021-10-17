import { Box, Avatar, Typography } from "@mui/material";
import logo from "./images/dell_logo.svg";

const Navbar = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      margin: "0 2em",
    }}
  >
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Avatar src={logo} sx={{ margin: 2 }} />
      <Typography>Dell Admin DashBoard</Typography>
    </Box>

    <Avatar sx={{ bgcolor: "#B0D4F2", margin: 2 }}>OP</Avatar>
  </Box>
);

export default Navbar;
