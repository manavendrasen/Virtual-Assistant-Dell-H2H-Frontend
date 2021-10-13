import React from "react";
import Layout from "./Components/Layout";
import Header from "./Components/Header";
import { Chatbot } from "../../Components";

const HomePage = () => (
  <>
    <Layout>
      <Header />
    </Layout>
    <Chatbot />
  </>
);

export default HomePage;
