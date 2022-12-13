import React, { useState } from "react";
import { apiPut } from "../../../../api-services/ApiCalls";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { useFetchApiList } from "../../../../reusables/CustomHooks";
import { PopupForm, SpaceHorizontal } from "../../../../reusables/Elements";
import {
  SelectColor,
  SelectInput,
  TextInput,
} from "../../../../reusables/Inputs";
import { DepotTypes } from "../../../../reusables/Lists";

function AddProcessDepots({ trigger, refresh, setRefresh}) {
  const regions = useFetchApiList(apiRoutes.processRegions);
  const [descrip, setDescrip] = useState();
  const [color, setColor] = useState("#444");
  const [depotType, setDepotType] = useState();
  const [regionId, setRegionId] = useState();
  function add() {
    apiPut(apiRoutes.processDepots, {
      Id: 0,
      TenantId: 0,
      Color: color,
      IsActive: true,
      Descrip: "string",
      Abbrev: (descrip.split("")[0] + descrip.split("")[1]).toUpperCase(),
      DepotType: depotType,
      RegionId: regionId,
      LocationId: 0,
    });
  }
  return trigger ? (
    <PopupForm
      onSubmit={add}
      trigger={trigger}
      width={500}
      submitBtnText={"Update"}
      heading={"Add Process Depot to Selected Region = " + regionId}
    >
      <TextInput value={descrip} placeholder={"Name"} onChange={setDescrip} />
      <SpaceHorizontal height={10} />
      <SelectInput
        list={DepotTypes}
        listName={"Depot Type"}
        optionName={"name"}
        optionValue={"name"}
        setValue={setDepotType}
      />
      <SpaceHorizontal height={10} />
      <SelectInput
        list={regions}
        listName={"Region"}
        optionName={"Descrip"}
        optionValue={"Id"}
        setValue={setRegionId}
      />
      <SpaceHorizontal height={10} />
      <SelectColor value={color} set={setColor} />
    </PopupForm>
  ) : (
    ""
  );
}

export default AddProcessDepots;
