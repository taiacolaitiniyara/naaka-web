import React, { useState } from "react";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { AddButton } from "../../../../reusables/Buttons";
import { SpaceHorizontal, Status } from "../../../../reusables/Elements";
import { ProcessTable } from "../../../../reusables/Tables";
import AddProcessEvents from "./AddProcessEvents";
import EditProcessEvents from "./EditProcessEvents";

function ProcessEvents({nameId}) {
  const [addProcessEvents, setAddProcessEvents] = useState(false);
  const [editProcessEvents, setEditProcessEvents] = useState(false);
  const [details, setDetails] = useState({});

  return (
    <div>
      <AddButton
        text={"Add Process Event"}
        onClick={() => setAddProcessEvents(true)}
      />
      <SpaceHorizontal height={5} />
      <ProcessTable
        tableWidth={100}
        height={150}
        apiRoute={apiRoutes.processEventsByProcessNameId + nameId}
        rowHover
        seletableRow
        injectedParameters={[nameId]}
        columns={[
          { path: "Descrip", name: "Event" },
          { path: "ProcessName", name: "Process Name" },
          { path: "TargetPeriod", name: "Target Period" },
          { path: "TargetPeriodUnit", name: "Unit" },
          { path: "TargetPercent", name: "Target (%)" },
          { path: "Color", color: "Color", name: "Color" },
          { path: "IsVisible", status: Status, name: "IsVisible" },
          { path: "IsActive", status: Status, name: "IsActive" },
          {
            path: "Edit",
            name: "Edit",
            edit: true,
            showEdit: () => setEditProcessEvents(!editProcessEvents),
            setEditDetails: setDetails,
          },
        ]}
      />
      {addProcessEvents && <AddProcessEvents trigger={setAddProcessEvents} nameId={nameId} />}
      {editProcessEvents && (
        <EditProcessEvents trigger={setEditProcessEvents} details={details} />
      )}
    </div>
  );
}

export default ProcessEvents;
