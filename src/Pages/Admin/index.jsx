import React from "react";
import { Typography } from "@mui/material";
import AdminTable from "./Components/table";
import Graph from "./Components/Charts/Toggle";
import PieChart from "./Components/Charts/PieChart";

import GeoLocation from "./Components/Charts/GeoLocationAnalytics";
import Navbar from "./Components/AdminNavbar/Navbar";
import RegionDataDisplay from "./Components/Charts/RegionDataDisplay";
import Calendar from "./Components/Calendar/Toggle";

const AdminDashboard = () => (
  <>
    <Navbar />
    {/* <Typography variant="h5" className="px-24 py-4">
      Order Issue Analytics
    </Typography> */}
    <Calendar />

    <div className="flex items-end justify-between gap-12 mb-6 px-24">
      <div className="h-3/4">
        <Graph />
      </div>
      <div>
        <PieChart />
      </div>
    </div>
    <div>
      <AdminTable />
    </div>
  </>
);

export default AdminDashboard;
