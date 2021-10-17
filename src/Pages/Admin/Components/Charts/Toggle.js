import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Typography, Box } from "@mui/material";
import Graph from "./Graph";
import GeoLocationAnalytics from "./GeoLocationAnalytics";

const Toggle = () => {
  const [alignment, setAlignment] = useState("View By Time");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Box
      style={{
        alignItems: "center",
      }}
    >
      <Typography sx={{ margin: "1em 2em" }}>Toggle Graph</Typography>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        style={{
          height: 45,
          margin: "1em 2em",
        }}
      >
        <ToggleButton value="View By Time">View By Time</ToggleButton>
        <ToggleButton value="View By Location">View By Location</ToggleButton>
      </ToggleButtonGroup>
      <Box>
        {alignment === "View By Time" ? <Graph /> : <GeoLocationAnalytics />}
      </Box>
    </Box>
  );
};
export default Toggle;
