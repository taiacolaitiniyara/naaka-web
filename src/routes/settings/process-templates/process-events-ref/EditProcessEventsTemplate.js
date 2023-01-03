import React, { useState } from "react";
import { apiPut } from "../../../../api-services/ApiCalls";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { useFetchApiList } from "../../../../reusables/CustomHooks";
import { PopupForm, SpaceHorizontal } from "../../../../reusables/Elements";
import {
  DoubleInputs,
  IsActiveInput,
  NumberInput,
  SelectColor,
  SelectInput,
  TextInput,
} from "../../../../reusables/Inputs";
import { refreshOnClose } from "../../../../reusables/Functions";

function EditProcessEventsTemplate({ trigger, details, refresh, setRefresh }) {
  const [descrip, setDescrip] = useState(details.Descrip);
  const [targetPercent, setTargetPercent] = useState(details.TargetPercent);
  const [targetPeriod, setTargetPeriod] = useState(details.TargetPeriod);
  const [unitId, setUnitId] = useState(details.TargetPeriodUnitId);
  const [owner, setOwner] = useState(details.TargetOwner);
  const [color, setColor] = useState(details.Color);
  const [isActive, setIsActive] = useState(details.IsActive);

  const units = useFetchApiList(apiRoutes.processTimeunits);
  const owners = useFetchApiList(apiRoutes.processWorkers);
  return trigger ? (
    <PopupForm
      onSubmit={() => {
        apiPut(
          apiRoutes.processEventsReference,
          {
            Id: details.Id,
            TenantId: details.TenantId,
            Color: color,
            IsActive: isActive,
            Descrip: descrip,
            TargetPercent: targetPercent,
            TargetPeriod: targetPeriod,
            TargetPeriodUnitId: unitId,
            TargetOwner: owner,
            IsVisible: details.IsVisible,
          },
          () => refreshOnClose(setRefresh, refresh, trigger)
        );
      }}
      trigger={trigger}
      width={500}
      submitBtnText={"Save"}
      heading={"Add Process Event Template"}
    >
      <TextInput
        placeholder={"Template Name"}
        onChange={setDescrip}
        value={descrip}
      />
      <SpaceHorizontal height={10} />
      <SelectColor set={setColor} value={color} />
      <SpaceHorizontal height={10} />
      <DoubleInputs
        input1={
          <NumberInput
            placeholder={"Target Period"}
            onChange={setTargetPeriod}
            value={targetPeriod}
          />
        }
        input2={
          <SelectInput
            list={units}
            listName={"Target Period Unit"}
            optionName={"Descrip"}
            optionValue={"Id"}
            setValue={setUnitId}
            dataType={"int"}
            value={unitId}
          />
        }
        width1={50}
        width2={50}
      />
      <SpaceHorizontal height={10} />
      <NumberInput
        onChange={setTargetPercent}
        placeholder={"Target Percentage [ % ]"}
        value={targetPercent}
      />
      <SpaceHorizontal height={10} />
      <SelectInput
        list={owners}
        listName={"Process Owner"}
        optionName={"Descrip"}
        optionValue={"Id"}
        setValue={setOwner}
        dataType={"int"}
        value={owner}
      />
      <SpaceHorizontal height={10} />
      <IsActiveInput
        isActive={isActive}
        setIsActive={setIsActive}
        idNumber={11111}
      />
    </PopupForm>
  ) : (
    ""
  );
}

export default EditProcessEventsTemplate;
