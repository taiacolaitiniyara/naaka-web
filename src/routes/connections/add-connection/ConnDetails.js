import React from "react";
import { SpaceHorizontal } from "../../../reusables/Elements";
import {
  DoubleInputs,
  NumberInput,
  SelectInput,
  TripleInputs,
} from "../../../reusables/Inputs";

function ConnDetails({
  setConnPhase,
  setMtrPhase,
  connPhases,
  mtrPhases,
  connPhase,
  mtrTypes,
  setMtrType,
  mtrPhase,
}) {
  return (
    <div>
      <DoubleInputs
        input1={
          <SelectInput
            list={connPhases}
            listName={"Conn Phase"}
            optionName={"ItemDescription"}
            optionValue={"Description"}
            dataType={"int"}
            setValue={setConnPhase}
          />
        }
        input2={
          <div style={{ display: connPhase === undefined ? "none" : "block" }}>
            <SelectInput
              list={mtrPhases}
              listName={"Meter Phase"}
              optionName={"ItemDescription"}
              optionValue={"Id"}
              dataType={"int"}
              setValue={setMtrPhase}
            />
          </div>
        }
        width1={50}
        width2={50}
      />
      <SpaceHorizontal height={10} />
      <div style={{ display: mtrPhase === 0 ? "none" : "block" }}>
        <SelectInput
          list={mtrTypes}
          listName={"Meter Type"}
          optionName={"Description"}
          optionValue={"Id"}
          dataType={"int"}
          setValue={setMtrType}
        />
      </div>
      <SpaceHorizontal height={10} />
    </div>
  );
}

export default ConnDetails;
