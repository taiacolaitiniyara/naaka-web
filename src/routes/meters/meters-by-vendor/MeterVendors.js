import React from "react";
import Layout from "../../../layout/Layout";
import { DynamicTable } from "../../../reusables/Tables";
import { apiRoutes } from "../../../api-services/ApiRoutes";

function MeterVendors() {
  return (
    <Layout headerText={"Meter Vendor"}>
      <DynamicTable
        search
        apiRoute={apiRoutes.getAllMeters}
        height={500}
        tableWidth={100}
        columns={[
          { path: "MtrNoPhy", name: "Meter Number" },
          { path: "MtrType", name: "Meter Type", color: "MtrTypeColor" },
          { path: "MtrPhase", name: "Meter Phase", color: "MtrPhaseColor" },
          { path: "MtrStatus", name: "Meter Status", color: "MtrStatusColor" },
          { path: "MtrVendor", name: "Vendor" },
          { path: "MtrManufacturer", name: "Manufacturer" },
          { path: "MtrModelNum", name: "Model Num" },
          { path: "MtrSerialNum", name: "Serial Number" },
        ]}
      />
    </Layout>
  );
}

export default MeterVendors;
