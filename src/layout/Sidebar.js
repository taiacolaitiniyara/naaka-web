import React from "react";
import { Link } from "react-router-dom";
import { verifyToken } from "../api-services/ApiCalls";
import { Image } from "../reusables/Elements";
import { sidebarList } from "../reusables/Lists";

function Sidebar() {
  verifyToken();
  return (
    <div className="nav">
      <div>
        <nav>
          <Image name={"naakaLogo.png"} style={{width: "120px"}} />

          {sidebarList.map((s, i) => (
            <Link to={s.to} className="link" key={i}>
              <div className="nav-title" id={s.id}>
                <i className={`fa-solid fa-${s.icon}`} /> {s.name}
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
              "tenantInfo",
              JSON.stringify({ TenantName: "Tenant", TenantId: 1 })
            );

            window.location.href = "/user-login";
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
