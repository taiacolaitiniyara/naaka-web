import React, { useState } from "react";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { AddButton } from "../../../../reusables/Buttons";
import { SpaceHorizontal, Status } from "../../../../reusables/Elements";
import { DynamicTable } from "../../../../reusables/Tables";
import AddMeterVendor from "./AddMeterVendor";
import EditMeterVendor from "./EditMeterVendor";

function MeterVendor() {
  const [addMeterVendor, setAddMeterVendor] = useState(false);
  const [editMeterVendor, setEditMeterVendor] = useState(false);
  const [details, setDetails] = useState({});

  return (
    <div>
      <AddButton
        text={"Add Meter Vendor"}
        onClick={() => setAddMeterVendor(true)}
      />
      <SpaceHorizontal height={10} />
      <DynamicTable
        tableWidth={100}
        height={150}
        apiRoute={apiRoutes.meterVendors}
        columns={[
          { path: "VendorName", name: "Vendor" },
          { path: "ShippingStreet", name: "Shipping Street" },
          { path: "ShippingSuburb", name: "Shipping Suburb" },
          { path: "ShippingCity", name: "Shipping City" },
          { path: "ShippingPostcode", name: "Shipping Post Code" },
          { path: "ShippingCountry", name: "Shipping Country" },
          { path: "Color", color: "Color", name: "Color" },
          { path: "IsActive", status: Status, name: "IsActive" },
          {
            path: "Edit",
            name: "Edit",
            edit: true,
            showEdit: () => setEditMeterVendor(!editMeterVendor),
            setEditDetails: setDetails,
          },
        ]}
      />
      {addMeterVendor && <AddMeterVendor trigger={setAddMeterVendor} />}
      {editMeterVendor && (
        <EditMeterVendor trigger={setEditMeterVendor} details={details} />
      )}
    </div>
  );
}

export default MeterVendor;
