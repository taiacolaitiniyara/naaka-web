import React, { useState } from "react";
import { apiPost, apiPut } from "../../../api-services/ApiCalls";
import { apiRoutes } from "../../../api-services/ApiRoutes";
import { AddButton, CancelButton } from "../../../reusables/Buttons";
import {
  PopupForm,
  SpaceHorizontal,
  SpaceVertical,
  Status,
} from "../../../reusables/Elements";
import { refreshOnClose } from "../../../reusables/Functions";
import {
  ColorPickerInput,
  SelectColor,
  TextInput,
} from "../../../reusables/Inputs";
import { DynamicTable } from "../../../reusables/Tables";

function AddNew({ title, trigger, type, refresh, setRefresh }) {
  const [description, setDescription] = useState();
  const [itemDescription, setItemDescription] = useState(
    type === 12 ? "#00bb59" : null
  );
  const [color, setColor] = useState();

  return (
    <PopupForm
      submitBtnText={"Save"}
      trigger={trigger}
      width={400}
      heading={`Add ${title}`}
      onSubmit={() => {
        apiPost(
          apiRoutes.addLookup,
          {
            ResponseTimeDto: "string",
            Id: 0,
            TenantId: 0,
            Description: description,
            Type: type,
            Mandatory: 0,
            IsActive: true,
            OrderBy: 0,
            ItemDescription: itemDescription,
            Color: type === 12 ? itemDescription : color,
            DecVal: 0,
            ResponseTime: 0,
          },
          () => refreshOnClose(setRefresh, refresh, trigger)
        );
      }}
    >
      <TextInput placeholder={title} onChange={setDescription} />
      <div style={{ display: type !== 12 ? "none" : "block" }}>
        <SpaceHorizontal height={10} />
        <ColorPickerInput onChange={setItemDescription} />
      </div>
      <SpaceHorizontal height={10} />
      <TextInput
        value={itemDescription}
        placeholder={"Description"}
        onChange={setItemDescription}
      />
      <SpaceHorizontal height={10} />
      <div style={{ display: type === 12 ? "none" : "block" }}>
        <SelectColor set={setColor} value={color} />
      </div>
    </PopupForm>
  );
}

function Edit({ trigger, details, refresh, setRefresh }) {
  const [description, setDescription] = useState(details.Description);
  const [itemDescription, setItemDescription] = useState(
    details.ItemDescription
  );
  const [color, setColor] = useState(details.Color);

  return (
    <PopupForm
      heading={`Edit ${details.Description}`}
      trigger={trigger}
      submitBtnText={"Save"}
      width={400}
      onSubmit={() => {
        apiPut(
          apiRoutes.updateLookup,
          {
            ResponseTimeDto: "string",
            Id: details.Id,
            TenantId: 0,
            Description: description,
            Type: details.Type,
            Mandatory: 0,
            IsActive: true,
            OrderBy: 0,
            ItemDescription: itemDescription,
            Color: details.Type === 12 ? itemDescription : color,
            DecVal: 0,
            ResponseTime: 0,
          },
          () => refreshOnClose(setRefresh, refresh, trigger)
        );
      }}
    >
      <TextInput
        value={description}
        placeholder={"Name"}
        onChange={setDescription}
      />
      <div style={{ display: details.Type !== 12 ? "none" : "block" }}>
        <SpaceHorizontal height={10} />
        <ColorPickerInput
          value={details.ItemDescription}
          onChange={setItemDescription}
        />
      </div>
      <SpaceHorizontal height={10} />
      <TextInput
        value={itemDescription}
        placeholder={"Description"}
        onChange={setItemDescription}
      />
      <SpaceHorizontal height={10} />
      <div style={{ display: details.Type === 12 ? "none" : "block" }}>
        <SelectColor set={setColor} value={color} />
      </div>
    </PopupForm>
  );
}

function ManagedListTable({ title, type }) {
  const [add, showAdd] = useState(false);
  const [edit, showEdit] = useState(false);
  const [details, setDetails] = useState({});
  const [refresh, setRefresh] = useState(1);
  //console.log("Refresh", refresh);
  return (
    <div>
      <AddButton
        text={add === false ? `Add ${title}` : `Cancel`}
        onClick={() => showAdd(!add)}
        style={{
          backgroundColor: add === true ? "#ff0000" : "#196d91",
          color: "#fff",
          display: edit === true ? "none" : "block",
        }}
      />
      <SpaceHorizontal height={10} />
      {add && (
        <AddNew
          setRefresh={setRefresh}
          refresh={refresh}
          title={title}
          trigger={showAdd}
          type={type}
        />
      )}
      {edit && (
        <Edit
          refresh={refresh}
          setRefresh={setRefresh}
          trigger={showEdit}
          details={details}
        />
      )}
      <DynamicTable
        injectedParameters={[refresh]}
        tableWidth={100}
        rowHover
        seletableRow
        height={200}
        columns={[
          { path: "Description", name: title, sort: true },
          { path: "ItemDescription", name: "Desccription", sort: true },
          { path: "Color", color: "Color", name: "Color", sort: true },
          { path: "IsActive", name: "IsActive", status: Status },
          {
            path: "",
            name: "Edit",
            edit: true,
            showEdit: () => showEdit(!edit),
            setEditDetails: setDetails,
          },
        ]}
        apiRoute={apiRoutes.getLookUps + type}
      />
      <SpaceHorizontal height={10} />
    </div>
  );
}

export default ManagedListTable;
