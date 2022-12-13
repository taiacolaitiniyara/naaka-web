import React, { useState } from "react";
import Layout from "../../../layout/Layout";
import { DynamicTable } from "../../../reusables/Tables";
import { apiRoutes } from "../../../api-services/ApiRoutes";
import { SpaceHorizontal, Status } from "../../../reusables/Elements";
import { AddButton } from "../../../reusables/Buttons";
import { useFetchApiList, useShadeTabs } from "../../../reusables/CustomHooks";
import { SelectInput } from "../../../reusables/Inputs";
import AddHub from "./AddHub";
import EditHub from "./EditHub";

function HubsManagement() {
  useShadeTabs("setup-tab");
  const [refresh, setRefresh] = useState(1);
  const [add, showAdd] = useState(false);
  const [edit, setEdit] = useState(false);
  const [details, setEditDetails] = useState({});

  const tenants = useFetchApiList(apiRoutes.tenants);
  const [tenantId, setTenantId] = useState(1);

  return (
    <Layout headerText={"Hubs Management"}>
      <AddButton text={"Add Hub"} onClick={() => showAdd(!add)} />
      <SpaceHorizontal height={10} />

      <SelectInput
        list={tenants}
        listName={"Tenant"}
        optionName={"TenantName"}
        optionValue={"Id"}
        dataType={"int"}
        setValue={setTenantId}
        value={tenantId}
      />

      <SpaceHorizontal height={10} />
      <DynamicTable
        apiRoute={apiRoutes.hubs + tenantId}
        tableWidth={100}
        injectedParameters={[tenantId, refresh]}
        height={300}
        rowHover
        search
        columns={[
          { path: "Name", name: "Hub Name" },
          { path: "Fullname", name: "Full Name" },
          { path: "HubLevel", name: "Level" },
          { path: "ParentHubName", name: "Parent Hub" },
          { path: "HubColor", name: "Color", color: "HubColor" },
          { path: "IsActive", name: "IsActive", status: Status },
          {
            path: "Edit",
            name: "Edit",
            edit: true,
            showEdit: () => setEdit(true),
            setEditDetails: setEditDetails,
          },
        ]}
      />

      {add && (
        <AddHub
          trigger={showAdd}
          refresh={refresh}
          setRefresh={setRefresh}
          tenantId={tenantId}
        />
      )}
      {edit && (
        <EditHub
          details={details}
          trigger={setEdit}
          refresh={refresh}
          setRefresh={setRefresh}
        />
      )}
    </Layout>
  );
}

export default HubsManagement;
