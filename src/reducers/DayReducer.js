// const baseURL = "https://nameless-gorge-89729.herokuapp.com";
const currDate = new Date().toISOString().slice(0, 10);

const initialState = [
  `https://nameless-gorge-89729.herokuapp.com/graph/${currDate}/${currDate}`,
  `https://nameless-gorge-89729.herokuapp.com/pie/${currDate}/${currDate}`,
  `https://nameless-gorge-89729.herokuapp.com/location/${currDate}/${currDate}`,
  `https://nameless-gorge-89729.herokuapp.com/table/${currDate}/${currDate}`,
];
const DayReducer = (state = initialState, action) => {
  if (action.type === "SET_DATA_BY_DAY") {
    const st = action.start.toISOString().slice(0, 10);
    const en = action.end.toISOString().slice(0, 10);

    const newState = [
      `https://nameless-gorge-89729.herokuapp.com/graph/${st}/${en}`,
      `https://nameless-gorge-89729.herokuapp.com/pie/${st}/${en}`,
      `https://nameless-gorge-89729.herokuapp.com/location/${st}/${en}`,
      `https://nameless-gorge-89729.herokuapp.com/table/${st}/${en}`,
    ];

    return newState;
  }

  return state;
};

export default DayReducer;
