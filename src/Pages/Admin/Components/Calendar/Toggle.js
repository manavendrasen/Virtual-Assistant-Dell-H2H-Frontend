import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import DateWise from "./DateWise";
import YearWise from "./Yearwise";

const Toggle = () => {
  const [alignment, setAlignment] = React.useState("Dates");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "space-between",
      }}
    >
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        style={{
          margin: "5px 10px 5px 5px",
          height: 45,
        }}
      >
        <ToggleButton value="Dates">Dates</ToggleButton>
        <ToggleButton value="Year">Year</ToggleButton>
      </ToggleButtonGroup>
      <div>
        <h1>Filter By Date</h1>
        {alignment === "Dates" ? <DateWise /> : <YearWise />}
      </div>
    </div>
  );
};
export default Toggle;
