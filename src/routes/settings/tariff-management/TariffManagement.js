import React, { useEffect, useState } from "react";
import { apiGet, apiPost } from "../../../api-services/ApiCalls";
import { apiRoutes } from "../../../api-services/ApiRoutes";
import Layout from "../../../layout/Layout";
import { AddButton } from "../../../reusables/Buttons";
import { useFetchApiList, useShadeTabs } from "../../../reusables/CustomHooks";
import { Collapsible, SpaceHorizontal } from "../../../reusables/Elements";
import { refreshOnClose } from "../../../reusables/Functions";
import { TextInput } from "../../../reusables/Inputs";
import { DynamicTable } from "../../../reusables/Tables";
import AddTariffType from "./AddTariffType";
import TariffRate from "./TariffRate";

function TariffManagement() {
  useShadeTabs("settings-tab");
  const [refresh, setRefresh] = useState(1);
  const [add, showAdd] = useState(false);
  const [tariffId, setTariffId] = useState(0);

  return (
    <Layout headerText={"Tariff Management"}>
      <AddButton text={"Add Tariff Type"} onClick={() => showAdd(true)} />
      <SpaceHorizontal height={10} />
      <DynamicTable
        apiRoute={apiRoutes.tariff}
        tableWidth={100}
        rowHover
        seletableRow
        selectedRowValue={"Id"}
        setValueFromSelectedRow={setTariffId}
        injectedParameters={[refresh]}
        height={180}
        columns={[
          { path: "TariffType", name: "Type", sort: true },
          { path: "TariffDescription", name: "Description", sort: true },
        ]}
      />
      {add && (
        <AddTariffType
          trigger={showAdd}
          refresh={refresh}
          setRefresh={setRefresh}
        />
      )}
      <SpaceHorizontal height={10} />
      <div>
        <TariffRate id={tariffId} />
      </div>
    </Layout>
  );
}

export default TariffManagement;
