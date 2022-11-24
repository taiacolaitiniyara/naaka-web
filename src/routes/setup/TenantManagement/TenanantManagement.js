import React, { useEffect, useState } from "react";
import { apiGetWithTwoParameters } from "../../../api-services/ApiCalls";
import { apiRoutes } from "../../../api-services/ApiRoutes";
import Layout from "../../../layout/Layout";
import { SpaceHorizontal, Status } from "../../../reusables/Elements";
import { DynamicTable } from "../../../reusables/Tables";
import Hub from "./Hub/Hub";
import Role from "./Role/Role";
import Tenant from "./Tenant/Tenant";

function TenanantManagement() {
  const [tenantId, setTenantId] = useState(1);
  const [hubId, setHubId] = useState(1);
  const [roleId, setRoleId] = useState("");

  //console.log("TenantId", tenantId);
  return (
    <Layout headerText="Tenant Management">
      <Tenant addBtnText={"Add Tenant"} setTenantId={setTenantId} />
      <SpaceHorizontal height={15} />
      <Hub tenantId={tenantId} addBtnText={"Add Hub"} setHubId={setHubId} />
      <SpaceHorizontal height={15} />
      <Role tenantId={tenantId} hubId={hubId} addBtnText={"Add Role"} />
      <SpaceHorizontal height={15} />
      <DynamicTable
        apiRoute={
          apiRoutes.tenanthubusers + "TenantId=" + tenantId + "&HubId=" + hubId
        }
        height={150}
        tableWidth={100}
        rowHover={true}
        seletableRow={true}
        setValueFromSelectedRow={setHubId}
        selectedRowValue={"Id"}
        injectedParameters={[hubId, tenantId]}
        columns={[
          { path: "Name", name: "User" },
          { path: "Role", name: "Role" },
          { path: "Email", name: "Email" },
          { path: "Phone", name: "Phone" },
          {
            edit: true,
            editAction: () => {
              console.log("Edit Action");
            },
          },
        ]}
      />
    </Layout>
  );
}

export default TenanantManagement;
