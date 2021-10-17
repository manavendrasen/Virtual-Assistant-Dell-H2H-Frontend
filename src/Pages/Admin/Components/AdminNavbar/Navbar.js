import { Box, Avatar, Typography, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import logo from "./images/dell_logo.svg";

const Navbar = () => (
  <Box className="flex justify-between items-center px-8 mb-4 border-b-2 border-gray-300">
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Avatar src={logo} className="mr-4" />
      <Typography variant="h6">Admin DashBoard</Typography>
    </Box>

    <div className="flex gap-4 items-center">
      <TextField label="Search Issues" size="small" />
      <Avatar sx={{ bgcolor: "#B0D4F2", margin: 2 }}>MS</Avatar>
    </div>
  </Box>
);

export default Navbar;
