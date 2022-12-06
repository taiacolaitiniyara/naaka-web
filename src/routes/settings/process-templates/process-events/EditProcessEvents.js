import React, { useState } from "react";
import { apiPut } from "../../../../api-services/ApiCalls";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { useFetchApiList } from "../../../../reusables/CustomHooks";
import { PopupForm, SpaceHorizontal } from "../../../../reusables/Elements";
import {
  IsActiveInput,
  NumberInput,
  SelectColor,
  SelectInput,
  TextInput,
} from "../../../../reusables/Inputs";

function EditProcessEvents({ trigger, details }) {
  const eventRefs = useFetchApiList(apiRoutes.processEventsReference);
  const [descrip, setDescrip] = useState(details.Descrip);
  const [color, setColor] = useState(details.Color);
  const [eventRefId, setEventRefId] = useState(details.EventRefId);
  const [seq, setSeq] = useState(details.Sequence);
  const [isActive, setIsActive] = useState(details.IsActive);
  return trigger ? (
    <PopupForm
      onSubmit={() =>
        apiPut(apiRoutes.processEvents, {
          Id: details.Id,
          TenantId: details.TenantId,
          Color: color,
          IsActive: isActive,
          Descrip: descrip,
          EventRefId: eventRefId,
          Sequence: seq,
          ProcessNameId: details.ProcessNameId,
        })
      }
      trigger={trigger}
      width={500}
      submitBtnText={"Save"}
      heading={"Edit Event"}
    >
      <TextInput
        value={descrip}
        placeholder={"Process Event Name"}
        onChange={setDescrip}
      />
      <SpaceHorizontal height={10} />
      <SelectColor value={color} set={setColor} />
      <SpaceHorizontal height={10} />
      <SelectInput
        value={eventRefId}
        list={eventRefs}
        listName={"Event Template"}
        optionName={"Descrip"}
        optionValue={"Id"}
        setValue={setEventRefId}
        dataType={"int"}
      />
      <SpaceHorizontal height={10} />
      <NumberInput value={seq} placeholder={"Sequence"} onChange={setSeq} />
      <SpaceHorizontal height={10} />
      <IsActiveInput
        idNumber={2390238023}
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </PopupForm>
  ) : (
    ""
  );
}

export default EditProcessEvents;
