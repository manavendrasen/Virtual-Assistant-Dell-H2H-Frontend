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
        <div className="flex flex-col py-4 pr-8">
          <p>Category Wise Issue</p>
          <Chart
            width={400}
            height={400}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={pieChartDataHandler(Data)}
            options={{
              animation: {
                startup: true,
                easing: "out",
                duration: 500,
              },
              chartArea: { width: "100%", height: "100%" },
            }}
            rootProps={{ "data-testid": "1" }}
          />
        </div>
      ) : (
        <Box
          sx={{
            display: "flex",
            width: 400,
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

export default PieChart;
