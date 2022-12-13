import React, { useState } from "react";
import {
  PopupForm,
  SpaceHorizontal,
  Status,
} from "../../../../reusables/Elements";
import { DynamicTable } from "../../../../reusables/Tables";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { AddButton } from "../../../../reusables/Buttons";
import {
  IsActiveInput,
  SelectInput,
  SelectMultipleInput,
} from "../../../../reusables/Inputs";
import { apiPost, apiPut } from "../../../../api-services/ApiCalls";
import {
  useFetchApiList,
  useShadeTabs,
} from "../../../../reusables/CustomHooks";
import { refreshOnClose } from "../../../../reusables/Functions";

function ProcessZonesMatrix({ refresh, setRefresh }) {
  useShadeTabs("setup-tab");
  const [addZoneMatrix, showAddZoneMatrix] = useState(false);
  const [editZoneMatrix, showEditZoneMatrix] = useState(false);
  const [details, setDetails] = useState({});
  
  return (
    <div>
      <AddButton
        text={"Add Matrix"}
        onClick={() => showAddZoneMatrix(!addZoneMatrix)}
      />
      <SpaceHorizontal height={10} />
      <DynamicTable
        apiRoute={apiRoutes.processZoneMatrix}
        columns={[
          { path: "Id", name: "ID" },
          { path: "ProcessName", name: "Process Name" },
          { path: "ProcessZone", name: "Process Zone" },
          { path: "IsActive", name: "IsActive", status: Status },
          {
            path: "Edit",
            name: "Edit",
            edit: true,
            showEdit: () => showEditZoneMatrix(true),
            setEditDetails: setDetails,
          },
        ]}
        tableWidth={100}
        height={200}
        injectedParameters={[refresh]}
      />

      {addZoneMatrix && (
        <AddZoneMatrix
          refresh={refresh}
          setRefresh={setRefresh}
          trigger={showAddZoneMatrix}
        />
      )}
      {editZoneMatrix && (
        <EditZoneMatrix
          trigger={showEditZoneMatrix}
          refresh={refresh}
          setRefresh={setRefresh}
          details={details}
        />
      )}
    </div>
  );
}

function AddZoneMatrix({ trigger, refresh, setRefresh }) {
  const processNames = useFetchApiList(apiRoutes.processNames);
  const processZones = useFetchApiList(apiRoutes.processZones);

  const [processNameId, setProcessNameId] = useState();
  const [processZoneId, setProcessZoneId] = useState();
  const [idList, setIdList] = useState([]);

  console.log("Final List", idList, refresh);

  return trigger ? (
    <PopupForm
      submitBtnText={"Save"}
      width={400}
      trigger={trigger}
      heading={"Add Zone Matrix"}
      onSubmit={() => {
        apiPost(
          apiRoutes.processZoneMatrix,
          {
            ProcessZoneIds: idList,
            ProcessNameId: processNameId,
            Id: 0,
            TenantId: 0,
            IsActive: true,
            ProcessZoneId: processZoneId,
          },
          () => refreshOnClose(setRefresh, refresh, trigger)
        );
      }}
    >
      <SelectInput
        list={processNames}
        listName={"Process Name"}
        optionName={"Descrip"}
        optionValue={"Id"}
        setValue={setProcessNameId}
        dataType={"int"}
      />
      <SpaceHorizontal height={10} />
      <SelectMultipleInput
        list={processZones}
        listName={"Process Zone"}
        optionName={"Descrip"}
        setValue={setProcessZoneId}
        dataType={"int"}
        optionValue={"Id"}
        setNewList={setIdList}
        newList={idList}
      />
    </PopupForm>
  ) : (
    ""
  );
}

function EditZoneMatrix({ trigger, details, setRefresh, refresh }) {
  const [isActive, setIsActive] = useState(details.IsActive);
  return trigger ? (
    <PopupForm
      width={400}
      submitBtnText={"Save"}
      trigger={trigger}
      heading={"Edit Matrix ID = " + details.Id}
      onSubmit={() => {
        apiPut(
          apiRoutes.processZoneMatrix,
          {
            ProcessZoneIds: [0],
            ProcessNameId: 0,
            Id: details.Id,
            TenantId: 0,
            IsActive: isActive,
            ProcessZoneId: 0,
          },
          () => refreshOnClose(setRefresh, refresh, trigger)
        );
      }}
    >
      <IsActiveInput setIsActive={setIsActive} isActive={isActive} />
    </PopupForm>
  ) : (
    ""
  );
}

export default ProcessZonesMatrix;
