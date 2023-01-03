import React from "react";
import Layout from "../../../layout/Layout";
import { useShadeTabs } from "../../../reusables/CustomHooks";
import { DynamicTable } from "../../../reusables/Tables";
import { apiRoutes } from "../../../api-services/ApiRoutes";
import { Status } from "../../../reusables/Elements";

function SanityChecks() {
  useShadeTabs("settings-tab");
  return (
    <Layout headerText={"Sanity Checks"}>
      <DynamicTable
        tableWidth={100}
        apiRoute={apiRoutes.getAllSanityChecks}
        columns={[
          { path: "MinString", name: "Min", sort: true },
          { path: "MaxString", name: "Max", sort: true },
          {
            path: "RequireReReading",
            name: "Require Checking",
            status: Status,
            sort: true,
          },
          { path: "Color", name: "Color", color: "Color" },
        ]}
      />
    </Layout>
  );
}

export default SanityChecks;
