import React, { useState } from "react";
import { DynamicTable } from "../../../../reusables/Tables";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { AddButton } from "../../../../reusables/Buttons";
import { SpaceHorizontal, Status } from "../../../../reusables/Elements";
import AddTenant from "./AddTenant";
import EditTenant from "./EditTenant";

function Tenant({ addBtnText, setTenantId }) {
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
        <EditTenant trigger={setShowEditForm} details={editDetails} />
      )}
      {showAddForm && <AddTenant refresh={refresh} trigger={setShowAddForm} />}
      <SpaceHorizontal height={10} />
      <DynamicTable
        heading={"Tenants"}
        height={150}
        tableWidth={100}
        rowHover={true}
        seletableRow={true}
        apiRoute={apiRoutes.tenants}
        setValueFromSelectedRow={setTenantId}
        selectedRowValue={"Id"}
        refresh={refresh}
        columns={[
          { path: "TenantName", name: "Tenant" },
          {
            path: "FormattedAddress",
            name: "Address",
          },
          { path: "ContactName", name: "ContactName" },
          { path: "ContactMobile", name: "Contact Mobile" },
          { path: "ContactEmail", name: "Contact Email" },
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

export default Tenant;
