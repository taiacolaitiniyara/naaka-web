import React, { useEffect, useState } from "react";
import {
  PopupForm,
  SpaceHorizontal,
  SpaceVertical,
} from "../../../../reusables/Elements";
import { TextInput } from "../../../../reusables/Inputs";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { AuthToken } from "../../../../reusables/Constants";

function EditRole({ trigger, hubId, details }) {
  const [roleName, setName] = useState(details.Name);
  const [isHubAdmin, setIsHubAdmin] = useState(details.IsHubAdmin);
  const [associatedHubId, setAssociatedHubId] = useState();

  function onSubmit() {
    fetch(
      `${apiRoutes.baseUrl}/api/v1/UsersAndRoles/updateRoleForHub?RoleId=${details.Id}&RoleName=${roleName}&HubId=${details.HubId}&AssociatedHubId=${hubId}&IsHubAdmin=${isHubAdmin}`,
      {
        method: "PUT",
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
          Authorization: AuthToken,
        },
      }
    )
      .then((r) => r.json())
      .then((r) => console.log(r))
      .catch((e) => console.log(e));
  }

  return (
    <PopupForm
      width={400}
      trigger={trigger}
      heading={"Add Role to Hub ID = " + hubId}
      onSubmit={onSubmit}
      submitBtnText={"Save"}
    >
      <TextInput value={roleName} placeholder={"Name"} onChange={setName} required={true} />
      <SpaceHorizontal height={10} />
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          id="isHubAdmin"
          type={"checkbox"}
          style={{ width: "fit-content" }}
          onChange={(v) => {
            if (v.target.checked === true) {
              setIsHubAdmin(true);
            } else {
              setIsHubAdmin(false);
            }
          }}
          defaultChecked={isHubAdmin}
        />
        <SpaceVertical width={10} />
        <label htmlFor={"isHubAdmin"}>Is Hub Admin</label>
      </div>
    </PopupForm>
  );
}

export default EditRole;
