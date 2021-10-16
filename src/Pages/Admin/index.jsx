import React from "react";
import AdminTable from "./Components/table";
import Graph from "./Components/Graph";
import PieChart from "./Components/PieChart";
import GeoLocation from "./Components/GeoLocationAnalytics";
import Navbar from "./Components/AdminNavbar/Navbar";
import RegionDataDisplay from "./Components/RegionDataDisplay";
import Calendar from "./Components/Calendar/Toggle";

const AdminDashboard = () => (
  <>
    <Navbar />

    <Calendar />
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      <div
        style={{
          margin: 5,
        }}
      >
        <Graph />
      </div>
      <div
        style={{
          margin: 5,
        }}
      >
        <PieChart />
      </div>
    </div>

    <AdminTable />
  </>
);

export default AdminDashboard;
