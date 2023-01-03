import React from "react";
import { useState } from "react";
import { apiPost } from "../../../api-services/ApiCalls";
import { apiRoutes } from "../../../api-services/ApiRoutes";
import { useFetchApiList } from "../../../reusables/CustomHooks";
import { PopupForm, SpaceHorizontal } from "../../../reusables/Elements";
import { refreshOnClose } from "../../../reusables/Functions";
import {
  SelectColor,
  SelectMultipleInput,
  TextInput,
} from "../../../reusables/Inputs";

function AddReadingRoute({ trigger, refresh, setRefresh }) {
  const [districtIds, setDistrictIds] = useState([]);
  const [descrip, setDescrip] = useState();
  const [color, setColor] = useState("#222");
  const unassignedDistricts = useFetchApiList(apiRoutes.unassignedDistricts);
  return (
    <PopupForm
      heading={"Add Districts to Route"}
      width={400}
      submitBtnText={"Submit"}
      trigger={trigger}
      onSubmit={() => {
        apiPost(
          apiRoutes.readingRoutes,
          {
            District: "string",
            DistrictIds: districtIds,
            Id: 0,
            TenantId: 0,
            Color: color,
            IsActive: true,
            Descrip: descrip,
            RouteRef: 0,
            DistrictId: 0,
          },
          () => refreshOnClose(setRefresh, refresh, trigger)
        );
        console.log({
          District: "string",
          DistrictIds: districtIds,
          Id: 0,
          TenantId: 0,
          Color: color,
          IsActive: true,
          Descrip: descrip,
          RouteRef: 0,
          DistrictId: 0,
        });
      }}
    >
      <TextInput
        required={true}
        placeholder={"Route Name"}
        onChange={setDescrip}
      />
      <SpaceHorizontal height={10} />
      <SelectColor set={setColor} />
      <SpaceHorizontal height={10} />
      <SelectMultipleInput
        list={unassignedDistricts}
        listName={"Districts"}
        optionName={"Description"}
        optionValue={"Id"}
        dataType={"int"}
        newList={districtIds}
        setNewList={setDistrictIds}
      />
    </PopupForm>
  );
}

export default AddReadingRoute;
