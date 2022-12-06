import React from "react";
import Layout from "../../../layout/Layout";
import { useShadeTabs } from "../../../reusables/CustomHooks";
import MeterManufacturer from "./meter-manufacturer/MeterManufacturer";
import MeterModels from "./meter-models/MeterModels";
import MeterVendor from "./meter-vendor/MeterVendor";

function MeterInventory() {
  useShadeTabs("settings-tab");
  return (
    <Layout headerText="Meter Inventory">
      <MeterVendor />
      <MeterManufacturer />
      <MeterModels />
    </Layout>
  );
}

export default MeterInventory;
