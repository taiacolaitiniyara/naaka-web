import React, { useState } from "react";
import { apiPost } from "../../../../api-services/ApiCalls";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { PopupForm, SpaceHorizontal } from "../../../../reusables/Elements";
import { SelectColor, TextInput } from "../../../../reusables/Inputs";

function AddProcessGroups({ trigger }) {
  const [descrip, setDescrip] = useState();
  const [color, setColor] = useState();

  const add = () => {
    apiPost(apiRoutes.processGroups, {
      Id: 0,
      TenantId: 0,
      Color: color,
      IsActive: true,
      Descrip: descrip,
      Prefix: descrip.split("")[0],
    });
    trigger(false);
  };
  return trigger ? (
    <PopupForm
      onSubmit={add}
      trigger={trigger}
      width={500}
      submitBtnText={"Save"}
      heading={"Add Process Group"}
    >
      <TextInput placeholder={"Group Name"} onChange={setDescrip} />
      <SpaceHorizontal height={10} />
      <SelectColor set={setColor} />
    </PopupForm>
  ) : (
    ""
  );
}

export default AddProcessGroups;
