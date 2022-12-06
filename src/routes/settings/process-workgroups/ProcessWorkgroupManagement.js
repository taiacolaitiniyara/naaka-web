import React from "react";
import Layout from "../../../layout/Layout";
import { useShadeTabs } from "../../../reusables/CustomHooks";
import { SpaceHorizontal } from "../../../reusables/Elements";
import ProcessDepots from "./process-depots/ProcessDepots";
import ProcessRegions from "./process-regions/ProcessRegions";
import ProcessRoles from "./process-roles/ProcessRoles";
import ProcessWorkers from "./process-workers/ProcessWorkers";
import ProcessWorkgroups from "./processworkgroups/ProcessWorkgroups";

function ProcessWorkgroupManagement() {
  useShadeTabs("settings-tab");
  return (
    <Layout headerText={"Process Workgroups"}>
      <ProcessRegions />
      <SpaceHorizontal height={10} />
      <ProcessDepots />
      <SpaceHorizontal height={10} />
      <ProcessWorkgroups />
      <SpaceHorizontal height={10} />
      <ProcessRoles />
      <SpaceHorizontal height={10} />
      <ProcessWorkers />
    </Layout>
  );
}

export default ProcessWorkgroupManagement;
