import React, { useState } from "react";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { AddButton } from "../../../../reusables/Buttons";
import { SpaceHorizontal, Status } from "../../../../reusables/Elements";
import { ProcessTable } from "../../../../reusables/Tables";
import AddProcessRegions from "./AddProcessRegions";
import EditProcessRegions from "./EditProcessRegions";

function ProcessRegions({ setGroupId, setImpactId, setTypeId, setNameId }) {
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
      <ProcessTable
        tableWidth={100}
        height={150}
        apiRoute={apiRoutes.processRegions}
        rowHover
        seletableRow
        setValueFromSelectedRow={setGroupId}
        selectedRowValue={"Id"}
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
        otherSetterFunctions={() => {
          setImpactId(0);
          setTypeId(0);
          setNameId(0);
        }}
      />
      {addProcessRegions && <AddProcessRegions trigger={setAddProcessRegions} />}
      {editProcessRegions && (
        <EditProcessRegions trigger={setEditProcessRegions} details={details} />
      )}
    </div>
  );
}

export default ProcessRegions;
