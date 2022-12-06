import React from "react";
import { verifyToken } from "../../api-services/ApiCalls";
import { appRoutes } from "../../reusables/Lists";

function Welcome() {
  verifyToken(appRoutes.Home.path);
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
