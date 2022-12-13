import React from "react";
import Layout from "../../layout/Layout";
import { useShadeTabs } from "../../reusables/CustomHooks";

function Billing() {
  useShadeTabs("billing-tab");
  return <Layout headerText={"Billing"}>Billing</Layout>;
}

export default Billing;
