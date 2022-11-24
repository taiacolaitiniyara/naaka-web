import React, { useEffect, useState } from "react";
import { apiGet, apiPut } from "../../../../api-services/ApiCalls";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import {
  PopupForm,
  SpaceHorizontal,
} from "../../../../reusables/Elements";
import {

  NumberInput,
  SelectColor,
  SelectInput,
  TextInput,
} from "../../../../reusables/Inputs";

function EditHub({ trigger, details }) {
  const [hubs, setHubs] = useState([]);
  useEffect(() => {
    apiGet(apiRoutes.hubs + details.TenantId, setHubs);
  }, []);
  const [name, setName] = useState(details.Name);
  const [isParent, setIsParent] = useState(false);
  const [hubColor, setHubColor] = useState(details.HubColor);
  const [hubLevel, setHubLevel] = useState(details.HubLevel);
  const [parentHubId, setParentHubId] = useState(details.ParentHubId);

  function onSubmit() {
    function onSubmit() {
      console.log("Submit");
      apiPut(apiRoutes.hubUpdate, {
        Id: 0,
        TenantId: 0,
        Name: name,
        IsParent: true,
        Created: "2022-11-24T01:40:23.247Z",
        HubColor: hubColor,
        Fullname: name,
        IsActive: true,
        TextColor: "#fff",
        HubLevel: hubLevel,
        ParentHubId: parentHubId,
        OrderBy: parentHubId,
      });
    }
  }

  return (
    <PopupForm width={400} submitBtnText={"Save"} trigger={trigger}>
      <TextInput
        value={name}
        placeholder={"Name"}
        onChange={setName}
        required={true}
      />
      <SpaceHorizontal height={10} />
      <NumberInput
        required={true}
        onChange={setHubLevel}
        placeholder={"Hub Level"}
        value={hubLevel}
      />
      <SpaceHorizontal height={10} />
      <div style={{ display: hubLevel > 1 ? "block" : "none" }}>
        <SelectInput
          list={hubs}
          listName={"Hub Parent"}
          optionName={"Name"}
          optionValue={"Id"}
          setValue={setParentHubId}
          dataType={"int"}
          value={parentHubId}
        />

        <SpaceHorizontal height={10} />
      </div>
      <SelectColor set={setHubColor} value={hubColor} />
    </PopupForm>
  );
}

export default EditHub;
