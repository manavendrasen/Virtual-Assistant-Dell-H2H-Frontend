import React from "react";
import { Container, Box } from "@mui/material";
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

    <Calendar />
    <Box
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      <Box
        style={{
          margin: 5,
        }}
      >
        <Graph />
      </Box>
      <Box
        style={{
          margin: 5,
        }}
      >
        <PieChart />
      </Box>
    </Box>

    <AdminTable />
  </>
);

export default AdminDashboard;
