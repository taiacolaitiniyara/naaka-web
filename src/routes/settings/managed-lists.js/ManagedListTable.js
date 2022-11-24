import React, { useState } from "react";
import { apiGet } from "../../../api-services/ApiCalls";
import { apiRoutes } from "../../../api-services/ApiRoutes";
import { AddButton } from "../../../reusables/Buttons";
import {
  SpaceHorizontal,
  SpaceVertical,
  Status,
} from "../../../reusables/Elements";
import { SelectColor, TextInput } from "../../../reusables/Inputs";
import { DynamicTable } from "../../../reusables/Tables";

function AddNew({ title, trigger, type }) {
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
          <TextInput placeholder={title} />
          <SpaceVertical width={10} />
          <TextInput placeholder={"Description"} />
          <SpaceVertical width={10} />
          <SelectColor />
        </form>
        <SpaceHorizontal height={10} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <AddButton text={"Add"} />
        </div>
      </div>
      <SpaceHorizontal height={10} />
    </div>
  ) : (
    ""
  );
}

function ManagedListTable({ title, id }) {
  const [add, showAdd] = useState(false);
  return (
    <div>
      <AddButton
        text={add === false ? `Add ${title}` : `Cancel`}
        onClick={() => showAdd(!add)}
        style={{
          backgroundColor: add === true ? "#ff0000" : "#196d91",
          color: "#fff",
        }}
      />
      <SpaceHorizontal height={10} />
      {add && <AddNew title={title} trigger={showAdd} />}
      <DynamicTable
        edit={true}
        rowHover={true}
        tableWidth={100}
        height={200}
        columns={[
          { path: "Description", name: title },
          { path: "ItemDescription", name: "Desccription" },
          { path: "Color", color: "Color", name: "Color" },
          { path: "IsActive", name: "IsActive", status: Status },
        ]}
        apiRoute={apiRoutes.getLookUps + id}
      />
      <SpaceHorizontal height={10} />
    </div>
  );
}

export default ManagedListTable;
