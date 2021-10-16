import Chart from "react-google-charts";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import pieChartDataHandler from "../../../utils/ChartDataDisplayHandler/pieChartDataHandler";

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
        <div
          style={{ width: "600px", height: "500px", border: "1px solid black" }}
        >
          Loader
        </div>
      )}
    </>
  );
};

export default PieChart;
