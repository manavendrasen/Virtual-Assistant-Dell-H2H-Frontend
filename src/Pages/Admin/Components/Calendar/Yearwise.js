import { useState } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { useDispatch } from "react-redux";
import { setDataByYear } from "../../../../actions";

const YearWise = () => {
  const [value, setValue] = useState("2021");
  const dispatch = useDispatch();
  const handleChange = newValue => {
    dispatch(
      setDataByYear(
        `${newValue.getFullYear()}-01-01`,
        `${newValue.getFullYear()}-12-31`
      )
    );
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
          renderInput={params => <TextField size="small" {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
};

export default YearWise;
