import React, { useState } from "react";
import { apiPost } from "../../../api-services/ApiCalls";
import { apiRoutes } from "../../../api-services/ApiRoutes";
import { PopupForm, SpaceHorizontal } from "../../../reusables/Elements";
import { refreshOnClose } from "../../../reusables/Functions";
import { TextInput } from "../../../reusables/Inputs";

function AddTariffType({ trigger, refresh, setRefresh }) {
  const [tariffType, setTariffType] = useState();
  const [description, setDescription] = useState();

  return (
    <PopupForm
      onSubmit={() => {
        apiPost(
          apiRoutes.tariff,
          {
            Id: 0,
            TenantId: 0,
            TariffType: tariffType,
            TariffDescription: description,
          },
          () => refreshOnClose(setRefresh, refresh, trigger)
        );
      }}
      submitBtnText={"Save"}
      width={400}
      trigger={trigger}
      heading={"Add Tariff Type"}
    >
      <TextInput
        placeholder={"Abbreviation (All Caps)"}
        onChange={setTariffType}
      />
      <SpaceHorizontal height={10} />
      <TextInput placeholder={"Description"} onChange={setDescription} />
    </PopupForm>
  );
}

export default AddTariffType;