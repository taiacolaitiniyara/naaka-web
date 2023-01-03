import React from "react";
import { useState } from "react";
import { apiPut } from "../../../api-services/ApiCalls";
import { apiRoutes } from "../../../api-services/ApiRoutes";
import { PopupForm, SpaceHorizontal } from "../../../reusables/Elements";
import { refreshOnClose } from "../../../reusables/Functions";
import { SelectColor, TextInput } from "../../../reusables/Inputs";

function EditReadingRoute({ trigger, refresh, setRefresh, details }) {
  const [descrip, setDescrip] = useState(details.Descrip);
  const [color, setColor] = useState(details.Color);
  return (
    <PopupForm
      heading={"Add Districts to Route"}
      width={400}
      submitBtnText={"Save"}
      trigger={trigger}
      onSubmit={() => {
        const entry = {
          District: "string",
          DistrictIds: [],
          Id: details.Id,
          TenantId: 0,
          Color: color,
          IsActive: true,
          Descrip: descrip,
          RouteRef: details.RouteRef,
          DistrictId: 0,
        };
        apiPut(apiRoutes.readingRoutes, entry, () =>
          refreshOnClose(setRefresh, refresh, trigger)
        );

        //console.log("Reading", entry);
      }}
    >
      <TextInput
        required={true}
        placeholder={"Route Name"}
        onChange={setDescrip}
        value={descrip}
      />
      <SpaceHorizontal height={10} />
      <SelectColor set={setColor} value={color} />
      <SpaceHorizontal height={10} />
    </PopupForm>
  );
}

export default EditReadingRoute;
