import React, { useState } from "react";
import Layout from "../../../layout/Layout";
import { useShadeTabs } from "../../../reusables/CustomHooks";
import { SpaceHorizontal } from "../../../reusables/Elements";
import ProcessEventsTemplate from "./process-events-template/ProcessEventsTemplate";
import ProcessEvents from "./process-events/ProcessEvents";
import ProcessGroups from "./process-groups/ProcessGroups";
import ProcessImpacts from "./process-impacts/ProcessImpacts";
import ProcessNames from "./process-names/ProcessNames";
import ProcessTypes from "./process-types/ProcessTypes";

function ProcessTemplates() {
  useShadeTabs("settings-tab");
  const [refresh, setRefresh] = useState(1);
  const [groupId, setGroupId] = useState(0);
  const [impactId, setImpactId] = useState(0);
  const [typeId, setTypeId] = useState(0);
  const [nameId, setNameId] = useState(0);
  return (
    <Layout headerText="Process Templates">
      <ProcessGroups
        setGroupId={setGroupId}
        setImpactId={setImpactId}
        setNameId={setNameId}
        setTypeId={setTypeId}
        refresh={refresh}
        setRefresh={setRefresh}
      />
      <SpaceHorizontal height={10} />
      <ProcessImpacts
        groupId={groupId}
        setTypeId={setTypeId}
        setNameId={setNameId}
        setImpactId={setImpactId}
        refresh={refresh}
        setRefresh={setRefresh}
      />
      <SpaceHorizontal height={10} />
      <ProcessTypes
        impactId={impactId}
        setTypeId={setTypeId}
        setNameId={setNameId}
        refresh={refresh}
        setRefresh={setRefresh}
      />
      <SpaceHorizontal height={10} />
      <ProcessNames
        refresh={refresh}
        setRefresh={setRefresh}
        setNameId={setNameId}
        typeId={typeId}
      />
      <SpaceHorizontal height={10} />
      <ProcessEvents
        refresh={refresh}
        setRefresh={setRefresh}
        nameId={nameId}
      />
      <SpaceHorizontal height={10} />
      <ProcessEventsTemplate refresh={refresh} setRefresh={setRefresh} />
    </Layout>
  );
}

export default ProcessTemplates;
