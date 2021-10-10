import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

const HomePage = () => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <Navbar />
    <Header />
    <Footer />
  </div>
);

export default HomePage;
