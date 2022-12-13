import React from "react";
import { useState } from "react";
import { apiPut } from "../../../api-services/ApiCalls";
import { apiRoutes } from "../../../api-services/ApiRoutes";
import { useFetchApiList } from "../../../reusables/CustomHooks";
import { PopupForm, SpaceHorizontal } from "../../../reusables/Elements";
import { refreshOnClose } from "../../../reusables/Functions";
import {
  IsActiveInput,
  NumberInput,
  SelectColor,
  SelectInput,
  TextInput,
} from "../../../reusables/Inputs";

function EditHub({ trigger, details, refresh, setRefresh }) {
  const hubs = useFetchApiList(apiRoutes.hubs + details.TenantId);
  const [hubName, setHubName] = useState(details.Name);
  const [hubLevel, setHubLevel] = useState(details.HubLevel);
  const [parentHubId, setParentHubId] = useState(details.ParentHubId);
  const [hubColor, setHubColor] = useState(details.HubColor);
  const [isActive, setIsActive] = useState();

  return (
    <PopupForm
      onSubmit={() => {
        apiPut(
          apiRoutes.hubUpdate,
          {
            Id: details.Id,
            TenantId: details.TenantId,
            Name: hubName,
            IsParent: details.IsParent,
            Created: details.Created,
            HubColor: hubColor,
            Fullname: hubName,
            IsActive: details.IsActive,
            TextColor: details.TextColor,
            HubLevel: hubLevel,
            ParentHubId: parentHubId ? parentHubId : 0,
            OrderBy: details.OrderBy,
          },
          refreshOnClose(setRefresh, refresh, trigger)
        );
      }}
      trigger={trigger}
      heading={"Edit " + details.Name}
      submitBtnText={"Save"}
      width={400}
    >
      <TextInput
        value={hubName}
        onChange={setHubName}
        placeholder={"Hub Name"}
      />
      <SpaceHorizontal height={10} />
      <NumberInput
        value={hubLevel}
        placeholder={"Hub Level"}
        minValue={1}
        onChange={setHubLevel}
      />
      <SpaceHorizontal height={10} />
      <div style={{ display: hubLevel > 1 ? "block" : "none" }}>
        <SelectInput
          value={parentHubId}
          list={hubs}
          listName={"Parent Hub"}
          optionName={"Name"}
          optionValue={"Id"}
          dataType={"int"}
          setValue={setParentHubId}
        />
      </div>
      <SpaceHorizontal height={10} />
      <SelectColor value={hubColor} set={setHubColor} />
      <SpaceHorizontal height={10} />
      <IsActiveInput setIsActive={setIsActive} isActive={isActive} />
    </PopupForm>
  );
}

export default EditHub;
