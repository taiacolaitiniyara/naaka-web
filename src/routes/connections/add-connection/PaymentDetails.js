import React from "react";
import { apiRoutes } from "../../../api-services/ApiRoutes";
import { useFetchApiList } from "../../../reusables/CustomHooks";
import { SpaceHorizontal } from "../../../reusables/Elements";
import { SelectInput } from "../../../reusables/Inputs";

function PaymentDetails({ setPayModeId, setTariffTypeId, setConnTypeId }) {
  const tariffs = useFetchApiList(apiRoutes.tariff);
  const paymodes = useFetchApiList(apiRoutes.getLookUps + 5);
  const connTypes = useFetchApiList(apiRoutes.getLookUps + 4);
  return (
    <div>
      <h3>Payment Details</h3>
      <SpaceHorizontal height={10} />
      <SelectInput
        list={tariffs}
        listName={"Tariff Type"}
        optionName={"TariffType"}
        optionValue={"Id"}
        dataType={"int"}
        setValue={setTariffTypeId}
      />
      <SpaceHorizontal height={10} />
      <SelectInput
        list={paymodes}
        listName={"Paymode"}
        optionName={"Description"}
        optionValue={"Id"}
        dataType={"int"}
        setValue={setPayModeId}
      />
      <SpaceHorizontal height={10} />
      <SelectInput
        list={connTypes}
        listName={"Connection Type"}
        optionName={"Description"}
        optionValue={"Id"}
        dataType={"int"}
        setValue={setConnTypeId}
      />
    </div>
  );
}

export default PaymentDetails;
