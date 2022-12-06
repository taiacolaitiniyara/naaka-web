import React, { useState } from "react";
import { apiPost, apiPut } from "../../../api-services/ApiCalls";
import { apiRoutes } from "../../../api-services/ApiRoutes";
import { AddButton, CancelButton } from "../../../reusables/Buttons";
import {
  SpaceHorizontal,
  SpaceVertical,
  Status,
} from "../../../reusables/Elements";
import { SelectColor, TextInput } from "../../../reusables/Inputs";
import { DynamicTable } from "../../../reusables/Tables";

function AddNew({ title, trigger, type, refresh }) {
  const [description, setDescription] = useState();
  const [itemDescription, setItemDescription] = useState();
  const [color, setColor] = useState();

  const add = () => {
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
        Color: color,
        DecVal: 0,
        ResponseTime: 0,
      },
      () => refresh + 1
    );
  };

  return trigger ? (
    <div>
      <div
        style={{
          width: "fit-content",
          padding: "15px",
          boxShadow: "0 0 5px rgba(0, 0, 0, 0.25)",
          borderRadius: "10px",
        }}
      >
        <form style={{ display: "flex", alignItems: "center" }}>
          <TextInput placeholder={title} onChange={setDescription} />
          <SpaceVertical width={30} />
          <TextInput
            placeholder={"Description"}
            onChange={setItemDescription}
          />
          <SpaceVertical width={30} />
          <SelectColor set={setColor} />
        </form>
        <SpaceHorizontal height={10} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <AddButton text={"Add"} onClick={add} />
        </div>
      </div>
      <SpaceHorizontal height={10} />
    </div>
  ) : (
    ""
  );
}

function Edit({ trigger, details }) {
  const [description, setDescription] = useState(details.Description);
  const [itemDescription, setItemDescription] = useState(
    details.ItemDescription
  );
  const [color, setColor] = useState(details.Color);

  console.log("Details", details);
  const edit = () => {
    apiPut(apiRoutes.updateLookup, {
      ResponseTimeDto: "string",
      Id: details.Id,
      TenantId: 0,
      Description: description,
      Type: details.Type,
      Mandatory: 0,
      IsActive: true,
      OrderBy: 0,
      ItemDescription: itemDescription,
      Color: color,
      DecVal: 0,
      ResponseTime: 0,
    });
  };

  return (
    <div>
      <div
        style={{
          width: "fit-content",
          padding: "15px",
          boxShadow: "0 0 5px rgba(0, 0, 0, 0.25)",
          borderRadius: "10px",
        }}
      >
        {" "}
        <form style={{ display: "flex", alignItems: "center" }}>
          <TextInput
            value={description}
            placeholder={"Name"}
            onChange={setDescription}
          />
          <SpaceVertical width={30} />
          <TextInput
            value={itemDescription}
            placeholder={"Description"}
            onChange={setItemDescription}
          />
          <SpaceVertical width={30} />
          <SelectColor value={color} set={setColor} />
        </form>
        <SpaceHorizontal height={10} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <CancelButton width={75} onClick={() => trigger(false)} />
          <SpaceVertical width={5} />
          <AddButton text={"Update"} width={75} onClick={edit} />
        </div>
      </div>
      <SpaceHorizontal height={10} />
    </div>
  );
}

function ManagedListTable({ title, type }) {
  const [add, showAdd] = useState(false);
  const [edit, showEdit] = useState(false);
  const [details, setDetails] = useState({});
  var refresh = 1;
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
        <AddNew refresh={refresh} title={title} trigger={showAdd} type={type} />
      )}
      {edit && <Edit trigger={showEdit} details={details} />}
      <DynamicTable
        injectedParameters={[refresh]}
        tableWidth={100}
        rowHover
        seletableRow
        height={200}
        columns={[
          { path: "Description", name: title },
          { path: "ItemDescription", name: "Desccription" },
          { path: "Color", color: "Color", name: "Color" },
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
