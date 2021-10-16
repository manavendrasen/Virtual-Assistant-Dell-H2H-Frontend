const initialState = null;

const DataOnFetchReducer = (state = initialState, action) => {
  if (action.type === "SET_INTIIAL_DATA_BY_FETCHING") {
    return action.data;
  }
  return state;
};

export default DataOnFetchReducer;
