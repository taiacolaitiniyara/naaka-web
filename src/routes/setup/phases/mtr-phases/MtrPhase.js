import React from "react";
import { DynamicTable } from "../../../../reusables/Tables";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { AddButton } from "../../../../reusables/Buttons";
import { SpaceHorizontal } from "../../../../reusables/Elements";
import { useState } from "react";
import AddMtrPhase from "./AddMtrPhase";
import EditMtrPhase from "./EditMtrPhase";

function MtrPhase({ refresh, setRefresh }) {
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [details, setDetails] = useState({});
  return (
    <div>
      <AddButton text={"Add Mtr Phase"} onClick={() => setShowAdd(true)} />
      <SpaceHorizontal height={5} />
      <DynamicTable
        apiRoute={apiRoutes.getMeterPhases}
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
        <AddMtrPhase
          trigger={setShowAdd}
          refresh={refresh}
          setRefresh={setRefresh}
        />
      )}
      {showEdit && (
        <EditMtrPhase
          details={details}
          setRefresh={setRefresh}
          refresh={refresh}
          trigger={setShowEdit}
        />
      )}
    </div>
  );
}

export default MtrPhase;
