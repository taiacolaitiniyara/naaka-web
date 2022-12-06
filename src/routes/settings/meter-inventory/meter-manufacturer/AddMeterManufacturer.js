import React from "react";
import { PopupForm } from "../../../../reusables/Elements";

function AddMeterManufacturer({ trigger }) {
  return trigger ? (
    <PopupForm
      trigger={trigger}
      width={500}
      submitBtnText={"Save"}
      heading={"Add Meter Manufacturer"}
    >
      AddMeterVendor
    </PopupForm>
  ) : (
    ""
  );
}

export default AddMeterManufacturer;
