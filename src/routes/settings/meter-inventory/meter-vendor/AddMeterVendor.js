import React from "react";
import { PopupForm } from "../../../../reusables/Elements";

function AddMeterVendor({ trigger }) {
  return trigger ? (
    <PopupForm
      trigger={trigger}
      width={500}
      submitBtnText={"Save"}
      heading={"Add Meter Vendor"}
    >
      AddMeterVendor
    </PopupForm>
  ) : (
    ""
  );
}

export default AddMeterVendor;
