import React, { useState } from "react";

import Layout from "../../../layout/Layout";
import { SpaceHorizontal } from "../../../reusables/Elements";
import ProcessZones from "./ProcessZones/ProcessZones";
import ProcessZonesMatrix from "./ProcessZonesMatrix/ProcessZonesMatrix";

function ProcessZonesManagement() {
  const [refresh, setRefresh] = useState(1);
  return (
    <Layout headerText="Process Zones Management">
      <ProcessZones refresh={refresh} setRefresh={setRefresh} />
      <SpaceHorizontal height={10} />
      <ProcessZonesMatrix refresh={refresh} setRefresh={setRefresh} />
    </Layout>
  );
}

export default ProcessZonesManagement;
