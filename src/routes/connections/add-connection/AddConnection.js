import React from "react";
import Layout from "../../../layout/Layout";
import { useShadeTabs } from "../../../reusables/CustomHooks";
import { TextInput } from "../../../reusables/Inputs";
import AddCustomer from "../../customers/AddCustomer";

function AddConnection() {
  useShadeTabs("connections-tab");
  return <Layout headerText={"Add Connection"}>
    <AddCustomer />
  </Layout>;
}

export default AddConnection;
