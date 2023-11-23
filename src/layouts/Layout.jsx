import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes } from "react-router-dom";
const Layout = ({ children }) => {
  return (
    <Router>
      <Navbar />
      <Routes>{children}</Routes>
    </Router>
  );
};

export default Layout;
