import React, { useState } from "react";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { AddButton } from "../../../../reusables/Buttons";
import { SpaceHorizontal, Status } from "../../../../reusables/Elements";
import { DynamicTable } from "../../../../reusables/Tables";
import AddProcessDepots from "./AddProcessDepots";
import EditProcessDepots from "./EditProcessDepots";

function ProcessDepots({ refresh, setRefresh }) {
  const [addProcessDepots, setAddProcessDepots] = useState(false);
  const [editProcessDepots, setEditProcessDepots] = useState(false);
  const [details, setDetails] = useState({});

  return (
    <div>
      <AddButton
        text={"Add Process Depots"}
        onClick={() => setAddProcessDepots(true)}
      />
      <SpaceHorizontal height={5} />
      <DynamicTable
        tableWidth={100}
        height={150}
        apiRoute={apiRoutes.processDepots}
        rowHover
        seletableRow
        injectedParameters={[refresh]}
        columns={[
          { path: "Descrip", name: "Depot" },
          { path: "Abbrev", name: "Abbreviation" },
          { path: "DepotType", name: "Depot Type" },
          { path: "GpsAddress", name: "Address" },
          { path: "Region", name: "Region" },
          { path: "Color", color: "Color", name: "Color" },
          { path: "IsActive", status: Status, name: "IsActive" },
          {
            path: "Edit",
            name: "Edit",
            edit: true,
            showEdit: () => setEditProcessDepots(!editProcessDepots),
            setEditDetails: setDetails,
          },
        ]}
      />
      {addProcessDepots && (
        <AddProcessDepots
          refresh={refresh}
          setRefresh={setRefresh}
          trigger={setAddProcessDepots}
        />
      )}
      {editProcessDepots && (
        <EditProcessDepots
          refresh={refresh}
          setRefresh={setRefresh}
          trigger={setEditProcessDepots}
          details={details}
        />
      )}
    </div>
  );
}

export default ProcessDepots;
