import React from "react";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { AddButton } from "../../../../reusables/Buttons";
import { SpaceHorizontal } from "../../../../reusables/Elements";
import { DynamicTable } from "../../../../reusables/Tables";

function Modules({ setModuleId }) {
  return (
    <div>
      <AddButton text={"Add Module"} />
      <SpaceHorizontal height={10} />
      <DynamicTable
        apiRoute={apiRoutes.modules}
        rowHover={true}
        seletableRow={true}
        selectedRowValue={"ModuleId"}
        setValueFromSelectedRow={setModuleId}
        height={150}
        tableWidth={100}
        columns={[
          { path: "ModuleName", name: "Module" },
          { path: "Paid", name: "Paid" },
          { path: "Comments", name: "Comments" },
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

export default Modules;
