import React, { useState } from "react";
import { PopupForm, SpaceHorizontal } from "../../../../reusables/Elements";
import { apiPost } from "../../../../api-services/ApiCalls";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { SelectColor, TextInput } from "../../../../reusables/Inputs";

function AddProcessTypes({ trigger, impactId, refresh, setRefresh }) {
  const [descrip, setDescrip] = useState();
  const [color, setColor] = useState();
  function add() {
    apiPost(
      apiRoutes.processTypes,
      {
        Id: 0,
        TenantId: 0,
        Color: color,
        IsActive: true,
        Descrip: descrip,
        ProcessImpactId: impactId,
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
      heading={"Add Process Type to Selected Process Impact = " + impactId}
    >
      <TextInput placeholder={"Type"} onChange={setDescrip} />
      <SpaceHorizontal height={10} />
      <SelectColor set={setColor} />
    </PopupForm>
  ) : (
    ""
  );
}

export default AddProcessTypes;
