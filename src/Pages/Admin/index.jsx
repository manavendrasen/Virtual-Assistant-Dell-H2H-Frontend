import React from "react";
import AdminTable from "./Components/table";
import StaticDatePickerLandscape from "./Components/Calendar";
import Graph from "./Components/Graph";
import PieChart from "./Components/PieChart";
import GeoLocation from "./Components/GeoLocationAnalytics";
import Navbar from "./Components/AdminNavbar/Navbar";
import RegionDataDisplay from "./Components/RegionDataDisplay";

const AdminDashboard = () => (
  <>
    <Navbar />
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <StaticDatePickerLandscape />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Graph />
        <PieChart />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          margin: "auto",
        }}
      >
        <GeoLocation />
        <RegionDataDisplay />
      </div>

      <AdminTable />
    </div>
  </>
);

export default AdminDashboard;
