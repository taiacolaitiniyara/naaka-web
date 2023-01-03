import React, { useState } from "react";
import { DynamicTable } from "../../../reusables/Tables";
import { apiRoutes } from "../../../api-services/ApiRoutes";
import {
  PopupForm,
  SpaceHorizontal,
  Status,
} from "../../../reusables/Elements";
import { AddButton } from "../../../reusables/Buttons";
import { DateTimeInput, DecimalInput } from "../../../reusables/Inputs";
import { apiPost } from "../../../api-services/ApiCalls";
import { DateFormatter, refreshOnClose } from "../../../reusables/Functions";
import { useFetchApiList } from "../../../reusables/CustomHooks";

function TariffRate({ id }) {
  const [refresh, setRefresh] = useState(1);
  const [showAdd, setShowAdd] = useState(false);
  const rates = useFetchApiList(apiRoutes.tariffRate + id);
  return (
    <div>
      <AddButton text={"Add Rate"} onClick={() => setShowAdd(true)} />
      <SpaceHorizontal height={10} />
      <div style={{ height: "300px", overflowY: "scroll" }}>
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th rowSpan={2}>IsActive</th>
              <th colSpan={5}>IMPORT</th>
              <th colSpan={5}>EXPORT</th>
              <th colSpan={5}>PRODUCTION</th>
              <th rowSpan={2}>Activate Date</th>
              <th rowSpan={2}>Deactivate Date</th>
              <th rowSpan={2}>Added By</th>
              <th rowSpan={2}>Approved By</th>
            </tr>
            <tr>
              <th>Bill Type</th>
              <th>Tier</th>
              <th>Name</th>
              <th>{"Limit (kW)"}</th>
              <th>{"Rate ($)"}</th>
              <th>Bill Type</th>
              <th>Tier</th>
              <th>Name</th>
              <th>{"Limit (kW)"}</th>
              <th>{"Rate ($)"}</th>
              <th>Bill Type</th>
              <th>Tier</th>
              <th>Name</th>
              <th>{"Limit (kW)"}</th>
              <th>{"Rate ($)"}</th>
            </tr>
          </thead>
          <tbody>
            {rates.map((r, i) => (
              <tr key={i}>
                <td>{Status(r.IsActive)}</td>
                <td>{r.ImpBillType}</td>
                <td>{r.ImpTier}</td>
                <td>{r.ImpName}</td>
                <td>{r.ImpLimit}</td>
                <td>{r.ImpRate}</td>
                <td>{r.ExpBillType}</td>
                <td>{r.ExpTier}</td>
                <td>{r.ExpName}</td>
                <td>{r.ExpLimit}</td>
                <td>{r.ExpRate}</td>
                <td>{r.PrdBillType}</td>
                <td>{r.PrdTier}</td>
                <td>{r.PrdName}</td>
                <td>{r.PrdLimit}</td>
                <td>{r.PrdRate}</td>
                <td>{DateFormatter(r.ActivateDate)}</td>
                <td>{DateFormatter(r.DeactivateDate)}</td>
                <td>{r.AddedBy}</td>
                <td>{r.ApprovedBy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SpaceHorizontal height={10} />
      {showAdd && (
        <AddTariffRate
          trigger={setShowAdd}
          fkId={id}
          refresh={refresh}
          setRefresh={setRefresh}
        />
      )}
    </div>
  );
}

function AddTariffRate({ fkId, trigger, refresh, setRefresh }) {
  const [expRate, setExpRate] = useState();
  const [impRate, setImpRate] = useState();
  const [prdRate, setPrdRate] = useState();
  const [activateDate, setActivateDate] = useState();
  return (
    <PopupForm
      width={400}
      trigger={trigger}
      submitBtnText={"Save"}
      heading={"Add Rate"}
      onSubmit={() => {
        apiPost(
          apiRoutes.addTariffRate,
          {
            Status: true,
            UserName: "string",
            Id: 0,
            TenantId: 0,
            ImpRate: impRate,
            ExpRate: expRate,
            PrdRate: prdRate,
            FkId: fkId,
            IsActive: true,
            AddedAt: "2022-12-11T08:51:55.727Z",
            ActivateDate: activateDate,
            DeactivateDate: "2022-12-11T08:51:55.727Z",
            AddedBy: "string",
          },
          () => refreshOnClose(setRefresh, refresh, trigger)
        );
      }}
    >
      <DecimalInput placeholder={"Import Rate"} onChange={setImpRate} />
      <SpaceHorizontal height={10} />
      <DecimalInput placeholder={"Export Rate"} onChange={setExpRate} />
      <SpaceHorizontal height={10} />
      <DecimalInput placeholder={"Production Rate"} onChange={setPrdRate} />
      <SpaceHorizontal height={10} />
      <DateTimeInput onChange={setActivateDate} />
    </PopupForm>
  );
}

export default TariffRate;
