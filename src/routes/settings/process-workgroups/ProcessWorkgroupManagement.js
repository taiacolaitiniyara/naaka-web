import React, { useState } from "react";
import Layout from "../../../layout/Layout";
import { useShadeTabs } from "../../../reusables/CustomHooks";
import { SpaceHorizontal } from "../../../reusables/Elements";
import ProcessDepots from "./process-depots/ProcessDepots";
import ProcessRegions from "./process-regions/ProcessRegions";
import ProcessRoles from "./process-roles/ProcessRoles";
import ProcessWorkers from "./process-workers/ProcessWorkers";
import ProcessWorkgroups from "./processworkgroups/ProcessWorkgroups";

function ProcessWorkgroupManagement() {
  const [refresh, setRefresh] = useState(1);
  const [regionId, setRegionId] = useState(0);
  const [depotId, setDepotId] = useState(0);
  const [workgroupId, setWorkgroupId] = useState(0);
  const [roleId, setRoleId] = useState(0);

  useShadeTabs("settings-tab");
  return (
    <Layout headerText={"Process Workgroups"}>
      <ProcessRegions refresh={refresh} setRefresh={setRefresh} />
      <SpaceHorizontal height={10} />
      <ProcessDepots refresh={refresh} setRefresh={setRefresh} />
      <SpaceHorizontal height={10} />
      <ProcessWorkgroups refresh={refresh} setRefresh={setRefresh} />
      <SpaceHorizontal height={10} />
      <ProcessRoles refresh={refresh} setRefresh={setRefresh} />
      <SpaceHorizontal height={10} />
      <ProcessWorkers refresh={refresh} setRefresh={setRefresh} />
    </Layout>
  );
}

export default ProcessWorkgroupManagement;
