import React from "react";
import { apiRoutes } from "../../../api-services/ApiRoutes";
import Layout from "../../../layout/Layout";
import { useShadeTabs } from "../../../reusables/CustomHooks";
import { Status } from "../../../reusables/Elements";
import { ConnectionsTable } from "../../../reusables/Tables";

function ConnectionsInventory() {
  useShadeTabs("connections-tab");
  return (
    <Layout headerText={"Connections Inventory"}>
      <ConnectionsTable
        search
        tableWidth={100}
        height={300}
        apiRoute={apiRoutes.getConnDetailsAll}
        rowHover
        seletableRow
        columns={[
          { path: "GpsAddress", name: "GPS Address", sort: true },
          { path: "District", name: "District", sort: true },
          { name: "Pole Fuse", status: Status, path: "PoleFuse", sort: true },
          { name: "Pwr Line", status: Status, path: "PwrLine", sort: true },
          {
            status: Status,
            name: "Meters Installed",
            path: "ConnMtrsInstalled",
            sort: true,
          },
          {
            path: "GridNetworkStatus",
            name: "Grid Status",
            color: "GridNetworkStatusColor",
            sort: true,
          },
          {
            path: "ConnStatus",
            name: "Conn Status",
            color: "ConnStatusColor",
            sort: true,
          },
          { path: "MeterNum", name: "Meter Num", sort: true },
          {
            status: Status,
            name: "Initial Reading",
            path: "InitialReadDone",
            sort: true,
          },
          { path: "CustNum", name: "Cust Num", sort: true },
        ]}
      />
    </Layout>
  );
}

export default ConnectionsInventory;
