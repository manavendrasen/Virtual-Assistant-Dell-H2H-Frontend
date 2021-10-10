import React from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = props => (
  <>
    <Navbar />
    {props.children}
    <Footer />
  </>
);

export default Layout;
