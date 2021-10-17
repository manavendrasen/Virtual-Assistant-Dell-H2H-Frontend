import { combineReducers } from "redux";
import DayReducer from "./DayReducer";
import DataOnRegionReducer from "./DataOnRegionReducer";
import DataOnFetchReducer from "./DataOnFetchReducer";

const rootReducer = combineReducers({
  day: DayReducer,
  region: DataOnRegionReducer,
  dataFetch: DataOnFetchReducer,
});

export default rootReducer;
