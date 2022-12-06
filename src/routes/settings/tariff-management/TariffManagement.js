import React, { useEffect, useState } from "react";
import { apiGet } from "../../../api-services/ApiCalls";
import { apiRoutes } from "../../../api-services/ApiRoutes";
import Layout from "../../../layout/Layout";
import { AddButton } from "../../../reusables/Buttons";
import { useShadeTabs } from "../../../reusables/CustomHooks";
import { Collapsible, SpaceHorizontal } from "../../../reusables/Elements";
import TariffRate from "./TariffRate";

function TariffManagement() {
  useShadeTabs("settings-tab");
  const [list, setList] = useState([]);
  //console.log(list);
  useEffect(() => {
    apiGet(apiRoutes.tariff, setList);
  }, []);
  return (
    <Layout headerText={"Tariff Management"}>
      <AddButton text={"Add Tariff"} />
      <SpaceHorizontal height={10} />
      {list.map((t, i) => (
        <Collapsible
          key={i}
          title={`${t.TariffType} - ${t.TariffDescription}`}
          child={<TariffRate id={t.Id} />}
        />
      ))}
    </Layout>
  );
}

export default TariffManagement;
