import axios from "axios";

const DataFetch = async () => {
  const response1 = await axios.get(
    "https://nameless-gorge-89729.herokuapp.com/graph/2021-01-01/2021-12-29"
  );

  const response2 = await axios.get(
    "https://nameless-gorge-89729.herokuapp.com/graph/2021-01-01/2021-12-29"
  );
  const response3 = await axios.get(
    "https://nameless-gorge-89729.herokuapp.com/graph/2021-01-01/2021-12-29"
  );
  return response1;
  // action setInitial data
};

export default DataFetch;
