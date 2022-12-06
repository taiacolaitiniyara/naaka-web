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
      />
      <SpaceHorizontal height={10} />
      <ProcessImpacts
        groupId={groupId}
        setTypeId={setTypeId}
        setNameId={setNameId}
        setImpactId={setImpactId}
      />
      <SpaceHorizontal height={10} />
      <ProcessTypes
        impactId={impactId}
        setTypeId={setTypeId}
        setNameId={setNameId}
      />
      <SpaceHorizontal height={10} />
      <ProcessNames setNameId={setNameId} typeId={typeId} />
      <SpaceHorizontal height={10} />
      <ProcessEvents nameId={nameId} />
      <SpaceHorizontal height={10} />
      <ProcessEventsTemplate />
    </Layout>
  );
}

export default ProcessTemplates;
