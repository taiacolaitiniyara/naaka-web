import React from "react";
import Layout from "../../layout/Layout";
import { useShadeTabs } from "../../reusables/CustomHooks";
import { MenuListItem } from "../../reusables/Elements";
import { connectionsMenuList } from "../../reusables/Lists";

function Connections() {
  useShadeTabs("connections-tab");
  return (
    <Layout headerText={"Connections"}>
      {connectionsMenuList.map((c, i) => (
        <MenuListItem to={c.to} name={c.name} />
      ))}
    </Layout>
  );
}

export default Connections;
