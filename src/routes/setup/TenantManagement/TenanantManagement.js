import React, { useEffect, useState } from "react";
import { apiGetWithTwoParameters } from "../../../api-services/ApiCalls";
import { apiRoutes } from "../../../api-services/ApiRoutes";
import Layout from "../../../layout/Layout";
import { SpaceHorizontal, Status } from "../../../reusables/Elements";
import { DynamicTable } from "../../../reusables/Tables";
import Hub from "./Hub/Hub";
import Role from "./Role/Role";
import Tenant from "./Tenant/Tenant";
import User from "./User/User";

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
      <User hubId={hubId} tenantId={tenantId} />
    </Layout>
  );
}

export default TenanantManagement;
