import {
  SET_DATA_BY_DAY,
  SET_DATA_BY_CLICK_OF_REGION,
  SET_INTIIAL_DATA_BY_FETCHING,
} from "./ActionTypes";

export const setDataByDay = (startDate, endDate) => ({
  type: SET_DATA_BY_DAY,
  start: startDate,
  end: endDate,
});

export const setDataByClickOfRegion = DATA => ({
  type: SET_DATA_BY_CLICK_OF_REGION,
  data: DATA,
});

export const setInitialData = DATA => ({
  type: SET_INTIIAL_DATA_BY_FETCHING,
  data: DATA,
});
