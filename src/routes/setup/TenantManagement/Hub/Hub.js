import React, { useState } from "react";
import { DynamicTable } from "../../../../reusables/Tables";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { AddButton } from "../../../../reusables/Buttons";
import { SpaceHorizontal, Status } from "../../../../reusables/Elements";
import AddHub from "./AddHub";
import EditHub from "./EditHub";

function Hub({ addBtnText, setHubId, tenantId }) {
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
        <EditHub trigger={setShowEditForm} details={editDetails} />
      )}
      {showAddForm && (
        <AddHub
          tenantId={tenantId}
          refresh={refresh}
          trigger={setShowAddForm}
        />
      )}
      <SpaceHorizontal height={10} />
      <DynamicTable
        height={150}
        tableWidth={100}
        rowHover={true}
        seletableRow={true}
        setValueFromSelectedRow={setHubId}
        selectedRowValue={"Id"}
        apiRoute={apiRoutes.hubs + tenantId}
        injectedParameters={[tenantId]}
        columns={[
          { path: "Name", name: "Tenant Hubs" },
          { path: "HubLevel", name: "Level" },
          { path: "ParentHubName", name: "Parent Hub" },
          { path: "HubColor", color: "HubColor", name: "Color" },
          { path: "IsActive", status: Status, name: "IsActive" },
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

export default Hub;
