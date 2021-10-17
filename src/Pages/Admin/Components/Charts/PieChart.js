import Chart from "react-google-charts";
import axios from "axios";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import pieChartDataHandler from "../../../../utils/ChartDataDisplayHandler/pieChartDataHandler";

const PieChart = () => {
  const myState = useSelector(state => state.day);
  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(myState[1]);
        setData(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, [myState]);

  return (
    <>
      {Data ? (
        <Chart
          width={599}
          height={600}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={pieChartDataHandler(Data)}
          options={{
            title: "Each Issue",
            animation: {
              startup: true,
              easing: "out",
              duration: 500,
            },
          }}
          rootProps={{ "data-testid": "1" }}
        />
      ) : (
        <Box
          sx={{
            display: "flex",
            width: 600,
            height: 500,
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

export default PieChart;
