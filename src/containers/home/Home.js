import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Aside from "../../components/aside/Aside";
import CustomNavbar from "../../components/navbar/Navbar";
import MyRouter from "../../Routes";

export default function Home() {
  return (
    <Router>
      <div className="container-fluid">
        <div className="navbar">
          <CustomNavbar />
        </div>
        <div className="menu row">
          <div className="col-sm-4 pl-5">
            <Aside />
          </div>
          <div className="col-sm-8 pt-5 border border-dark">
            <MyRouter />
          </div>
        </div>
      </div>
    </Router>
  );
}
