import React, { useState } from "react";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { AddButton } from "../../../../reusables/Buttons";
import { SpaceHorizontal, Status } from "../../../../reusables/Elements";
import { ProcessTable } from "../../../../reusables/Tables";
import AddProcessImpacts from "./AddProcessImpacts";
import EditProcessImpacts from "./EditProcessImpacts";

function ProcessImpacts({ setImpactId, groupId, setTypeId, setNameId }) {
  const [addProcessImpacts, setAddProcessImpacts] = useState(false);
  const [editProcessImpacts, setEditProcessImpacts] = useState(false);
  const [details, setDetails] = useState({});

  return (
    <div>
      <AddButton
        text={"Add Process Impact"}
        onClick={() => setAddProcessImpacts(true)}
      />
      <SpaceHorizontal height={5} />
      <ProcessTable
        tableWidth={100}
        height={150}
        apiRoute={apiRoutes.processImpactByGrpId + groupId}
        rowHover
        seletableRow
        setValueFromSelectedRow={setImpactId}
        injectedParameters={[groupId]}
        selectedRowValue={"Id"}
        otherSetterFunctions={() => {
          setTypeId(0);
          setNameId(0);
        }}
        columns={[
          { path: "Descrip", name: "Impact" },
          { path: "ProcessGroup", name: "Process Group" },
          { path: "Color", color: "Color", name: "Color" },
          { path: "IsActive", status: Status, name: "IsActive" },
          {
            path: "Edit",
            name: "Edit",
            edit: true,
            showEdit: () => setEditProcessImpacts(!editProcessImpacts),
            setEditDetails: setDetails,
          },
        ]}
      />
      {addProcessImpacts && (
        <AddProcessImpacts trigger={setAddProcessImpacts} groupId={groupId} />
      )}
      {editProcessImpacts && (
        <EditProcessImpacts trigger={setEditProcessImpacts} details={details} />
      )}
    </div>
  );
}

export default ProcessImpacts;
