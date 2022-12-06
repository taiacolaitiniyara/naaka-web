import React, { useState } from "react";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { AddButton } from "../../../../reusables/Buttons";
import { SpaceHorizontal, Status } from "../../../../reusables/Elements";
import { ProcessTable } from "../../../../reusables/Tables";
import AddProcessWorkgroups from "./AddProcessWorkgroups";
import EditProcessWorkgroups from "./EditProcessWorkgroups";

function ProcessWorkgroups({ setGroupId, setImpactId, setTypeId, setNameId }) {
  const [addProcessWorkgroups, setAddProcessWorkgroups] = useState(false);
  const [editProcessWorkgroups, setEditProcessWorkgroups] = useState(false);
  const [details, setDetails] = useState({});

  return (
    <div>
      <AddButton
        text={"Add Process Workgroup"}
        onClick={() => setAddProcessWorkgroups(true)}
      />
      <SpaceHorizontal height={5} />
      <ProcessTable
        tableWidth={100}
        height={150}
        apiRoute={apiRoutes.processWorkgroups}
        rowHover
        seletableRow
        setValueFromSelectedRow={setGroupId}
        selectedRowValue={"Id"}
        columns={[
          { path: "Descrip", name: "Workgroup" },
          { path: "Abbrev", name: "Abbreviation" },
          { path: "Color", color: "Color", name: "Color" },
          { path: "IsActive", status: Status, name: "IsActive" },
          {
            path: "Edit",
            name: "Edit",
            edit: true,
            showEdit: () => setEditProcessWorkgroups(!editProcessWorkgroups),
            setEditDetails: setDetails,
          },
        ]}
        otherSetterFunctions={() => {
          setImpactId(0);
          setTypeId(0);
          setNameId(0);
        }}
      />
      {addProcessWorkgroups && (
        <AddProcessWorkgroups trigger={setAddProcessWorkgroups} />
      )}
      {editProcessWorkgroups && (
        <EditProcessWorkgroups trigger={setEditProcessWorkgroups} details={details} />
      )}
    </div>
  );
}

export default ProcessWorkgroups;
