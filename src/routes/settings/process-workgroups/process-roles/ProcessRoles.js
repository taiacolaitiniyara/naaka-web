import React, { useState } from "react";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { AddButton } from "../../../../reusables/Buttons";
import { SpaceHorizontal, Status } from "../../../../reusables/Elements";
import { DynamicTable } from "../../../../reusables/Tables";
import AddProcessRoles from "./AddProcessRoles";
import EditProcessRoles from "./EditProcessRoles";

function ProcessRoles({ refresh, setRefresh }) {
  const [addProcessRoles, setAddProcessRoles] = useState(false);
  const [editProcessRoles, setEditProcessRoles] = useState(false);
  const [details, setDetails] = useState({});

  return (
    <div>
      <AddButton
        text={"Add Process Role"}
        onClick={() => setAddProcessRoles(true)}
      />
      <SpaceHorizontal height={5} />
      <DynamicTable
        tableWidth={100}
        height={150}
        apiRoute={apiRoutes.processRoles}
        rowHover
        seletableRow
        injectedParameters={[refresh]}
        columns={[
          { path: "Descrip", name: "Role" },
          { path: "Abbrev", name: "Abbreviation" },
          { path: "Color", color: "Color", name: "Color" },
          { path: "IsActive", status: Status, name: "IsActive" },
          {
            path: "Edit",
            name: "Edit",
            edit: true,
            showEdit: () => setEditProcessRoles(!editProcessRoles),
            setEditDetails: setDetails,
          },
        ]}
      />
      {addProcessRoles && (
        <AddProcessRoles
          refresh={refresh}
          setRefresh={setRefresh}
          trigger={setAddProcessRoles}
        />
      )}
      {editProcessRoles && (
        <EditProcessRoles
          refresh={refresh}
          setRefresh={setRefresh}
          trigger={setEditProcessRoles}
          details={details}
        />
      )}
    </div>
  );
}

export default ProcessRoles;
