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
    <Box className="flex justify-start items-center gap-6 px-24 mb-2 mt-5">
      <div className="flex flex-col gap-3 items-start justify-start">
        <p className="ml-1 text-sm">Filter By Date:</p>
        <div>{alignment === "Dates" ? <DateWise /> : <YearWise />}</div>
      </div>
      <div className="flex flex-col gap-3 items-start justify-start">
        <p className="text-sm">Grouping Criteria:</p>
        <div>
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            style={{
              height: 40,
            }}
          >
            <ToggleButton value="Dates">Dates</ToggleButton>
            <ToggleButton value="Year">Year</ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
    </Box>
  );
};
export default Toggle;
