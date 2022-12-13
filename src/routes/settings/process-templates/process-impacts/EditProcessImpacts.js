import React, { useState } from "react";
import { apiPut } from "../../../../api-services/ApiCalls";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { PopupForm, SpaceHorizontal } from "../../../../reusables/Elements";
import {
  IsActiveInput,
  SelectColor,
  TextInput,
} from "../../../../reusables/Inputs";

function EditProcessImpacts({ trigger, details, refresh, setRefresh }) {
  const [descrip, setDescrip] = useState(details.Descrip);
  const [color, setColor] = useState(details.Color);
  const [isActive, setIsActive] = useState(details.IsActive);
  function add() {
    apiPut(
      apiRoutes.processImpacts,
      {
        Id: details.Id,
        TenantId: details.TenantId,
        Color: color,
        IsActive: isActive,
        Descrip: descrip,
        ProcessGrpId: details.ProcessGrpId,
      },
      () => {
        setRefresh(refresh + refresh);
        trigger(false);
      }
    );
   
  }
  return trigger ? (
    <PopupForm
      onSubmit={add}
      trigger={trigger}
      width={500}
      submitBtnText={"Save"}
      heading={"Edit " + details.Descrip}
    >
      <TextInput value={descrip} placeholder={"Type"} onChange={setDescrip} />
      <SpaceHorizontal height={10} />
      <SelectColor value={color} set={setColor} />
      <SpaceHorizontal height={10} />
      <IsActiveInput
        isActive={isActive}
        setIsActive={setIsActive}
        idNumber={112454666}
      />
    </PopupForm>
  ) : (
    ""
  );
}

export default EditProcessImpacts;
