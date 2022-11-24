import React from "react";
import { apiRoutes } from "../../api-services/ApiRoutes";
import Layout from "../../layout/Layout";
import { Status } from "../../reusables/Elements";
import { DynamicTable } from "../../reusables/Tables";

function Connections() {

  return (
    <Layout headerText={"Connections"}>
      <DynamicTable
        tableWidth={100}
        height={300}
        apiRoute={apiRoutes.getConnDetailsAll}
        columns={[
          { path: "GpsAddress", name: "GPS Address" },
          { path: "District", name: "District" },
          { name: "Pole Fuse", status: Status, path: "PoleFuse" },
          {
            path: "GridNetworkStatus",
            name: "Grid Status",
            color: "GridNetworkStatusColor",
          },
          { path: "ConnNum", name: "ConnNum" },
          { path: "ConnStatus", name: "Conn Status", color: "ConnStatusColor" },
          { status: Status, name: "Meters Installed",path: "ConnMtrsInstalled" },
          { path: "MeterNum", name: "Meter Num" },
          { status: Status, name: "Initial Reading", path: "IsInitialRead" },
          { path: "CustNum", name: "Cust Num" },
        ]}
      />
    </Layout>
  );
}

export default Connections;
