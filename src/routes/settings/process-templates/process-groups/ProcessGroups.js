import React, { useState } from "react";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { AddButton } from "../../../../reusables/Buttons";
import { SpaceHorizontal, Status } from "../../../../reusables/Elements";
import { ProcessTable } from "../../../../reusables/Tables";
import AddProcessGroups from "./AddProcessGroups";
import EditProcessGroups from "./EditProcessGroups";

function ProcessGroups({
  setGroupId,
  setImpactId,
  setTypeId,
  setNameId,
  refresh,
  setRefresh,
}) {
  const [addProcessGroups, setAddProcessGroups] = useState(false);
  const [editProcessGroups, setEditProcessGroups] = useState(false);
  const [details, setDetails] = useState({});
  //let refresh = () => {};

  return (
    <div>
      <AddButton
        text={"Add Process Group"}
        onClick={() => setAddProcessGroups(true)}
      />
      <SpaceHorizontal height={5} />
      <ProcessTable
        injectedParameters={[refresh]}
        tableWidth={100}
        height={150}
        apiRoute={apiRoutes.processGroups}
        rowHover
        seletableRow
        setValueFromSelectedRow={setGroupId}
        selectedRowValue={"Id"}
        columns={[
          { path: "Descrip", name: "Group" },
          { path: "Prefix", name: "Prefix" },
          { path: "Color", color: "Color", name: "Color" },
          { path: "IsActive", status: Status, name: "IsActive" },
          {
            path: "Edit",
            name: "Edit",
            edit: true,
            showEdit: () => setEditProcessGroups(!editProcessGroups),
            setEditDetails: setDetails,
          },
        ]}
        otherSetterFunctions={() => {
          setImpactId(0);
          setTypeId(0);
          setNameId(0);
        }}
      />
      {addProcessGroups && (
        <AddProcessGroups
          setRefresh={setRefresh}
          refresh={refresh}
          trigger={setAddProcessGroups}
        />
      )}
      {editProcessGroups && (
        <EditProcessGroups
          trigger={setEditProcessGroups}
          details={details}
          setRefresh={setRefresh}
          refresh={refresh}
        />
      )}
    </div>
  );
}

export default ProcessGroups;
