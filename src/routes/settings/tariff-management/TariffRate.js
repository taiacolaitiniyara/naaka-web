import React, { useState } from "react";
import { DynamicTable } from "../../../reusables/Tables";
import { apiRoutes } from "../../../api-services/ApiRoutes";
import {
  PopupForm,
  SpaceHorizontal,
  Status,
} from "../../../reusables/Elements";
import { AddButton } from "../../../reusables/Buttons";
import {
  DateTimeInput,
  DecimalInput,
  NumberInput,
} from "../../../reusables/Inputs";
import { apiPost } from "../../../api-services/ApiCalls";
import { refreshOnClose } from "../../../reusables/Functions";

function TariffRate({ id }) {
  const [refresh, setRefresh] = useState(1);
  const [showAdd, setShowAdd] = useState(false);
  return (
    <div>
      <AddButton text={"Add Rate"} onClick={() => setShowAdd(true)} />
      <SpaceHorizontal height={10} />
      <DynamicTable
        height={180}
        injectedParameters={[refresh, id]}
        tableWidth={100}
        apiRoute={apiRoutes.tariffRate + id}
        columns={[
          { path: "IsActive", name: "IsActive", status: Status, sort: true },
          { path: "ImpRate", name: "Import Rate", sort: true },
          { path: "ExpRate", name: "Export Rate", sort: true },
          { path: "PrdRate", name: "Production Rate", sort: true },
          {
            path: "ActivateDate",
            name: "Activate Date",
            sort: true,
            date: true,
          },
          {
            path: "DeactivateDate",
            name: "Deactivate Date",
            sort: true,
            date: true,
          },
          { path: "AddedBy", name: "Added By", sort: true },
          { path: "ApprovedBy", name: "Approved By", sort: true },
        ]}
      />
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
