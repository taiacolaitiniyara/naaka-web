import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./style.css";

function Layout(props) {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-body">
        <Header headerText={props.headerText} />
        <div style={{padding: "10px"}}>{props.children}</div>
      </div>
    </div>
  );
}

export default Layout;
