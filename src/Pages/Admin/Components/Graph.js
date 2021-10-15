import Chart from "react-google-charts";
import { useSelector } from "react-redux";

const Graph = () => {
  const myState = useSelector(state => state.day);

  return (
    <>
      <Chart
        width={1000}
        height={500}
        chartType="AreaChart"
        loader={<div>Loading Chart</div>}
        data={myState[0]}
        options={{
          title: "Failure Patterns",
          hAxis: {
            title: "Days",
            titleTextStyle: { color: "#333" },
            viewWindow: { min: 0, max: 24 },
          },
          vAxis: { minValue: 0 },
          animation: {
            startup: true,
            easing: "linear",
            duration: 1500,
          },
          chartArea: { width: "70%", height: "70%" },
        }}
        // For tests
        rootProps={{ "data-testid": "1" }}
      />
    </>
  );
};

export default Graph;
