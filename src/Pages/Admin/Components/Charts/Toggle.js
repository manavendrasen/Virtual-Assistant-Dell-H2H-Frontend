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
    <Box>
      <div className="flex flex-col gap-2 mb-4 mt-2 items-start">
        <p className="text-sm">View Graph:</p>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          style={{
            height: 40,
          }}
        >
          <ToggleButton value="View By Time">View By Time</ToggleButton>
          <ToggleButton value="View By Location">View By Location</ToggleButton>
        </ToggleButtonGroup>
      </div>

      <Box>
        {alignment === "View By Time" ? <Graph /> : <GeoLocationAnalytics />}
      </Box>
    </Box>
  );
};
export default Toggle;
