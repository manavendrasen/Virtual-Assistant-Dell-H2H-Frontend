import Chart from "react-google-charts";
import { useSelector, useDispatch } from "react-redux";
import { setDataByClickOfRegion } from "../../../actions";

const GeoLocation = () => {
  const myState = useSelector(state => state.day);
  const dispatch = useDispatch();
  return (
    <Chart
      width={800}
      height={500}
      chartType="GeoChart"
      data={myState[2]}
      options={{
        colorAxis: { colors: ["red"] },
      }}
      chartEvents={[
        {
          eventName: "select",
          callback({ chartWrapper }) {
            const chart = chartWrapper.getChart();
            if (chart !== null) {
              const selection = chart.getSelection();
              if (selection.length === 1) {
                const [selectedItem] = selection;
                const dataTable = chartWrapper.getDataTable();
                const { row, column } = selectedItem;
                const SelectedData = [
                  {
                    country: dataTable.getValue(row, 0),
                    email: dataTable.getValue(row, 1),
                    zip: dataTable.getValue(row, 2),
                  },
                ];

                dispatch(setDataByClickOfRegion(SelectedData));
              }
            }
          },
        },
      ]}
      mapsApiKey="YOUR_KEY_HERE"
      rootProps={{ "data-testid": "1" }}
    />
  );
};
export default GeoLocation;
