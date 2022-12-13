import React, { useState } from "react";
import { apiPost } from "../../../../api-services/ApiCalls";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { PopupForm, SpaceHorizontal } from "../../../../reusables/Elements";
import { SelectColor, TextInput } from "../../../../reusables/Inputs";

function AddProcessImpacts({ trigger, groupId, refresh, setRefresh }) {
  const [descrip, setDescrip] = useState();
  const [color, setColor] = useState();

  const add = () => {
    apiPost(
      apiRoutes.processImpacts,
      {
        Id: 0,
        TenantId: 0,
        Color: color,
        IsActive: true,
        Descrip: descrip,
        ProcessGrpId: groupId,
      },
      () => {
        setRefresh(refresh + refresh);
        trigger(false);
      }
    );
  };
  return trigger ? (
    <PopupForm
      onSubmit={add}
      trigger={trigger}
      width={500}
      submitBtnText={"Save"}
      heading={"Add Process Impact to Selected Group = " + groupId}
    >
      <TextInput placeholder={"Impact"} onChange={setDescrip} />
      <SpaceHorizontal height={10} />
      <SelectColor set={setColor} />
    </PopupForm>
  ) : (
    ""
  );
}

export default AddProcessImpacts;
