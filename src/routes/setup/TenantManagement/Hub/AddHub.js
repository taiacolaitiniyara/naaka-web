import React, { useEffect, useState } from "react";
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
import { apiGet, apiPost } from "../../../../api-services/ApiCalls";
import { apiRoutes } from "../../../../api-services/ApiRoutes";

function AddHub({ trigger, tenantId }) {
  const [hubs, setHubs] = useState([]);
  useEffect(() => {
    apiGet(apiRoutes.hubs + tenantId, setHubs);
  }, []);
  const [name, setName] = useState();
  const [isParent, setIsParent] = useState(false);
  const [hubColor, setHubColor] = useState();
  const [hubLevel, setHubLevel] = useState();
  const [parentHubId, setParentHubId] = useState();

  function onSubmit() {
    console.log("Submit");
    apiPost(apiRoutes.hubs, {
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
  return (
    <PopupForm
      width={400}
      trigger={trigger}
      heading={"Add Hub to Hub"}
      onSubmit={onSubmit}
      submitBtnText={"Save"}
    >
      <TextInput placeholder={"Name"} onChange={setName} required={true} />
      <SpaceHorizontal height={10} />
      <NumberInput
        required={true}
        onChange={setHubLevel}
        placeholder={"Hub Level"}
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
        />

        <SpaceHorizontal height={10} />
      </div>
      <SelectColor set={setHubColor} />
    </PopupForm>
  );
}

export default AddHub;
