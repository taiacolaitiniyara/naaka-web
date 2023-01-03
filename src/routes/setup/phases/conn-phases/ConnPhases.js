import React, { useState } from "react";
import { DynamicTable } from "../../../../reusables/Tables";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { AddButton } from "../../../../reusables/Buttons";
import { SpaceHorizontal } from "../../../../reusables/Elements";
import AddConnPhase from "./AddConnPhase";
import EditConnPhase from "./EditConnPhase";

function ConnPhases({ refresh, setRefresh }) {
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [details, setDetails] = useState({});
  return (
    <div>
      <AddButton text={"Add Conn Phase"} onClick={() => setShowAdd(true)} />
      <SpaceHorizontal height={5} />
      <DynamicTable
        apiRoute={apiRoutes.getConnPhases}
        tableWidth={100}
        injectedParameters={[refresh]}
        columns={[
          { path: "Phase", name: "Phase" },
          { path: "Descrip", name: "Description" },
          { path: "Color", name: "Color", color: "Color" },
          {
            path: "Edit",
            name: "Edit",
            edit: true,
            showEdit: () => setShowEdit(true),
            setEditDetails: setDetails,
          },
        ]}
      />
      {showAdd && (
        <AddConnPhase
          trigger={setShowAdd}
          refresh={refresh}
          setRefresh={setRefresh}
        />
      )}

      {showEdit && (
        <EditConnPhase
          details={details}
          refresh={refresh}
          setRefresh={setRefresh}
          trigger={setShowEdit}
        />
      )}
    </div>
  );
}

export default ConnPhases;
