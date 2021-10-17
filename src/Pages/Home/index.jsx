import React from "react";
import Navbar from "../Admin/Components/AdminNavbar/Navbar";
import Header from "./Components/Header";
import { Chatbot } from "../../Components";

const HomePage = () => (
  <>
    <Navbar title="Support Dashboard" />
    <Header />
    <Chatbot />
  </>
);

export default HomePage;
