import React from "react";
import { useState } from "react";
import { apiPost } from "../../../api-services/ApiCalls";
import { apiRoutes } from "../../../api-services/ApiRoutes";
import { PopupForm, SpaceHorizontal } from "../../../reusables/Elements";
import { refreshOnClose } from "../../../reusables/Functions";
import { SelectColor, TextInput } from "../../../reusables/Inputs";

function AddDistrict({ trigger, refresh, setRefresh }) {
  const [descrip, setDescrip] = useState();
  const [color, setColor] = useState("#222");
  return (
    <PopupForm
      width={350}
      heading={"Add District"}
      trigger={trigger}
      submitBtnText={"Save"}
      onSubmit={() => {
        apiPost(
          apiRoutes.district,
          {
            Id: 0,
            RecId: 0,
            TenantId: 0,
            Description: descrip,
            Type: 3,
            Mandatory: 0,
            IsActive: true,
            OrderBy: 0,
            ItemDescription: "",
            Color: color,
            DecVal: 0,
            ResponseTime: 0,
          },
          () => refreshOnClose(setRefresh, refresh, trigger)
        );
      }}
    >
      <TextInput onChange={setDescrip} placeholder={"District Name"} />
      <SpaceHorizontal height={10} />
      <SelectColor set={setColor} />
    </PopupForm>
  );
}

export default AddDistrict;
