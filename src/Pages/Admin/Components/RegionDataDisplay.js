import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import "./Component-Styles/RegionDataStyle.css";

const RegionDataDisplay = () => {
  const [myState] = useSelector(state => state.region);
  return (
    <Box sx={{ padding: 15 }}>
      <Typography variant="h5" className="country">
        {myState.country}
      </Typography>
      <Typography>
        Email Issues:<span>{myState.email}</span>
      </Typography>
      <Typography>{myState.zip}</Typography>
    </Box>
  );
};
export default RegionDataDisplay;
