import React, { useState } from "react";
import { apiPut } from "../../../../api-services/ApiCalls";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { PopupForm, SpaceHorizontal } from "../../../../reusables/Elements";
import {
  IsActiveInput,
  SelectColor,
  TextInput,
} from "../../../../reusables/Inputs";

function EditProcessDepots({ trigger, details, refresh }) {
  const [descrip, setDescrip] = useState(details.Descrip);
  const [color, setColor] = useState(details.Color);
  const [isActive, setIsActive] = useState(details.IsActive);
  function add() {
    apiPut(apiRoutes.processDepots, {
      Id: details.Id,
      TenantId: details.TenantId,
      Color: color,
      IsActive: isActive,
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
      heading={"Edit " + details.Descrip}
    >
      <TextInput value={descrip} placeholder={"Type"} onChange={setDescrip} />
      <SpaceHorizontal height={10} />
      <SelectColor value={color} set={setColor} />
      <SpaceHorizontal height={10} />
      <IsActiveInput
        isActive={isActive}
        setIsActive={setIsActive}
        idNumber={8884432}
      />
    </PopupForm>
  ) : (
    ""
  );
}

export default EditProcessDepots;
