import React, { useState } from "react";
import { PopupForm, SpaceHorizontal } from "../../../../reusables/Elements";
import { apiPut } from "../../../../api-services/ApiCalls";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { refreshOnClose } from "../../../../reusables/Functions";
import {
  NumberInput,
  SelectColor,
  TextInput,
} from "../../../../reusables/Inputs";

function EditConnPhase({ details, trigger, setRefresh, refresh }) {
  const [descrip, setDescrip] = useState(details.Descrip);
  const [phase, setPhase] = useState(details.Phase);
  const [color, setColor] = useState(details.Color);

  return (
    <PopupForm
      width={300}
      submitBtnText={"Save"}
      onSubmit={() => {
        apiPut(
          apiRoutes.editConnPhase,
          {
            Id: details.Id,
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
      <TextInput
        value={descrip}
        placeholder={"Description"}
        onChange={setDescrip}
      />
      <SpaceHorizontal height={10} />
      <SelectColor value={color} set={setColor} />
    </PopupForm>
  );
}

export default EditConnPhase;
