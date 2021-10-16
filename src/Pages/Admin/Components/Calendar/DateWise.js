import * as React from "react";
import addWeeks from "date-fns/addWeeks";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateRangePicker from "@mui/lab/DateRangePicker";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { setDataByDay } from "../../../../actions";

const DateWise = () => {
  const [value, setValue] = React.useState([new Date(), new Date()]);
  const dispatch = useDispatch();
  return (
    <div style={{ margin: 5 }}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateRangePicker
          value={value}
          allowSameDateSelection
          onChange={newValue => {
            if (newValue[1] === null)
              dispatch(setDataByDay(newValue[0], newValue[0]));
            else if (newValue[0] === null)
              dispatch(setDataByDay(newValue[1], newValue[1]));
            else dispatch(setDataByDay(newValue[0], newValue[1]));
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
    </div>
  );
};
export default DateWise;
