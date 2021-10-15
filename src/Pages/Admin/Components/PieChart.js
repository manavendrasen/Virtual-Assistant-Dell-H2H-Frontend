import Chart from "react-google-charts";
import { useSelector } from "react-redux";

const PieChart = () => {
  const myState = useSelector(state => state.day);

  return (
    <Chart
      width={500}
      height={300}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={myState[1]}
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
  );
};

export default PieChart;
