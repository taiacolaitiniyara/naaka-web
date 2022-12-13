import React from "react";
import Layout from "../../layout/Layout";
import { useShadeTabs } from "../../reusables/CustomHooks";

function Changes() {
  useShadeTabs("changes-tab");
  return <Layout headerText={"Changes"}>Changes</Layout>;
}

export default Changes;
