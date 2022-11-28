import React from "react";
import { apiRoutes } from "../../api-services/ApiRoutes";
import Layout from "../../layout/Layout";
import { AddButton } from "../../reusables/Buttons";
import { SpaceHorizontal } from "../../reusables/Elements";
import { DynamicTable } from "../../reusables/Tables";

function Meters() {
  return (
    <Layout headerText={"Meters"}>
      <AddButton onClick={() => console.log("Add")} text={"Add Meters"} />
      <SpaceHorizontal height={10} />
      <DynamicTable
        search
        apiRoute={apiRoutes.getAllMeters}
        columns={[
          { path: "MtrNoPhy", name: "Meter Num Phy" },
          { path: "MtrNoBill", name: "Meter Num Bill" },
          { path: "MtrType", name: "Meter Type", color: "MtrTypeColor" },
          { path: "MtrPhase", name: "Meter Phase", color: "MtrPhaseColor" },
          { path: "MtrStatus", name: "Meter Status", color: "MtrStatusColor" },
          {
            path: "MtrLocation",
            name: "Meter Location",
            color: "MtrLocationColor",
          },
          { path: "CustNum", name: "Customer" },
          {
            path: "ConnPosition",
            name: "Meter Position",
            color: "ConnPositionColor",
          },
          {
            path: "ConnPwrSource",
            name: "Conn Pwr Source",
            color: "ConnPwrSourceColor",
          },
        ]}
        height={500}
        tableWidth={100}
      />
    </Layout>
  );
}

export default Meters;
