import { combineReducers } from "redux";
import DayReducer from "./DayReducer";
import DataOnRegionReducer from "./DataOnRegionReducer";

const rootReducer = combineReducers({
  day: DayReducer,
  region: DataOnRegionReducer,
});

export default rootReducer;
