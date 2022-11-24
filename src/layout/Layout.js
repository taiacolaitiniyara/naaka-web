import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./style.css";

function Layout(props) {
  return (
    <div className="layout">
      <Header headerText={props.headerText} />
      <Sidebar />
      <div className="main-body">{props.children}</div>
    </div>
  );
}

export default Layout;
