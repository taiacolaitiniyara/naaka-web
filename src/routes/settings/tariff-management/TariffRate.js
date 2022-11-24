import React from "react";
import { DynamicTable } from "../../../reusables/Tables";
import { apiRoutes } from "../../../api-services/ApiRoutes";
import { SpaceHorizontal, Status } from "../../../reusables/Elements";

function TariffRate({ id }) {
  return (
    <div>
      <button type="button">Add Rate</button>
      <SpaceHorizontal height={10} />
      <DynamicTable
        tableWidth={100}
        apiRoute={apiRoutes.tariffRate + id}
        columns={[
          { path: "IsActive", name: "IsActive", status: Status },
          { path: "ImpRate", name: "Import Rate" },
          { path: "ExpRate", name: "Export Rate" },
          { path: "PrdRate", name: "Production Rate" },
          { path: "ActivateDate", name: "Activate Date" },
          { path: "DeactivateDate", name: "Deactivate Date" },
          { path: "AddedBy", name: "Added By" },
          { path: "ApprovedBy", name: "Approved By" },
        ]}
      />
      <SpaceHorizontal height={10} />
    </div>
  );
}

export default TariffRate;
