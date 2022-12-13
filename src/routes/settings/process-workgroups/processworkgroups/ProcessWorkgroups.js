import React, { useState } from "react";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { AddButton } from "../../../../reusables/Buttons";
import { SpaceHorizontal, Status } from "../../../../reusables/Elements";
import { DynamicTable } from "../../../../reusables/Tables";
import AddProcessWorkgroups from "./AddProcessWorkgroups";
import EditProcessWorkgroups from "./EditProcessWorkgroups";

function ProcessWorkgroups({ refresh, setRefresh }) {
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
      <DynamicTable
        tableWidth={100}
        height={150}
        apiRoute={apiRoutes.processWorkgroups}
        rowHover
        seletableRow
        injectedParameters={[refresh]}
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
      />
      {addProcessWorkgroups && (
        <AddProcessWorkgroups trigger={setAddProcessWorkgroups} />
      )}
      {editProcessWorkgroups && (
        <EditProcessWorkgroups
          trigger={setEditProcessWorkgroups}
          details={details}
          refresh={refresh}
          setRefresh={setRefresh}
        />
      )}
    </div>
  );
}

export default ProcessWorkgroups;
