import React, { useState } from "react";
import { PopupForm, SpaceHorizontal } from "../../../../reusables/Elements";
import { apiPost } from "../../../../api-services/ApiCalls";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { refreshOnClose } from "../../../../reusables/Functions";
import {
  NumberInput,
  SelectColor,
  TextInput,
} from "../../../../reusables/Inputs";

function AddConnPhase({ setRefresh, refresh, trigger }) {
  const [descrip, setDescrip] = useState();
  const [phase, setPhase] = useState(1);
  const [color, setColor] = useState();

  return (
    <PopupForm
      width={300}
      submitBtnText={"Save"}
      onSubmit={() => {
        apiPost(
          apiRoutes.addConnPhase,
          {
            Id: 0,
            Phase: phase,
            Descrip: descrip,
            Color: color,
          },
          refreshOnClose(setRefresh, refresh, trigger)
        );
      }}
      trigger={trigger}
      heading={"Add Meter Phase"}
    >
      <NumberInput
        value={phase}
        minValue={1}
        placeholder={"Phase"}
        onChange={setPhase}
      />
      <SpaceHorizontal height={10} />
      <TextInput placeholder={"Description"} onChange={setDescrip} />
      <SpaceHorizontal height={10} />
      <SelectColor set={setColor} />
    </PopupForm>
  );
}

export default AddConnPhase;
