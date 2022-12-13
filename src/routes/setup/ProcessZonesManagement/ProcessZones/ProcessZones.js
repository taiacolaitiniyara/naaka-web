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
  SelectColor,
  TextInput,
} from "../../../../reusables/Inputs";
import { apiPost, apiPut } from "../../../../api-services/ApiCalls";
import { refreshOnClose } from "../../../../reusables/Functions";

function ProcessZones({ refresh, setRefresh }) {
  const [addZone, showAddZone] = useState(false);
  const [editZone, showEditZone] = useState(false);
  const [details, setDetails] = useState({});
  return (
    <div>
      <AddButton onClick={() => showAddZone(true)} text={"Add Process Zone"} />
      <SpaceHorizontal height={10} />
      <DynamicTable
        injectedParameters={[refresh]}
        height={200}
        tableWidth={100}
        apiRoute={apiRoutes.processZones}
        columns={[
          { path: "Id", name: "ID" },
          { path: "Descrip", name: "Zone" },
          { path: "Color", color: "Color", name: "Color" },
          { path: "IsActive", name: "IsActive", status: Status },
          {
            path: "Edit",
            name: "Edit",
            edit: true,
            showEdit: () => showEditZone(true),
            setEditDetails: setDetails,
          },
        ]}
      />
      {addZone && (
        <AddProcessZone
          refresh={refresh}
          setRefresh={setRefresh}
          trigger={showAddZone}
        />
      )}
      {editZone && (
        <EditZone
          trigger={showEditZone}
          refresh={refresh}
          setRefresh={setRefresh}
          details={details}
        />
      )}
    </div>
  );
}

function AddProcessZone({ trigger, refresh, setRefresh }) {
  const [descrip, setDescrip] = useState();
  const [color, setColor] = useState();
  return trigger ? (
    <PopupForm
      onSubmit={() => {
        apiPost(
          apiRoutes.processZones,
          {
            Id: 0,
            TenantId: 1,
            Color: color,
            IsActive: true,
            Descrip: descrip,
          },
          () => refreshOnClose(setRefresh, refresh, trigger)
        );
      }}
      width={400}
      submitBtnText={"Save"}
      trigger={trigger}
      heading={"Add Process Zone"}
    >
      <TextInput onChange={setDescrip} placeholder={"Zone Name"} />
      <SpaceHorizontal height={10} />
      <SelectColor set={setColor} />
    </PopupForm>
  ) : (
    ""
  );
}

function EditZone({ details, trigger, refresh, setRefresh }) {
  const [descrip, setDescrip] = useState(details.Descrip);
  const [color, setColor] = useState(details.Color);
  const [isActive, setIsActive] = useState(details.IsActive);

  return trigger ? (
    <PopupForm
      onSubmit={() => {
        apiPut(
          apiRoutes.processZones,
          {
            Id: details.Id,
            TenantId: details.TenantId,
            Color: color,
            IsActive: isActive,
            Descrip: descrip,
          },
          () => refreshOnClose(setRefresh, refresh, trigger)
        );
        trigger(false);
      }}
      width={400}
      submitBtnText={"Save"}
      trigger={trigger}
      heading={"Edit " + details.Descrip}
    >
      <TextInput
        value={descrip}
        onChange={setDescrip}
        placeholder={"Zone Name"}
      />
      <SpaceHorizontal height={10} />
      <SelectColor value={color} set={setColor} />
      <SpaceHorizontal height={10} />
      <IsActiveInput
        isActive={isActive}
        idNumber={5432765}
        setIsActive={setIsActive}
      />
    </PopupForm>
  ) : (
    ""
  );
}

export default ProcessZones;
