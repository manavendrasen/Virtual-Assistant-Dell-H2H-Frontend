import { Box, Avatar, Typography, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import logo from "./images/dell_logo.svg";

const Navbar = props => (
  <Box className="flex justify-between items-center px-24 mb-6 h-16 border-b-2 border-gray-300">
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ width: 32, height: 32 }} src={logo} className="mr-3" />
      <Typography variant="h6" className="text-primary">
        {props.title}
      </Typography>
    </Box>

    <div className="flex gap-4 items-center">
      <TextField label="Search Issues" size="small" />
      <Avatar sx={{ bgcolor: "#B0D4F2" }}>MS</Avatar>
    </div>
  </Box>
);

export default Navbar;
