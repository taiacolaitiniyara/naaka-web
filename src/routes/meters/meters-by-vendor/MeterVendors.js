import React from "react";
import Layout from "../../../layout/Layout";
import { DynamicTable } from "../../../reusables/Tables";
import { apiRoutes } from "../../../api-services/ApiRoutes";
import { useShadeTabs } from "../../../reusables/CustomHooks";

function MeterVendors() {
  useShadeTabs("meters-tab");
  return (
    <Layout headerText={"Meter Vendor"}>
      <DynamicTable
        rowHover
        seletableRow
        search
        apiRoute={apiRoutes.getAllMeters}
        height={500}
        tableWidth={100}
        columns={[
          { sort: true, path: "MtrNum", name: "Meter Number" },
          {
            sort: true,
            path: "MtrType",
            name: "Meter Type",
            color: "MtrTypeColor",
          },
          {
            sort: true,
            path: "MtrPhase",
            name: "Meter Phase",
            color: "MtrPhaseColor",
          },
          { sort: true, path: "MtrModelNum", name: "Model Num" },
          { sort: true, path: "MtrSerialNum", name: "Serial Number" },
          { sort: true, path: "MtrVendor", name: "Vendor" },
          { sort: true, path: "MtrManufacturer", name: "Manufacturer" },
          {
            sort: true,
            path: "WarrantyStatus",
            name: "Warranty Status",
            color: "WarrantyStatusColor",
          },
          {
            sort: true,
            path: "WarrantyExpiry",
            name: "Warranty Expiry",
            date: true,
          },
        ]}
      />
    </Layout>
  );
}

export default MeterVendors;
