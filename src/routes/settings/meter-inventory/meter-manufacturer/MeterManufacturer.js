import React, { useState } from "react";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { AddButton } from "../../../../reusables/Buttons";
import { SpaceHorizontal, Status } from "../../../../reusables/Elements";
import { DynamicTable } from "../../../../reusables/Tables";
import AddMeterManufacturer from "./AddMeterManufacturer";
import EditMeterManufacturer from "./EditMeterManufacturer";

function MeterManufacturer() {
  const [addMeterManufacturer, setAddMeterManufacturer] = useState(false);
  const [editMeterManufacturer, setEditMeterManufacturer] = useState(false);
  const [details, setDetails] = useState({});

  return (
    <div>
      <AddButton
        text={"Add Meter Manufacturer"}
        onClick={() => setAddMeterManufacturer(true)}
      />
      <SpaceHorizontal height={10} />
      <DynamicTable
        tableWidth={100}
        height={150}
        apiRoute={apiRoutes.meterManufacturers}
        columns={[
          { path: "ManufacturerName", name: "Manufacturer" },
          { path: "ManufacturerStreet", name: "Manufacturer Street" },
          { path: "ManufacturerSuburb", name: "Manufacturer Suburb" },
          { path: "ManufacturerCity", name: "Manufacturer City" },
          { path: "ManufacturerPostcode", name: "Manufacturer Post Code" },
          { path: "ManufacturerCountry", name: "Manufacturer Country" },
          { path: "Color", color: "Color", name: "Color" },
          { path: "IsActive", status: Status, name: "IsActive" },
          {
            path: "Edit",
            name: "Edit",
            edit: true,
            showEdit: () => setEditMeterManufacturer(!editMeterManufacturer),
            setEditDetails: setDetails,
          },
        ]}
      />
      {addMeterManufacturer && <AddMeterManufacturer trigger={setAddMeterManufacturer} />}
      {editMeterManufacturer && (
        <EditMeterManufacturer trigger={setEditMeterManufacturer} details={details} />
      )}
    </div>
  );
}

export default MeterManufacturer;
