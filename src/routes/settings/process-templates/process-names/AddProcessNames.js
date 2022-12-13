import React, { useState } from "react";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { useFetchApiList } from "../../../../reusables/CustomHooks";
import { PopupForm, SpaceHorizontal } from "../../../../reusables/Elements";
import { addToApi } from "../../../../reusables/Functions";
import {
  DoubleInputs,
  NumberInput,
  SelectColor,
  SelectInput,
  TextInput,
} from "../../../../reusables/Inputs";

function AddProcessNames({ trigger, typeId, refresh, setRefresh }) {
  const units = useFetchApiList(apiRoutes.processTimeunits);
  const owners = useFetchApiList(apiRoutes.processWorkers);
  const [descrip, setDescrip] = useState();
  const [color, setColor] = useState();
  const [periodUnitId, setPeriodUnitId] = useState();
  const [targetPeriod, setTargetPeriod] = useState();
  const [targetPercent, setTargetPercent] = useState();
  const [owner, setOwner] = useState();

  return trigger ? (
    <PopupForm
      trigger={trigger}
      onSubmit={() => {
        addToApi(
          apiRoutes.processNames,
          {
            Id: 0,
            TenantId: 0,
            Color: color,
            IsActive: true,
            Descrip: descrip,
            ProcessTypeId: typeId,
            TargetPercent: targetPercent,
            TargetPeriod: targetPeriod,
            TargetPeriodUnitId: periodUnitId,
            SlaOwner: owner,
          },
          () => {
            setRefresh(refresh + refresh);
            trigger(false);
          }
        );
      }}
      width={500}
      submitBtnText={"Save"}
      heading={"Add Process Name to Selected ProcessType = " + typeId}
    >
      <TextInput
        required={true}
        placeholder={"Process Name"}
        onChange={setDescrip}
      />
      <SpaceHorizontal height={10} />
      <SelectColor set={setColor} />
      <SpaceHorizontal height={10} />
      <DoubleInputs
        input1={
          <NumberInput
            onChange={setTargetPeriod}
            placeholder={"Target Period"}
            required={true}
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
          />
        }
        width1={50}
        width2={50}
      />
      <SpaceHorizontal height={10} />
      <NumberInput
        placeholder={"Target Percentage (%)"}
        onChange={setTargetPercent}
      />
      <SpaceHorizontal height={10} />
      <select
        onChange={(v) => {
          setOwner(parseInt(v.target.value));
        }}
      >
        <option>Select Owner</option>
        {owners.map((o, i) => (
          <option key={i} value={o.Id}>
            {`${o.Descrip} [ ${o.Role} ]`}
          </option>
        ))}
      </select>
    </PopupForm>
  ) : (
    ""
  );
}

export default AddProcessNames;
