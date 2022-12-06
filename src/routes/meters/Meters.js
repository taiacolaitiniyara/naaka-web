import React from "react";
import Layout from "../../layout/Layout";
import { useShadeTabs } from "../../reusables/CustomHooks";
import { MenuListItem } from "../../reusables/Elements";
import { metersMenuList } from "../../reusables/Lists";

function Meters() {
  useShadeTabs("meters-tab")
  return (
    <Layout headerText={"Meters"}>
      {metersMenuList.map((m, i) => (
        <MenuListItem name={m.name} to={m.to} key={i} />
      ))}
    </Layout>
  );
}

export default Meters;
