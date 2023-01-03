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
import { refreshOnClose } from "../../../../reusables/Functions";

function EditProcessEvents({
  trigger,
  details,
  refresh,
  setRefresh,
  processId,
}) {
  const eventRefs = useFetchApiList(apiRoutes.processEventsReference);
  const [descrip, setDescrip] = useState(details.Descrip);
  const [color, setColor] = useState(details.Color);
  const [eventRefId, setEventRefId] = useState(details.EventRefId);
  const [ord, setSeq] = useState(details.Ord);
  const [isActive, setIsActive] = useState(details.IsActive);
  return trigger ? (
    <PopupForm
      onSubmit={() => {
        apiPut(
          apiRoutes.processEvents,
          {
            Id: details.Id,
            RecId: 0,
            TenantId: 0,
            Color: color,
            IsActive: isActive,
            Descrip: descrip,
            EventRefId: eventRefId,
            Ord: ord,
            ProcessId: processId,
          },
          () => refreshOnClose(setRefresh, refresh, trigger)
        );
        // console.log(JSON.stringify({
        //   Id: details.Id,
        //   RecId: 0,
        //   TenantId: 0,
        //   Color: color,
        //   IsActive: isActive,
        //   Descrip: descrip,
        //   EventRefId: eventRefId,
        //   Ord: ord,
        //   ProcessId: processId,
        // }));
      }}
      trigger={trigger}
      width={500}
      submitBtnText={"Save"}
      heading={"Edit Event"}
    >
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
      <SelectColor value={color} set={setColor} />
      <SpaceHorizontal height={10} />

      <SpaceHorizontal height={10} />
      <NumberInput value={ord} placeholder={"Sequence"} onChange={setSeq} />
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
