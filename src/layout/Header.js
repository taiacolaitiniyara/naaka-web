import React, { useEffect, useState } from "react";
import { apiGet } from "../api-services/ApiCalls";
import { apiRoutes } from "../api-services/ApiRoutes";
import { ProfileImg, SpaceVertical } from "../reusables/Elements";

function Header({ headerText }) {
  const [tenant, setTenant] = useState({ TenantName: "Tenant" });
  useEffect(() => {
    apiGet(
      apiRoutes.getTenantById +
        JSON.parse(localStorage.getItem("userInfo")).LoginInfo.TenantId,
      setTenant
    );
  }, []);
  return (
    <div
      style={{
        display: "flex",
        position: "fixed",
        top: "0",
        width: "100%",
        zIndex: "2",
      }}
    >
      <div style={{ float: "left", width: "150px" }}></div>
      <header>
        <div>{headerText} </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={
              tenant === undefined
                ? require("../images/fallback_logo.png")
                : `data:image/jpeg;base64,${tenant.Logo}`
            }
            alt="Logo"
          />
          {tenant === undefined ? "" : tenant.TenantName}
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
