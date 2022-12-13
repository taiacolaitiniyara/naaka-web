import React, { useState } from "react";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { AddButton } from "../../../../reusables/Buttons";
import { useFetchApiList } from "../../../../reusables/CustomHooks";
import { SpaceHorizontal, Status } from "../../../../reusables/Elements";
import { SelectInput } from "../../../../reusables/Inputs";
import { DynamicTable } from "../../../../reusables/Tables";

function PermissionGroup() {
  const [tenantId, setTenantId] = useState(1);
  const tenantList = useFetchApiList(apiRoutes.tenants);
  return (
    <div>
      <AddButton text={"Add Permission Group"} />
      <SpaceHorizontal height={10} />
      <SelectInput
        list={tenantList}
        value={tenantId}
        listName={"Tenant"}
        optionName={"TenantName"}
        optionValue={"Id"}
        setValue={setTenantId}
      />
      <SpaceHorizontal height={10} />
      <DynamicTable
        apiRoute={apiRoutes.permissionGroup + tenantId}
        height={150}
        tableWidth={100}
        columns={[
          { path: "Name", name: "Group" },
          { path: "IsActive", status: Status, name: "Is-Active" },
          {
            edit: true,
            editAction: () => {
              console.log("Edit Action");
            },
            path: "Edit",
            name: "Edit",
          },
        ]}
      />
    </div>
  );
}

export default PermissionGroup;
