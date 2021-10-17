import Chart from "react-google-charts";
import axios from "axios";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import graphDataHandler from "../../../../utils/ChartDataDisplayHandler/graphDataHandler";

const Graph = () => {
  const myState = useSelector(state => state.day);

  const [Data, SetData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(myState[0]);
        SetData(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, [myState]);

  return (
    <>
      {Data.length > 0 ? (
        <div className="flex flex-col py-4 pr-8">
          <p>Failure Patterns By Time</p>
          <Chart
            width={800}
            height={400}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={graphDataHandler(Data)}
            options={{
              hAxis: {
                title: "Time",
                titleTextStyle: { color: "#333" },
              },
              vAxis: { title: "Number of Issues", minValue: 0 },
              animation: {
                startup: true,
                easing: "linear",
                duration: 1500,
              },
              chartArea: { width: "70%", height: "70%" },
            }}
            rootProps={{ "data-testid": "1" }}
          />
        </div>
      ) : (
        <Box
          sx={{
            display: "flex",
            width: 800,
            height: 400,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </>
  );
};

export default Graph;
