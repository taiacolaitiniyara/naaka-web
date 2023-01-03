import React from "react";
import { NumberInput, TripleInputs } from "../../../reusables/Inputs";

function Multiplier({ setCtRatio, setMtrRatio, ctRatio, mtrRatio, mtrType }) {
  return (
    <div
      style={{
        display: mtrType === 0 ? "none" : "block",
      }}
    >
      <TripleInputs
        label1={"Mtr Ratio"}
        label2={"CT Ratio"}
        label3={"Mtr Multiplier"}
        input1={
          <NumberInput onChange={setMtrRatio} placeholder={"Mtr Ratio"} />
        }
        input2={<NumberInput onChange={setCtRatio} placeholder={"CT Ratio"} />}
        width1={30}
        width2={30}
        input3={
          <div
            style={{
              padding: "5px",
              backgroundColor: "#555",
              color: "#fff",
              width: "30px",
              fontWeight: "700",
            }}
          >
            {ctRatio * mtrRatio}
          </div>
        }
      />
    </div>
  );
}

export default Multiplier;
