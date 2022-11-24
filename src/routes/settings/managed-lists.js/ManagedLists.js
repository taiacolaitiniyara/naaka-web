import React, { useEffect, useState } from "react";
import Layout from "../../../layout/Layout";
import { DynamicTable } from "../../../reusables/Tables";
import { apiRoutes } from "../../../api-services/ApiRoutes";
import { apiGet } from "../../../api-services/ApiCalls";
import ManagedListTable from "./ManagedListTable";
import { AddButton } from "../../../reusables/Buttons";
import { Collapsible, SpaceHorizontal } from "../../../reusables/Elements";

function ManagedLists() {
  const [lookupParents, setLookupParents] = useState([]);
  useEffect(() => {
    apiGet(apiRoutes.lookup, setLookupParents);
  }, []);
  return (
    <Layout headerText={"Managed Lists"}>
      <AddButton text={"Add New List"} />
      <SpaceHorizontal height={10} />
      {lookupParents.map((l, i) => (
        <div key={i}>
          <Collapsible
            title={l.LookupTypeName}
            child={<ManagedListTable title={l.LookupTypeName} id={l.Id} />}
          />
        </div>
      ))}
    </Layout>
  );
}

export default ManagedLists;
