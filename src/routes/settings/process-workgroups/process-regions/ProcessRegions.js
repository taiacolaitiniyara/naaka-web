import React, { useState } from "react";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { AddButton } from "../../../../reusables/Buttons";
import { SpaceHorizontal, Status } from "../../../../reusables/Elements";
import { DynamicTable } from "../../../../reusables/Tables";
import AddProcessRegions from "./AddProcessRegions";
import EditProcessRegions from "./EditProcessRegions";

function ProcessRegions({ refresh, setRefresh }) {
  const [addProcessRegions, setAddProcessRegions] = useState(false);
  const [editProcessRegions, setEditProcessRegions] = useState(false);
  const [details, setDetails] = useState({});

  return (
    <div>
      <AddButton
        text={"Add Process Region"}
        onClick={() => setAddProcessRegions(true)}
      />
      <SpaceHorizontal height={5} />
      <DynamicTable
        tableWidth={100}
        height={150}
        apiRoute={apiRoutes.processRegions}
        rowHover
        seletableRow
        injectedParameters={[refresh]}
        columns={[
          { path: "Descrip", name: "Region" },
          { path: "Abbrev", name: "Abbreviation" },
          { path: "Color", color: "Color", name: "Color" },
          { path: "IsActive", status: Status, name: "IsActive" },
          {
            path: "Edit",
            name: "Edit",
            edit: true,
            showEdit: () => setEditProcessRegions(!editProcessRegions),
            setEditDetails: setDetails,
          },
        ]}
      />
      {addProcessRegions && (
        <AddProcessRegions
          refresh={refresh}
          setRefresh={setRefresh}
          trigger={setAddProcessRegions}
        />
      )}
      {editProcessRegions && (
        <EditProcessRegions
          refresh={refresh}
          setRefresh={setRefresh}
          trigger={setEditProcessRegions}
          details={details}
        />
      )}
    </div>
  );
}

export default ProcessRegions;
