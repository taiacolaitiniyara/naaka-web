import React, { useState } from "react";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { AddButton } from "../../../../reusables/Buttons";
import { useFetchApiList } from "../../../../reusables/CustomHooks";
import { SpaceHorizontal, Status } from "../../../../reusables/Elements";
import { SelectInput } from "../../../../reusables/Inputs";
import { DynamicTable } from "../../../../reusables/Tables";

function Permissions({moduleId}) {
  const [tenantId, setTenantId] = useState(1);
  return (
    <div>
      <AddButton text={"Add Permission"} />
      <SpaceHorizontal height={10} />
      <DynamicTable
        apiRoute={apiRoutes.modulePermissions + moduleId}
        height={150}
        tableWidth={100}
        columns={[
          { path: "Permission", name: "Permission" },
          { path: "Description", name: "Description" },
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

export default Permissions;
