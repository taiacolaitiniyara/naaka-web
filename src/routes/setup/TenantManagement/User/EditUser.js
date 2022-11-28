import React from "react";
import {PopupForm} from "../../../../reusables/Elements"

function EditUser({ trigger }) {
  return trigger ? <PopupForm>EditUser</PopupForm> : "";
}

export default EditUser;
