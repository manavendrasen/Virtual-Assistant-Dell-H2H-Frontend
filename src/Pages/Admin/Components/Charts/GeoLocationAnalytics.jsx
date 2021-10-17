import Chart from "react-google-charts";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import axios from "axios";
import { setDataByClickOfRegion } from "../../../../actions";
import locationDataHandler from "../../../../utils/ChartDataDisplayHandler/locationDataHandler";

const GeoLocation = () => {
  const myState = useSelector(state => state.day);
  const [Data, SetData] = useState([]);
  const fetch = async () => {
    try {
      const { data } = await axios.get(myState[2]);
      SetData(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetch();
  }, [myState]);

  const dispatch = useDispatch();
  // console.log(Data);
  // const defaultValue = [
  //   ["Location", "Email", "Zip"],
  //   ["India", 42, 43],
  //   ["China", 31, 12],
  // ];

  return (
    <>
      {Data.length > 0 ? (
        <div className="flex flex-col py-4 pr-8">
          <p>Failure Patterns By Location</p>
          <Chart
            width={800}
            height={400}
            chartType="GeoChart"
            data={locationDataHandler(Data)}
            options={{
              title: "Failure Patterns By Time",
              colorAxis: { colors: ["#E4424D"] },
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
export default GeoLocation;
