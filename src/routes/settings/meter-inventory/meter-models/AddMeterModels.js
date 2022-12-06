import React from "react";
import { PopupForm } from "../../../../reusables/Elements";

function AddMeterModels({ trigger }) {
  return trigger ? (
    <PopupForm
      trigger={trigger}
      width={500}
      submitBtnText={"Save"}
      heading={"Add Meter Model"}
    >
      AddMeterVendor
    </PopupForm>
  ) : (
    ""
  );
}

export default AddMeterModels;
