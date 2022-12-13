import React, { useState } from "react";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { AddButton } from "../../../../reusables/Buttons";
import { SpaceHorizontal, Status } from "../../../../reusables/Elements";
import { ProcessTable } from "../../../../reusables/Tables";
import AddProcessNames from "./AddProcessNames";
import EditProcessNames from "./EditProcessNames";

function ProcessNames({ typeId, setNameId, refresh, setRefresh }) {
  const [addProcessNames, setAddProcessNames] = useState(false);
  const [editProcessNames, setEditProcessNames] = useState(false);
  const [details, setDetails] = useState({});

  return (
    <div>
      <AddButton
        text={"Add Process Name"}
        onClick={() => setAddProcessNames(true)}
      />
      <SpaceHorizontal height={5} />
      <ProcessTable
        tableWidth={100}
        height={150}
        apiRoute={apiRoutes.processNamesByTypeId + typeId}
        rowHover
        seletableRow
        setValueFromSelectedRow={setNameId}
        selectedRowValue={"Id"}
        injectedParameters={[typeId, refresh]}
        columns={[
          { path: "Descrip", name: "Name" },
          { path: "ProcessType", name: "ProcessType" },
          { path: "TargetPeriod", name: "Target Period" },
          { path: "TargetPeriodUnit", name: "Unit" },
          { path: "TargetPercent", name: "Target (%)" },
          { path: "Color", color: "Color", name: "Color" },
          { path: "IsActive", status: Status, name: "IsActive" },
          {
            path: "Edit",
            name: "Edit",
            edit: true,
            showEdit: () => setEditProcessNames(!editProcessNames),
            setEditDetails: setDetails,
          },
        ]}
      />
      {addProcessNames && (
        <AddProcessNames
          refresh={refresh}
          setRefresh={setRefresh}
          trigger={setAddProcessNames}
          typeId={typeId}
        />
      )}
      {editProcessNames && (
        <EditProcessNames
          refresh={refresh}
          setRefresh={setRefresh}
          trigger={setEditProcessNames}
          details={details}
        />
      )}
    </div>
  );
}

export default ProcessNames;
