import React from "react";
import { ProfileImg } from "../reusables/Elements";

function Header({ headerText }) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        zIndex: "2",
        position: "sticky",
        top: "0",
      }}
    >
      <header>
        <div style={{ fontWeight: "700" }}>{headerText} </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={`data:image/jpeg;base64,${
              JSON.parse(localStorage.getItem("tenant")).Logo
            }`}
            alt="Logo"
          />
          {JSON.parse(localStorage.getItem("tenant")).TenantName}
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <ProfileImg />
          {JSON.parse(localStorage.getItem("userInfo")).LoginInfo.Name}
        </div>
      </header>
    </div>
  );
}

export default Header;
