import React, { useState } from "react";
import { apiPut } from "../../../../api-services/ApiCalls";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { PopupForm, SpaceHorizontal } from "../../../../reusables/Elements";
import {
  IsActiveInput,
  SelectColor,
  SelectInput,
  TextInput,
} from "../../../../reusables/Inputs";
import { refreshOnClose } from "../../../../reusables/Functions";
import { useFetchApiList } from "../../../../reusables/CustomHooks";
import { DepotTypes } from "../../../../reusables/Lists";
import { AddAddressMap } from "../../../../reusables/Maps";

function EditProcessDepots({ trigger, details, refresh, setRefresh }) {
  const regions = useFetchApiList(apiRoutes.processRegions);
  const [descrip, setDescrip] = useState(details.Descrip);
  const [color, setColor] = useState(details.Color);
  const [depotType, setDepotType] = useState(details.DepotType);
  const [xLng, setXLng] = useState(details.YLat);
  const [yLat, setYLat] = useState(details.XLng);
  const [gpsAddress, setGpsAddress] = useState(details.GpsAddress);
  const [regionId, setRegionId] = useState(details.RegionId);
  const [isActive, setIsActive] = useState(details.IsActive);
  function add() {
    apiPut(
      apiRoutes.processDepots,
      {
        Region: "string",
        GpsAddress: gpsAddress,
        XLng: xLng,
        YLat: yLat,
        Id: details.Id,
        RecId: details.RecId,
        TenantId: details.TenantId,
        Color: color,
        IsActive: isActive,
        Descrip: descrip,
        Abbrev:
          descrip.split("")[0] +
          descrip.split("")[1].toUpperCase() +
          descrip.split("")[2].toUpperCase(),
        DepotType: depotType,
        RegionId: regionId,
        LocationId: details.LocationId,
      },
      () => refreshOnClose(setRefresh, refresh, trigger)
    );
  }
  return trigger ? (
    <PopupForm
      onSubmit={add}
      trigger={trigger}
      width={500}
      submitBtnText={"Update"}
      heading={"Edit " + details.Descrip}
    >
      <TextInput value={descrip} placeholder={"Name"} onChange={setDescrip} />
      <SpaceHorizontal height={10} />
      <IsActiveInput setIsActive={setIsActive} isActive={isActive} />
      <SpaceHorizontal height={10} />
      <SelectInput
        list={DepotTypes}
        listName={"Depot Type"}
        optionName={"name"}
        optionValue={"name"}
        setValue={setDepotType}
        value={depotType}
      />
      <SpaceHorizontal height={10} />
      <SelectInput
        list={regions}
        listName={"Region"}
        optionName={"Descrip"}
        optionValue={"Id"}
        setValue={setRegionId}
        dataType={"int"}
      />
      <SpaceHorizontal height={10} />
      <SelectColor value={color} set={setColor} />
      <SpaceHorizontal height={10} />
      Drag pin to depot location
      <AddAddressMap
        height={200}
        setLat={setYLat}
        setLng={setXLng}
        setGpsAddress={setGpsAddress}
      />
    </PopupForm>
  ) : (
    ""
  );
}

export default EditProcessDepots;
