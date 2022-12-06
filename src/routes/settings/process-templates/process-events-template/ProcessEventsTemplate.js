import React, { useState } from "react";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { AddButton } from "../../../../reusables/Buttons";
import { SpaceHorizontal, Status } from "../../../../reusables/Elements";
import { ProcessTable } from "../../../../reusables/Tables";
import AddProcessEventsTemplate from "./AddProcessEventsTemplate";
import EditProcessEventsTemplate from "./EditProcessEventsTemplate";

function ProcessEventsTemplate({ nameId }) {
  const [addProcessEventsTemplate, setAddProcessEventsTemplate] = useState(false);
  const [editProcessEventsTemplate, setEditProcessEventsTemplate] = useState(false);
  const [details, setDetails] = useState({});

  return (
    <div>
      <AddButton
        text={"Add Process Event Template"}
        onClick={() => setAddProcessEventsTemplate(true)}
      />
      <SpaceHorizontal height={5} />
      <ProcessTable
        tableWidth={100}
        height={150}
        apiRoute={apiRoutes.processEventsReference}
        rowHover
        seletableRow
        injectedParameters={[nameId]}
        columns={[
          { path: "Descrip", name: "Event Template" },
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
            showEdit: () => setEditProcessEventsTemplate(!editProcessEventsTemplate),
            setEditDetails: setDetails,
          },
        ]}
      />
      {addProcessEventsTemplate && (
        <AddProcessEventsTemplate trigger={setAddProcessEventsTemplate} nameId={nameId} />
      )}
      {editProcessEventsTemplate && (
        <EditProcessEventsTemplate trigger={setEditProcessEventsTemplate} details={details} />
      )}
    </div>
  );
}

export default ProcessEventsTemplate;
