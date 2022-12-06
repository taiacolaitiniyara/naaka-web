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

function EditProcessNames({ trigger, details }) {
  const units = useFetchApiList(apiRoutes.processTimeunits);
  const owners = useFetchApiList(apiRoutes.processWorkers);

  const [descrip, setDescrip] = useState(details.Descrip);
  const [color, setColor] = useState(details.Color);
  const [periodUnitId, setPeriodUnitId] = useState(details.TargetPeriodUnitId);
  const [targetPeriod, setTargetPeriod] = useState(details.TargetPeriod);
  const [targetPercent, setTargetPercent] = useState(details.TargetPercent);
  const [owner, setOwner] = useState(details.SlaOwner);
  const [isActive, setIsActive] = useState(details.IsActive);

  return trigger ? (
    <PopupForm
      trigger={trigger}
      onSubmit={() => {
        apiPut(apiRoutes.processNames, {
          Id: details.Id,
          TenantId: details.TenantId,
          Color: color,
          IsActive: isActive,
          Descrip: descrip,
          ProcessTypeId: details.ProcessTypeId,
          TargetPercent: targetPercent,
          TargetPeriod: targetPeriod,
          TargetPeriodUnitId: periodUnitId,
          SlaOwner: owner,
        });
      }}
      width={500}
      submitBtnText={"Save"}
      heading={"Edit " + details.Descrip}
    >
      <TextInput
        required={true}
        placeholder={"Process Name"}
        onChange={setDescrip}
        value={descrip}
      />
      <SpaceHorizontal height={10} />
      <SelectColor set={setColor} value={color} />
      <SpaceHorizontal height={10} />
      <DoubleInputs
        input1={
          <NumberInput
            onChange={setTargetPeriod}
            placeholder={"Target Period"}
            required={true}
            value={targetPeriod}
          />
        }
        input2={
          <SelectInput
            list={units}
            listName={"Select Unit"}
            optionName={"Descrip"}
            optionValue={"Id"}
            setValue={setPeriodUnitId}
            dataType={"int"}
            value={periodUnitId}
          />
        }
        width1={50}
        width2={50}
      />
      <SpaceHorizontal height={10} />
      <NumberInput
        placeholder={"Target Percentage (%)"}
        onChange={setTargetPercent}
        value={targetPercent}
      />
      <SpaceHorizontal height={10} />
      <SelectInput
        list={owners}
        listName={"SLA Owner"}
        optionName={"Descrip"}
        optionValue={"Id"}
        dataType={"int"}
        value={owner}
        setValue={setOwner}
      />
      <SpaceHorizontal height={10} />
      <IsActiveInput
        isActive={isActive}
        setIsActive={setIsActive}
        idNumber={3030303}
      />
    </PopupForm>
  ) : (
    ""
  );
}

export default EditProcessNames;
