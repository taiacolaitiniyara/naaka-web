import React, { useState } from "react";
import { apiPost } from "../../../../api-services/ApiCalls";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { useFetchApiList } from "../../../../reusables/CustomHooks";
import { PopupForm, SpaceHorizontal } from "../../../../reusables/Elements";
import {
  SelectColor,
  SelectInput,
  TextInput,
} from "../../../../reusables/Inputs";
import { DepotTypes } from "../../../../reusables/Lists";
import { AddAddressMap } from "../../../../reusables/Maps";
import { refreshOnClose } from "../../../../reusables/Functions";

function AddProcessDepots({ trigger, refresh, setRefresh }) {
  const regions = useFetchApiList(apiRoutes.processRegions);
  const [descrip, setDescrip] = useState();
  const [color, setColor] = useState("#444");
  const [depotType, setDepotType] = useState();
  const [xLng, setXLng] = useState();
  const [yLat, setYLat] = useState();
  const [gpsAddress, setGpsAddress] = useState();
  const [regionId, setRegionId] = useState();
  function add() {
    console.log({
      Region: "string",
      GpsAddress: gpsAddress,
      XLng: xLng,
      YLat: yLat,
      Id: 0,
      RecId: 0,
      TenantId: 0,
      Color: color,
      IsActive: true,
      Descrip: descrip,
      Abbrev:
        descrip.split("")[0] +
        descrip.split("")[1].toUpperCase() +
        descrip.split("")[2].toUpperCase(),
      DepotType: depotType,
      RegionId: regionId,
      LocationId: 0,
    });
    apiPost(
      apiRoutes.processDepots,
      {
        Region: "string",
        GpsAddress: gpsAddress,
        XLng: xLng,
        YLat: yLat,
        Id: 0,
        RecId: 0,
        TenantId: 0,
        Color: color,
        IsActive: true,
        Descrip: descrip,
        Abbrev:
          descrip.split("")[0] + descrip.split("")[1] + descrip.split("")[2],
        DepotType: depotType,
        RegionId: regionId,
        LocationId: 0,
      },
      refreshOnClose(setRefresh, refresh, trigger)
    );
  }
  return trigger ? (
    <PopupForm
      onSubmit={add}
      trigger={trigger}
      width={500}
      submitBtnText={"Submit"}
      heading={"Add Process Depot"}
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

export default AddProcessDepots;
