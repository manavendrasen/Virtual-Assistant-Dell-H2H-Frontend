import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import "./Component-Styles/RegionDataStyle.css";

const RegionDataDisplay = () => {
  const [myState] = useSelector(state => state.region);
  return (
    <Box
      sx={{
        margin: 7,
        paddingLeft: 5,
      }}
    >
      <Typography variant="h2" className="country">
        {myState.country}
      </Typography>
      <Typography variant="h5" className="email">
        Email Issues:{" "}
        <span style={{ fontWeight: "bold" }}>{myState.email}</span>
      </Typography>
      <Typography variant="h5" className="zip">
        Zip Issues: <span style={{ fontWeight: "bolder" }}>{myState.zip}</span>
      </Typography>
    </Box>
  );
};
export default RegionDataDisplay;
