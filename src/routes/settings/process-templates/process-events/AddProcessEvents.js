import React, { useState } from "react";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { useFetchApiList } from "../../../../reusables/CustomHooks";
import { PopupForm, SpaceHorizontal } from "../../../../reusables/Elements";
import { refreshOnClose } from "../../../../reusables/Functions";
import {
  NumberInput,
  SelectColor,
  SelectInput,
  TextInput,
} from "../../../../reusables/Inputs";
import { apiPost } from "../../../../api-services/ApiCalls";

function AddProcessEvents({ trigger, nameId, setRefresh, refresh }) {
  const eventRefs = useFetchApiList(apiRoutes.processEventsReference);
  const [color, setColor] = useState("#4f4f4f");
  const [eventRefId, setEventRefId] = useState();
  return trigger ? (
    <PopupForm
      onSubmit={() => {
        apiPost(
          apiRoutes.processEvents,
          {
            Id: 0,
            RecId: 0,
            TenantId: 0,
            Color: color,
            IsActive: true,
            Descrip: "string",
            EventRefId: eventRefId,
            Ord: 0,
            ProcessId: nameId,
          },
          () => refreshOnClose(setRefresh, refresh, trigger)
        );
      }}
      trigger={trigger}
      width={500}
      submitBtnText={"Save"}
      heading={"Add Process Events to Selected Process = " + nameId}
    >
      <SelectInput
        list={eventRefs}
        listName={"Event Reference"}
        optionName={"Descrip"}
        optionValue={"Id"}
        setValue={setEventRefId}
        dataType={"int"}
      />
      <SpaceHorizontal height={10} />
      <SelectColor set={setColor} />
      <SpaceHorizontal height={10} />
    </PopupForm>
  ) : (
    ""
  );
}

export default AddProcessEvents;
