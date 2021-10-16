import Chart from "react-google-charts";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import graphDataHandler from "../../../utils/ChartDataDisplayHandler/graphDataHandler";

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
            title: "Failure Patterns",
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
        <div
          style={{ width: "900px", height: "600px", border: "1px solid black" }}
        >
          Loader
        </div>
      )}
    </>
  );
};

export default Graph;
