import * as React from "react";
import addWeeks from "date-fns/addWeeks";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateRangePicker from "@mui/lab/DateRangePicker";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { setDataByDay } from "../../../actions";

function getWeeksAfter(date, amount) {
  return date ? addWeeks(date, amount) : undefined;
}

export default function MinMaxDateRangePicker() {
  const [value, setValue] = React.useState([new Date(), new Date()]);
  const dispatch = useDispatch();
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        value={value}
        allowSameDateSelection
        onChange={newValue => {
          dispatch(setDataByDay(newValue[0], newValue[1]));
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </>
        )}
      />
    </LocalizationProvider>
  );
}
