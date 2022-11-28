import React, { useEffect, useState } from "react";
import {
  PopupForm,
  SpaceHorizontal,
  SpaceVertical,
} from "../../../../reusables/Elements";
import {
  NumberInput,
  SelectColor,
  SelectInput,
  TextInput,
} from "../../../../reusables/Inputs";
import { apiGet, apiPost } from "../../../../api-services/ApiCalls";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { AuthToken } from "../../../../reusables/Constants";

function AddRole({ trigger, hubId }) {
  const [roleName, setName] = useState();
  const [isHubAdmin, setIsHubAdmin] = useState(false);
  const [associatedHubId, setAssociatedHubId] = useState();

  function onSubmit() {
    fetch(
      `${apiRoutes.baseUrl}/api/v1/UsersAndRoles/createRoleForHub?Name=${roleName}&HubId=${hubId}&IsHubAdmin=${isHubAdmin}&AssociatedHubId=${hubId}`,
      {
        method: "POST",
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
      <TextInput placeholder={"Name"} onChange={setName} required={true} />
      <SpaceHorizontal height={10} />
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          id="isHubAdmin"
          type={"checkbox"}
          style={{ width: "fit-content" }}
          onChange={(v) => {
            v.target.checked === true
              ? setIsHubAdmin(true)
              : setIsHubAdmin(false);
          }}
        />
        <SpaceVertical width={10} />
        <label htmlFor={"isHubAdmin"}>Is Hub Admin</label>
      </div>
    </PopupForm>
  );
}

export default AddRole;
