import React from "react";
import Layout from "../../layout/Layout";
import { useShadeTabs } from "../../reusables/CustomHooks";
import { billingMenuList } from "../../reusables/Lists";
import { MenuListItem } from "../../reusables/Elements";

function Billing() {
  useShadeTabs("billing-tab");
  return (
    <Layout headerText={"Billing"}>
      {billingMenuList.map((m, i) => (
        <MenuListItem name={m.name} to={m.to} key={i} />
      ))}
    </Layout>
  );
}

export default Billing;
