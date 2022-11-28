import React, { useState } from "react";
import Layout from "../../../layout/Layout";
import { SpaceHorizontal } from "../../../reusables/Elements";
import Modules from "./Modules/Modules";
import PermissionGroup from "./PermissionGroup/PermissionGroup";
import Permissions from "./Permissions/Permissions";

function PermissionsManagement() {
  const [moduleId, setModuleId] = useState(3)
  return (
    <Layout headerText={"Permissions Management"}>
      <Modules setModuleId={setModuleId} />
      <SpaceHorizontal height={10} />
      <Permissions moduleId={moduleId} />
      <SpaceHorizontal height={10} />
      <PermissionGroup />
    </Layout>
  );
}

export default PermissionsManagement;
