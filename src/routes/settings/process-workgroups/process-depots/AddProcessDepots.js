import React, { useState } from "react";
import { apiPut } from "../../../../api-services/ApiCalls";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { PopupForm, SpaceHorizontal } from "../../../../reusables/Elements";
import {
  SelectColor,
  TextInput,
} from "../../../../reusables/Inputs";

function AddProcessDepots({ trigger, regionId }) {
  const [descrip, setDescrip] = useState();
  const [color, setColor] = useState();
  function add() {
    apiPut(apiRoutes.processDepots, {
      Id: 0,
      TenantId: 0,
      Color: color,
      IsActive: true,
      Descrip: descrip,
      Abbrev: (descrip.split("")[0] + descrip.split("")[1]).toUpperCase(),
    });
    trigger(false);
  }
  return trigger ? (
    <PopupForm
      onSubmit={add}
      trigger={trigger}
      width={500}
      submitBtnText={"Update"}
      heading={"Add Process Depot to Selected Region = " + regionId}
    >
      <TextInput value={descrip} placeholder={"Type"} onChange={setDescrip} />
      <SpaceHorizontal height={10} />
      <SelectColor value={color} set={setColor} />
    </PopupForm>
  ) : (
    ""
  );
}

export default AddProcessDepots;
