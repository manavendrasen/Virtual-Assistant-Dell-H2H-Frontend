import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Typography, Container, Box } from "@mui/material";
import DateWise from "./DateWise";
import YearWise from "./Yearwise";

const Toggle = () => {
  const [alignment, setAlignment] = React.useState("Dates");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0 2.5em",
      }}
    >
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        style={{
          height: 45,
        }}
      >
        <ToggleButton value="Dates">Dates</ToggleButton>
        <ToggleButton value="Year">Year</ToggleButton>
      </ToggleButtonGroup>
      <Box>
        <Typography>Filter By Date</Typography>
        {alignment === "Dates" ? <DateWise /> : <YearWise />}
      </Box>
    </Box>
  );
};
export default Toggle;
