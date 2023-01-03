import React, { useEffect } from "react";
import { verifyToken } from "../../api-services/ApiCalls";
import { appRoutes } from "../../reusables/Lists";

function Welcome() {
  verifyToken(appRoutes.Home.path);

  useEffect(() => {
    let path = document.location.pathname;
    fetch("http://13.238.73.156:44340/api/auth/Login/getTenantUrls", {
      method: "GET",
      headers: {
        accept: "*/*",
      },
    })
      .then((r) => r.json())
      .then((r) => {
        r.map((t) => {
          if ((t.TenantUrl = path)) {
            localStorage.setItem("tenantUrl", t.TenantUrl);
            console.log("Path: ", path, "URL", t.TenantUrl);
          }
        });
      });
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img
        style={{ width: "400px" }}
        src={require("../../images/naakaLogo.png")}
      />
    </div>
  );
}

export default Welcome;
