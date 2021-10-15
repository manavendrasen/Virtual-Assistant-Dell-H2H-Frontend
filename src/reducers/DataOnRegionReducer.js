const initialState = [
  {
    country: "Country",
    email: 0,
    zip: 0,
  },
];

const DataOnRegionReducer = (state = initialState, action) => {
  if (action.type === "SET_DATA_BY_CLICK_OF_REGION") {
    return action.data;
  }
  return state;
};

export default DataOnRegionReducer;
