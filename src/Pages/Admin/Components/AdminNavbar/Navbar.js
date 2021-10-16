import { Box, Avatar } from "@mui/material";
import logo from "./images/dell_logo.svg";

const Navbar = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Avatar src={logo} sx={{ margin: 2 }} />
      <h2>Dell Admin DashBoard</h2>
    </div>

    <Avatar sx={{ bgcolor: "#B0D4F2", margin: 2 }}>OP</Avatar>
  </Box>
);

export default Navbar;
