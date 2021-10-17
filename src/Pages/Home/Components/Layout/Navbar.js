import { Box, Avatar } from "@mui/material";

import { ShoppingCart, Person } from "@mui/icons-material";
import logo from "../../../Admin/Components/AdminNavbar/images/dell_logo.svg";

const Navbar = () => (
  <Box
    sx={{
      width: "100%",
      height: 80,
      marginTop: 2,
      display: "flex",
      direction: "column",
      justifyContent: "space-between",
    }}
  >
    {/* left side logo */}
    <Box
      sx={{
        height: "100%",
        width: "10%",
      }}
    >
      <Avatar
        alt="Dell"
        src={logo}
        sx={{ width: 70, height: 70, marginLeft: 5 }}
      />
    </Box>

    <Box
      sx={{
        height: "100%",
        "& > :not(style)": {
          m: 2,
        },
      }}
    >
      <ShoppingCart sx={{ color: "GrayText" }} fontSize="large" />
      <Person sx={{ color: "GrayText" }} fontSize="large" />
    </Box>
  </Box>
);

export default Navbar;
