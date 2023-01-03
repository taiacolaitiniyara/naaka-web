import React, { useState } from "react";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { useFetchApiList } from "../../../../reusables/CustomHooks";
import { PopupForm, SpaceHorizontal } from "../../../../reusables/Elements";
import { addToApi, refreshOnClose } from "../../../../reusables/Functions";
import {
  DoubleInputs,
  NumberInput,
  SelectColor,
  SelectInput,
  TextInput,
} from "../../../../reusables/Inputs";

function AddProcessEventsTemplate({ trigger, refresh, setRefresh }) {
  const [descrip, setDescrip] = useState();
  const [targetPercent, setTargetPercent] = useState();
  const [targetPeriod, setTargetPeriod] = useState();
  const [unitId, setUnitId] = useState();
  const [owner, setOwner] = useState();
  const [color, setColor] = useState();

  const units = useFetchApiList(apiRoutes.processTimeunits);
  const owners = useFetchApiList(apiRoutes.processWorkers);
  return trigger ? (
    <PopupForm
      onSubmit={() => {
        addToApi(
          apiRoutes.processEventsReference,
          {
            Id: 0,
            TenantId: 0,
            Color: color,
            IsActive: true,
            Descrip: descrip,
            TargetPercent: targetPercent,
            TargetPeriod: targetPeriod,
            TargetPeriodUnitId: unitId,
            TargetOwner: owner,
            IsVisible: 1,
          },
          () => refreshOnClose(setRefresh, refresh, trigger)
        );
      }}
      trigger={trigger}
      width={500}
      submitBtnText={"Save"}
      heading={"Add Process Event Reference"}
    >
      <TextInput placeholder={"Template Name"} onChange={setDescrip} />
      <SpaceHorizontal height={10} />
      <SelectColor set={setColor} />
      <SpaceHorizontal height={10} />
      <DoubleInputs
        input1={
          <NumberInput
            placeholder={"Target Period"}
            onChange={setTargetPeriod}
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
          />
        }
        width1={50}
        width2={50}
      />
      <SpaceHorizontal height={10} />
      <NumberInput
        onChange={setTargetPercent}
        placeholder={"Target Percentage [ % ]"}
      />
      <SpaceHorizontal height={10} />
      <SelectInput
        list={owners}
        listName={"Process Owner"}
        optionName={"Descrip"}
        optionName2={"Role"}
        optionName3={"Workgroup"}
        optionValue={"Id"}
        setValue={setOwner}
        dataType={"int"}
      />
    </PopupForm>
  ) : (
    ""
  );
}

export default AddProcessEventsTemplate;
