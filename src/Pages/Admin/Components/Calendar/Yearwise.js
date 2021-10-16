import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

const YearWise = () => {
  const [value, setValue] = React.useState("2021");

  const handleChange = newValue => {
    setValue(newValue);
  };

  return (
    <div
      style={{
        margin: 5,
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Year"
          inputFormat="yyyy"
          views={["year"]}
          value={value}
          onChange={handleChange}
          renderInput={params => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
};

export default YearWise;
