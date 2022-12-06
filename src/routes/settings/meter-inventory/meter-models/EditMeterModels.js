import React from "react";
import { PopupForm } from "../../../../reusables/Elements";

function EditMeterModels({ trigger, details }) {
  return trigger ? (
    <PopupForm
      trigger={trigger}
      width={500}
      submitBtnText={"Save"}
      heading={"Edit Meter Manufacturer"}
    >
      AddMeterVendor
    </PopupForm>
  ) : (
    ""
  );
}

export default EditMeterModels;
