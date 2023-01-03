import React from "react";
import { Link } from "react-router-dom";
import { verifyToken } from "../api-services/ApiCalls";
import { Image } from "../reusables/Elements";
import { appRoutes, sidebarList } from "../reusables/Lists";

function Sidebar() {
  verifyToken();
  return (
    <div className="nav">
      <div>
        <nav>
          <Image name={"naakaLogo.png"} style={{ width: "120px" }} />

          {sidebarList.map((sb, i) => (
            <Link to={sb.to} className="link" key={i}>
              <div className="nav-title" id={sb.id}>
                <i className={`fa-solid fa-${sb.icon}`} /> {sb.name}
              </div>
            </Link>
          ))}
        </nav>
      </div>
      <div>
        <div
          onClick={async () => {
            localStorage.setItem(
              "userInfo",
              JSON.stringify({
                accessToken: "Token",
                LoginInfo: { TenantId: 1, Name: "Name" },
              })
            );

            localStorage.setItem(
              "tenant",
              JSON.stringify({ TenantName: "Tenant", TenantId: 0 })
            );

            window.location.href = appRoutes.Login.path;
          }}
          className="nav-title link"
        >
          <i className="fa-solid fa-right-from-bracket" /> Logout
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
