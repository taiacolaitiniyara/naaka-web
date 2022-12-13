import React, { useState } from "react";
import { apiRoutes } from "../../../api-services/ApiRoutes";
import Layout from "../../../layout/Layout";
import { AddButton } from "../../../reusables/Buttons";
import { useShadeTabs } from "../../../reusables/CustomHooks";
import { SpaceHorizontal } from "../../../reusables/Elements";
import { DynamicTable } from "../../../reusables/Tables";
import AddMetersFromFile from "./AddMetersFromFile";

function MeterInventoryMain() {
  useShadeTabs("meters-tab");
  const [showAddMetersFromFile, setShowAddMetersFromFile] = useState(false);
  return (
    <Layout headerText={"Meters"}>
      <AddButton
        onClick={() => setShowAddMetersFromFile(!showAddMetersFromFile)}
        text={"Add Meters"}
      />
      <SpaceHorizontal height={10} />
      <DynamicTable
        search
        apiRoute={apiRoutes.getAllMeters}
        columns={[
          { path: "MtrNum", name: "Meter Number", sort: true },
          { sort: true, path: "MtrNumBill", name: "Meter Num Bill" },
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
          {
            sort: true,
            path: "MtrStatus",
            name: "Meter Status",
            color: "MtrStatusColor",
          },
          {
            sort: true,
            path: "MtrLocation",
            name: "Meter Location",
            color: "MtrLocationColor",
          },
          { path: "CustNum", name: "Customer", sort: true, },
          {
            sort: true,
            path: "ConnPosition",
            name: "Meter Position",
            color: "ConnPositionColor",
          },
          {
            sort: true,
            path: "ConnPwrSource",
            name: "Conn Pwr Source",
            color: "ConnPwrSourceColor",
          },
        ]}
        height={500}
        tableWidth={100}
      />
      {showAddMetersFromFile && (
        <AddMetersFromFile trigger={setShowAddMetersFromFile} />
      )}
    </Layout>
  );
}

export default MeterInventoryMain;
