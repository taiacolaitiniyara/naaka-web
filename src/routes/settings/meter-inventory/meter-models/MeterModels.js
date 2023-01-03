import React, { useState } from "react";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { AddButton } from "../../../../reusables/Buttons";
import { SpaceHorizontal, Status } from "../../../../reusables/Elements";
import { DynamicTable } from "../../../../reusables/Tables";
import AddMeterModels from "./AddMeterModels";
import EditMeterModels from "./EditMeterModels";

function MeterModels() {
  const [addMeterModels, setAddMeterModels] = useState(false);
  const [editMeterModels, setEditMeterModels] = useState(false);
  const [details, setDetails] = useState({});

  return (
    <div>
      <AddButton
        text={"Add Meter Model"}
        onClick={() => setAddMeterModels(true)}
      />
      <SpaceHorizontal height={10} />
      <DynamicTable
        tableWidth={100}
        height={150}
        apiRoute={apiRoutes.meterModels}
        columns={[
          { path: "MtrType", name: "Mtr Type" },
          { path: "MtrManufacturer", name: "Manufacturer" },
          { path: "MtrModelNum", name: "Model" },
          { path: "Color", color: "Color", name: "Color" },
          { path: "IsActive", status: Status, name: "IsActive" },
          {
            path: "Edit",
            name: "Edit",
            edit: true,
            showEdit: () => setEditMeterModels(!editMeterModels),
            setEditDetails: setDetails,
          },
        ]}
      />
      {addMeterModels && (
        <AddMeterModels trigger={setAddMeterModels} />
      )}
      {editMeterModels && (
        <EditMeterModels
          trigger={setEditMeterModels}
          details={details}
        />
      )}
    </div>
  );
}

export default MeterModels;
