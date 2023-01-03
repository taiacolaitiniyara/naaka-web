import React, { useState } from "react";
import Layout from "../../../layout/Layout";
import ConnPhases from "./conn-phases/ConnPhases";
import { SpaceHorizontal } from "../../../reusables/Elements";
import MtrPhase from "./mtr-phases/MtrPhase";
import { useShadeTabs } from "../../../reusables/CustomHooks";

function Phases() {
  useShadeTabs("setup-tab")
  const [refresh, setRefresh] = useState(1);
  return (
    <Layout headerText="Phase Management">
      <ConnPhases refresh={refresh} setRefresh={setRefresh} />
      <SpaceHorizontal height={20} />
      <MtrPhase refresh={refresh} setRefresh={setRefresh} />
    </Layout>
  );
}

export default Phases;
