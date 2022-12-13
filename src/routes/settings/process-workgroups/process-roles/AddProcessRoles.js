import React, { useState } from "react";
import { apiPost } from "../../../../api-services/ApiCalls";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { PopupForm, SpaceHorizontal } from "../../../../reusables/Elements";
import { refreshOnClose } from "../../../../reusables/Functions";
import { SelectColor, TextInput } from "../../../../reusables/Inputs";

function AddProcessRoles({ trigger, refresh, setRefresh }) {
  const [descrip, setDescrip] = useState();
  const [color, setColor] = useState();

  const add = () => {
    apiPost(
      apiRoutes.processRoles,
      {
        Id: 0,
        TenantId: 0,
        Color: color,
        IsActive: true,
        Descrip: descrip,
        Abbrev: (descrip.split("")[0] + descrip.split("")[1]).toUpperCase(),
      },
      refreshOnClose(setRefresh, refresh, trigger)
    );
  };
  return trigger ? (
    <PopupForm
      onSubmit={add}
      trigger={trigger}
      width={500}
      submitBtnText={"Save"}
      heading={"Add Process Region"}
    >
      <TextInput
        required={true}
        placeholder={"Role Name"}
        onChange={setDescrip}
      />
      <SpaceHorizontal height={10} />
      <SelectColor set={setColor} />
    </PopupForm>
  ) : (
    ""
  );
}

export default AddProcessRoles;
