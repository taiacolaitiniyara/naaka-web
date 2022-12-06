import React, { useState } from "react";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { AddButton } from "../../../../reusables/Buttons";
import { SpaceHorizontal, Status } from "../../../../reusables/Elements";
import { ProcessTable } from "../../../../reusables/Tables";
import AddProcessWorkers from "./AddProcessWorkers";
import EditProcessWorkers from "./EditProcessWorkers";

function ProcessWorkers({ setGroupId, setImpactId, setTypeId, setNameId }) {
  const [addProcessWorkers, setAddProcessWorkers] = useState(false);
  const [editProcessWorkers, setEditProcessWorkers] = useState(false);
  const [details, setDetails] = useState({});

  return (
    <div>
      <AddButton
        text={"Add Process Worker"}
        onClick={() => setAddProcessWorkers(true)}
      />
      <SpaceHorizontal height={5} />
      <ProcessTable
        tableWidth={100}
        height={150}
        apiRoute={apiRoutes.processWorkers}
        rowHover
        seletableRow
        setValueFromSelectedRow={setGroupId}
        selectedRowValue={"Id"}
        columns={[
          { path: "Descrip", name: "Workgroup" },
          { path: "Role", name: "Role" },
          { path: "Workgroup", name: "Workgroup" },
          { path: "Depot", name: "Depot" },
          { path: "Region", name: "Region" },
          { path: "Color", color: "Color", name: "Color" },
          { path: "IsActive", status: Status, name: "IsActive" },
          {
            path: "Edit",
            name: "Edit",
            edit: true,
            showEdit: () => setEditProcessWorkers(!editProcessWorkers),
            setEditDetails: setDetails,
          },
        ]}
        otherSetterFunctions={() => {
          setImpactId(0);
          setTypeId(0);
          setNameId(0);
        }}
      />
      {addProcessWorkers && (
        <AddProcessWorkers trigger={setAddProcessWorkers} />
      )}
      {editProcessWorkers && (
        <EditProcessWorkers trigger={setEditProcessWorkers} details={details} />
      )}
    </div>
  );
}

export default ProcessWorkers;
