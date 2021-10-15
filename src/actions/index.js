import { SET_DATA_BY_DAY, SET_DATA_BY_CLICK_OF_REGION } from "./ActionTypes";

export const setDataByDay = (startDate, endDate) => ({
  type: SET_DATA_BY_DAY,
  startDate,
  endDate,
});

export const setDataByClickOfRegion = DATA => ({
  type: SET_DATA_BY_CLICK_OF_REGION,
  data: DATA,
});
