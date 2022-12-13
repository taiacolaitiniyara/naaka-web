import React, { useState } from "react";
import { apiPost } from "../../../api-services/ApiCalls";
import { apiRoutes } from "../../../api-services/ApiRoutes";
import { useFetchApiList } from "../../../reusables/CustomHooks";
import { PopupForm, SpaceHorizontal } from "../../../reusables/Elements";
import { refreshOnClose } from "../../../reusables/Functions";
import {
  NumberInput,
  SelectColor,
  SelectInput,
  TextInput,
} from "../../../reusables/Inputs";

function AddHub({ tenantId, refresh, setRefresh, trigger }) {
  const hubs = useFetchApiList(apiRoutes.hubs + tenantId);
  const [hubName, setHubName] = useState();
  const [hubLevel, setHubLevel] = useState();
  const [parentHubId, setParentHubId] = useState();
  const [hubColor, setHubColor] = useState();
  return (
    <PopupForm
      width={400}
      submitBtnText={"Save"}
      trigger={trigger}
      heading={"Add Hub Tenant = " + tenantId}
      onSubmit={() => {
        apiPost(
          apiRoutes.hubs,
          {
            Id: 0,
            TenantId: 0,
            Name: hubName,
            IsParent: true,
            Created: "2022-12-12T01:26:14.446Z",
            HubColor: hubColor,
            Fullname: hubName,
            IsActive: true,
            TextColor: "#000000",
            HubLevel: hubLevel,
            ParentHubId: parentHubId ? parentHubId : 0,
            OrderBy: 0,
          },
          refreshOnClose(setRefresh, refresh, trigger)
        );
      }}
    >
      <TextInput onChange={setHubName} placeholder={"Hub Name"} />
      <SpaceHorizontal height={10} />
      <NumberInput
        placeholder={"Hub Level"}
        minValue={1}
        onChange={setHubLevel}
      />
      <SpaceHorizontal height={10} />
      <div style={{ display: hubLevel > 1 ? "block" : "none" }}>
        <SelectInput
          list={hubs}
          listName={"Parent Hub"}
          optionName={"Name"}
          optionValue={"Id"}
          dataType={"int"}
          setValue={setParentHubId}
        />
      </div>
      <SpaceHorizontal height={10} />
      <SelectColor set={setHubColor} />
    </PopupForm>
  );
}

export default AddHub;
