import React, { useState } from "react";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { useFetchApiList } from "../../../../reusables/CustomHooks";
import { PopupForm, SpaceHorizontal } from "../../../../reusables/Elements";
import { addToApi } from "../../../../reusables/Functions";
import {
  NumberInput,
  SelectColor,
  SelectInput,
  TextInput,
} from "../../../../reusables/Inputs";

function AddProcessEvents({ trigger, nameId }) {
  const eventRefs = useFetchApiList(apiRoutes.processEventsReference);
  const [descrip, setDescrip] = useState();
  const [color, setColor] = useState();
  const [eventRefId, setEventRefId] = useState();
  const [seq, setSeq] = useState();
  return trigger ? (
    <PopupForm
      onSubmit={() =>
        addToApi(apiRoutes.processEvents, {
          Id: 0,
          TenantId: 0,
          Color: color,
          IsActive: true,
          Descrip: descrip,
          EventRefId: eventRefId,
          Sequence: seq,
          ProcessNameId: nameId,
        })
      }
      trigger={trigger}
      width={500}
      submitBtnText={"Save"}
      heading={"Add Process Events to Selected Process Name = " + nameId}
    >
      <TextInput placeholder={"Process Event Name"} onChange={setDescrip} />
      <SpaceHorizontal height={10} />
      <SelectColor set={setColor} />
      <SpaceHorizontal height={10} />
      <SelectInput
        list={eventRefs}
        listName={"Event Template"}
        optionName={"Descrip"}
        optionValue={"Id"}
        setValue={setEventRefId}
        dataType={"int"}
      />
      <SpaceHorizontal height={10} />
      <NumberInput placeholder={"Sequence"} onChange={setSeq} />
    </PopupForm>
  ) : (
    ""
  );
}

export default AddProcessEvents;
