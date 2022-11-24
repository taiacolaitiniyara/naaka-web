import React, { useEffect, useState } from "react";
import { apiGet } from "../api-services/ApiCalls";
import { apiRoutes } from "../api-services/ApiRoutes";
import { ProfileImg, SpaceVertical } from "../reusables/Elements";

function Footer() {
  const [tenant, setTenant] = useState();
  useEffect(() => {
    apiGet(
      apiRoutes.getTenantById +
        JSON.parse(localStorage.getItem("userInfo")).LoginInfo.TenantId,
      setTenant
    );
  }, []);
  return (
    <footer>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ProfileImg />
        {JSON.parse(localStorage.getItem("userInfo")).LoginInfo.Name}
      </div>
      <SpaceVertical width={30} />
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={`data:image/jpeg;base64,${
            tenant === undefined ? "" : tenant.Logo
          }`}
          alt="Logo"
        />
        {tenant === undefined ? "" : tenant.TenantName}
      </div>
    </footer>
  );
}

export default Footer;
