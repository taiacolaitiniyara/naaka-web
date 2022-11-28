import React, { useState } from "react";
import { DynamicTable } from "../../../../reusables/Tables";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { AddButton } from "../../../../reusables/Buttons";
import { SpaceHorizontal, Status } from "../../../../reusables/Elements";
import AddRole from "./AddRole";
import EditRole from "./EditRole";

function Role({ addBtnText, setRoleId, tenantId, hubId }) {
  const [showEditForm, setShowEditForm] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editDetails, setEditDetails] = useState({});
  var refresh;
  return (
    <div>
      <AddButton
        text={addBtnText}
        onClick={() => setShowAddForm(!showAddForm)}
      />
      {showEditForm && (
        <EditRole hubId={hubId} trigger={setShowEditForm} details={editDetails} />
      )}
      {showAddForm && (
        <AddRole hubId={hubId} refresh={refresh} trigger={setShowAddForm} />
      )}
      <SpaceHorizontal height={10} />
      <DynamicTable
        apiRoute={
          apiRoutes.getRolesBelongToHub +
          "HubId=" +
          hubId +
          "&TenantId" +
          tenantId
        }
        height={150}
        tableWidth={100}
        rowHover={true}
        seletableRow={true}
        injectedParameters={[hubId, tenantId]}
        columns={[
          { path: "Name", name: "Hub Roles" },
          { path: "IsHubAdmin", name: "Hub Admin", status: Status },
          {
            edit: true,
            showEdit: () => setShowEditForm(!showEditForm),
            setEditDetails: setEditDetails,
          },
        ]}
      />
    </div>
  );
}

export default Role;
