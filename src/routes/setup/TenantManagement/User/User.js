import React, { useState } from "react";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { AddButton } from "../../../../reusables/Buttons";
import { SpaceHorizontal, SpaceVertical } from "../../../../reusables/Elements";
import { DynamicTable } from "../../../../reusables/Tables";
import AddUser from "./AddUser";
import EditUser from "./EditUser";

function User({ tenantId, hubId }) {
  const [showAddUser, setShowAddUser] = useState(false);
  const [showEditUser, setShowEditUser] = useState(false);
  return (
    <div>
      <div style={{ display: "flex" }}>
        <AddButton
          onClick={() => setShowAddUser(!showAddUser)}
          text={"Add User"}
        />{" "}
        <SpaceVertical width={10} /> <AddButton text={"Map Roles to User"} />
      </div>
      <SpaceHorizontal height={10} />
      <DynamicTable
        apiRoute={
          apiRoutes.tenanthubusers + "TenantId=" + tenantId + "&HubId=" + hubId
        }
        height={150}
        tableWidth={100}
        rowHover={true}
        seletableRow={true}
        selectedRowValue={"Id"}
        injectedParameters={[hubId, tenantId]}
        columns={[
          { path: "Name", name: "User" },
          { path: "Role", name: "Role" },
          { path: "Email", name: "Email" },
          { path: "Phone", name: "Phone" },
          { path: "Mobile", name: "Mobile" },
          {
            edit: true,
            editAction: () => {
              console.log("Edit Action");
            },
          },
        ]}
      />

      {showAddUser && (
        <AddUser trigger={setShowAddUser} tenantId={tenantId} hubId={hubId} />
      )}

      {showEditUser && <EditUser trigger={setShowEditUser} />}
    </div>
  );
}

export default User;
