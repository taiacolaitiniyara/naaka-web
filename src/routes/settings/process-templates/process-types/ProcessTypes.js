import React, { useState } from "react";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { AddButton } from "../../../../reusables/Buttons";
import { SpaceHorizontal, Status } from "../../../../reusables/Elements";
import { ProcessTable } from "../../../../reusables/Tables";
import AddProcessTypes from "./AddProcessTypes";
import EditProcessTypes from "./EditProcessTypes";

function ProcessTypes({ impactId, setTypeId, setNameId }) {
  const [addProcessTypes, setAddProcessTypes] = useState(false);
  const [editProcessTypes, setEditProcessTypes] = useState(false);
  const [details, setDetails] = useState({});

  return (
    <div>
      <AddButton
        text={"Add Process Type"}
        onClick={() => setAddProcessTypes(true)}
      />
      <SpaceHorizontal height={5} />
      <ProcessTable
        tableWidth={100}
        height={150}
        apiRoute={apiRoutes.processTypesByImpactId + impactId}
        rowHover
        seletableRow
        injectedParameters={[impactId]}
        selectedRowValue={"Id"}
        setValueFromSelectedRow={setTypeId}
        otherSetterFunctions={() => {
          setNameId(0);
        }}
        columns={[
          { path: "Descrip", name: "Type" },
          { path: "Impact", name: "Process Impact" },
          { path: "Color", color: "Color", name: "Color" },
          { path: "IsActive", status: Status, name: "IsActive" },
          {
            path: "Edit",
            name: "Edit",
            edit: true,
            showEdit: () => setEditProcessTypes(!editProcessTypes),
            setEditDetails: setDetails,
          },
        ]}
      />
      {addProcessTypes && (
        <AddProcessTypes trigger={setAddProcessTypes} impactId={impactId} />
      )}
      {editProcessTypes && (
        <EditProcessTypes trigger={setEditProcessTypes} details={details} />
      )}
    </div>
  );
}

export default ProcessTypes;
