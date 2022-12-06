import React from "react";
import { PopupForm } from "../../../../reusables/Elements";

function EditMeterVendor({ trigger, details }) {
  return (
    <PopupForm
      heading={"Edit Meter Vendor"}
      submitBtnText={"Update"}
      trigger={trigger}
      width={500}
    >
      EditMeterVendor
    </PopupForm>
  );
}

export default EditMeterVendor;
