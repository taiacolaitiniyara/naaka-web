import React, { useState } from "react";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { AddButton } from "../../../../reusables/Buttons";
import { SpaceHorizontal, Status } from "../../../../reusables/Elements";
import { DynamicTable, ProcessTable } from "../../../../reusables/Tables";
import AddProcessEvents from "./AddProcessEvents";
import EditProcessEvents from "./EditProcessEvents";
import { useFetchApiList } from "../../../../reusables/CustomHooks";
import ProcessNames from "../process-names/ProcessNames";

function ProcessEvents({ nameId, refresh, setRefresh }) {
  const [addProcessEvents, setAddProcessEvents] = useState(false);
  const [editProcessEvents, setEditProcessEvents] = useState(false);
  const [details, setDetails] = useState({});
  const processes = useFetchApiList(apiRoutes.processes);

  return (
    <div>
      <AddButton
        text={"Add Process Event"}
        onClick={() => setAddProcessEvents(true)}
      />
      <SpaceHorizontal height={5} />
      <DynamicTable
        tableWidth={100}
        height={150}
        apiRoute={apiRoutes.processEventsByProcessNameId + nameId}
        rowHover
        seletableRow
        injectedParameters={[nameId, refresh]}
        columns={[
          { path: "Ord", name: "Order" },
          { path: "Descrip", name: "Event" },
          { path: "ProcessRecIdDisp", name: "Process", color: "Color" },
          { path: "TargetPeriod", name: "Target Period" },
          { path: "TargetPeriodUnit", name: "Unit" },
          { path: "TargetPercent", name: "Target (%)" },
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
      {addProcessEvents && (
        <AddProcessEvents
          setRefresh={setRefresh}
          refresh={refresh}
          trigger={setAddProcessEvents}
          nameId={nameId}
          processes={processes}
        />
      )}
      {editProcessEvents && (
        <EditProcessEvents
          setRefresh={setRefresh}
          refresh={refresh}
          trigger={setEditProcessEvents}
          details={details}
          processes={processes}
          processId={nameId}
        />
      )}
    </div>
  );
}

export default ProcessEvents;
