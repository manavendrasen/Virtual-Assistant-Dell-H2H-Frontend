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
        <Chart
          width={900}
          height={600}
          chartType="AreaChart"
          loader={<div>Loading Chart</div>}
          data={graphDataHandler(Data)}
          options={{
            title: "Failure Patterns By Time",
            hAxis: {
              title: "Time",
              titleTextStyle: { color: "#333" },
              viewWindow: { min: 0, max: 5 },
            },
            vAxis: { minValue: 0 },
            animation: {
              startup: true,
              easing: "linear",
              duration: 1500,
            },
            chartArea: { width: "78.5%", height: "80%" },
          }}
          rootProps={{ "data-testid": "1" }}
        />
      ) : (
        <Box
          sx={{
            display: "flex",
            width: 900,
            height: 600,
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
