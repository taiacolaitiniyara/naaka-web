import React, { useEffect, useState } from "react";
import { filterDataWithParams } from "../../../reusables/CustomHooks";
import { SpaceHorizontal } from "../../../reusables/Elements";
import { MultiSelectTable } from "../../../reusables/Tables";
import ConnDetails from "./ConnDetails";
import Multiplier from "./Multiplier";

function ProdSide({
  spareMtrs,
  mtrList,
  setMetersList,
  mtrPhases,
  connPhases,
  mtrTypes,
}) {
  const [gridMtrsList, setGridMtrsList] = useState([]);
  const [connPhase, setConnPhase] = useState();
  const [mtrPhase, setMtrPhase] = useState(0);
  const [mtrType, setMtrType] = useState(0);
  const [ctRatio, setCtRatio] = useState(0);
  const [mtrRatio, setMtrRatio] = useState(0);

  useEffect(() => {
    gridMtrsList.map((m) => {
      m.ConnPhaseId = connPhase;
      m.ConnPositionId = 74;
      m.ConnPwrSourceId = 70;
      m.CtRatio = ctRatio;
      m.MtrRatio = mtrRatio;
      setMetersList([...mtrList, m]);
    });
  }, [gridMtrsList]);

  return (
    <div>
      <h3>Grid Side Details</h3>
      <SpaceHorizontal height={10} />
      <ConnDetails
        mtrPhases={mtrPhases}
        connPhases={connPhases}
        setConnPhase={setConnPhase}
        setMtrPhase={setMtrPhase}
        connPhase={connPhase}
        mtrTypes={mtrTypes}
        setMtrType={setMtrType}
        mtrPhase={mtrPhase}
      />
      <SpaceHorizontal height={10} />
      <Multiplier
        setCtRatio={setCtRatio}
        setMtrRatio={setMtrRatio}
        ctRatio={ctRatio}
        mtrRatio={mtrRatio}
        mtrType={mtrType}
      />
      <SpaceHorizontal height={10} />
      <div style={{ display: ctRatio === 0 ? "none" : "block" }}>
        Available Meters:
        <MultiSelectTable
          //setDataList={setSpareMetersList}
          spliceIndex={"Id"}
          newList={gridMtrsList}
          setNewList={setGridMtrsList}
          dataList={filterDataWithParams(
            filterDataWithParams(spareMtrs, mtrType, "MtrTypeId"),
            parseInt(mtrPhase),
            "MtrPhaseId"
          )}
          columns={[
            { path: "MtrNum", name: "Mtr Num" },
            { path: "MtrType", name: "Type", color: "MtrTypeColor" },
            { path: "MtrPhase", name: "Phase", color: "MtrPhaseColor" },
            { path: "MtrStatus", name: "Status", color: "MtrStatusColor" },
          ]}
          height={150}
          tableWidth={100}
        />
      </div>

      <div style={{ display: gridMtrsList.length === 0 ? "none" : "block" }}>
        <SpaceHorizontal height={10} />
        Selected Meters:
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Mtr Num</th>
              <th>Type</th>
              <th>Phase</th>
            </tr>
          </thead>
          <tbody>
            {gridMtrsList.map((m, i) => (
              <tr key={i}>
                <td>{m.MtrNum}</td>
                <td>
                  <i
                    className="fa-solid fa-square"
                    style={{ color: m.MtrTypeColor, marginRight: "5px" }}
                  />
                  {m.MtrType}
                </td>
                <td>
                  <i
                    className="fa-solid fa-square"
                    style={{ color: m.MtrPhaseColor, marginRight: "5px" }}
                  />
                  {m.MtrPhase}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProdSide;
