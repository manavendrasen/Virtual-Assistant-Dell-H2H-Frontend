import pieChartDataHandler from "../utils/ChartDataDisplayHandler/pieChartDataHandler";
import graphDataHandler from "../utils/ChartDataDisplayHandler/graphDataHandler";
import locationDataHandler from "../utils/ChartDataDisplayHandler/locationDataHandler";

const DataRecieving = [
  {
    issueId: "33423",
    issueIn: "Email",
    location: "India",
    date: "Thu Oct 14 2021",
  },
  {
    issueId: "48298",
    issueIn: "Zip",
    location: "India",
    date: "Thu Oct 14 2021",
  },
  {
    issueId: "89824",
    issueIn: "Email",
    location: "China",
    date: "Thu Oct 14 2021",
  },
  {
    issueId: "23444",
    issueIn: "Email",
    location: "China",
    date: "Fri Oct 15 2021",
  },
  {
    issueId: "98774",
    issueIn: "Email",
    location: "India",
    date: "Fri Oct 15 2021",
  },
  {
    issueId: "33423",
    issueIn: "Zip",
    location: "India",
    date: "Sun Oct 17 2021",
  },
  {
    issueId: "33423",
    issueIn: "Zip",
    location: "USA",
    date: "Sun Oct 17 2021",
  },
  {
    issueId: "33423",
    issueIn: "Email",
    location: "UK",
    date: "Wed Oct 20 2021",
  },
  {
    issueId: "33423",
    issueIn: "Zip",
    location: "USA",
    date: "Fri Oct 22 2021",
  },
  {
    issueId: "33423",
    issueIn: "Email",
    location: "India",
    date: "Fri Oct 22 2021",
  },
];

const intitialGraph = graphDataHandler(DataRecieving);
const initialPieChart = pieChartDataHandler(intitialGraph);
const initialLocationChart = locationDataHandler(DataRecieving);

const initialState = [
  [...intitialGraph],
  [...initialPieChart],
  [...initialLocationChart],
];

const DayReducer = (state = initialState, action) => {
  if (action.type === "SET_DATA_BY_DAY") {
    // get data in this form from date
    const newChartState = [
      {
        issueId: "33423",
        issueIn: "Email",
        location: "India",
        date: "Thu Oct 15 2021",
      },
      {
        issueId: "48298",
        issueIn: "Zip",
        location: "India",
        date: "Thu Oct 15 2021",
      },
      {
        issueId: "89824",
        issueIn: "Email",
        location: "China",
        date: "Thu Oct 15 2021",
      },
      {
        issueId: "33423",
        issueIn: "Email",
        location: "US",
        date: "Thu Oct 16 2021",
      },
      {
        issueId: "48298",
        issueIn: "Zip",
        location: "India",
        date: "Thu Oct 16 2021",
      },
      {
        issueId: "89824",
        issueIn: "Email",
        location: "China",
        date: "Thu Oct 17 2021",
      },
      {
        issueId: "33423",
        issueIn: "Email",
        location: "US",
        date: "Thu Oct 18 2021",
      },
      {
        issueId: "48298",
        issueIn: "Zip",
        location: "India",
        date: "Thu Oct 18 2021",
      },
      {
        issueId: "89824",
        issueIn: "Email",
        location: "China",
        date: "Thu Oct 18 2021",
      },
    ];

    const newGraphChartState = graphDataHandler(newChartState);
    const newPieChartState = pieChartDataHandler(newGraphChartState);
    const newLocationState = locationDataHandler(newChartState);

    const newState = [
      [...newGraphChartState],
      [...newPieChartState],
      [...newLocationState],
    ];

    return newState;
  }

  return state;
};

export default DayReducer;
