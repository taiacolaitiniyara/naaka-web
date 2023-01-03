import React, { useState } from "react";
import Layout from "../../../layout/Layout";
import { DynamicTable } from "../../../reusables/Tables";
import { apiRoutes } from "../../../api-services/ApiRoutes";
import { useFetchApiList, useShadeTabs } from "../../../reusables/CustomHooks";
import { AddButton } from "../../../reusables/Buttons";
import { SpaceHorizontal, Status } from "../../../reusables/Elements";
import AddReadingRoute from "./AddReadingRoute";
import AddDistrict from "./AddDistrict";
import EditReadingRoute from "./EditReadingRoute";

function ReadingRoutes() {
  useShadeTabs("connections-tab");
  const [addRoute, showAddRoute] = useState(false);
  const [addDistrict, showAddDistrict] = useState(false);
  const [editReadingRoute, showEditReadingRoute] = useState(false);
  const [editDetails, setEditDetails] = useState({});

  const [refresh, setRefresh] = useState(1);
  const districtList = useFetchApiList(apiRoutes.unassignedDistricts);

  return (
    <Layout headerText={"Reading Routes"}>
      <h3>Districts</h3>
      <SpaceHorizontal height={5} />
      <AddButton text={"Add District"} onClick={() => showAddDistrict(true)} />
      <SpaceHorizontal height={5} />
      <DynamicTable
        tableWidth={100}
        height={200}
        injectedParameters={[refresh]}
        apiRoute={apiRoutes.district}
        columns={[
          { path: "Description", name: "District", sort: true },
          { path: "Color", name: "Color", color: "Color" },
          { path: "IsActive", status: Status, name: "IsActive" },
        ]}
      />
      <SpaceHorizontal height={10} />
      <h3>Routes</h3>
      <SpaceHorizontal height={5} />
      <div>
        <div style={{ display: districtList.length === 1 ? "none" : "block" }}>
          <AddButton text={"Add Route"} onClick={() => showAddRoute(true)} />
        </div>
      </div>

      <SpaceHorizontal height={5} />
      <DynamicTable
        injectedParameters={[refresh]}
        tableWidth={100}
        height={200}
        apiRoute={apiRoutes.readingRoutes}
        columns={[
          { path: "Descrip", name: "Route", sort: true, color: "Color" },
          { path: "District", name: "District", sort: true, color: "Color" },
          { path: "IsActive", name: "IsActive", sort: true, status: Status },
          {
            path: "Edit",
            name: "Edit",
            edit: true,
            showEdit: () => showEditReadingRoute(true),
            setEditDetails: setEditDetails,
          },
        ]}
      />

      {addRoute && (
        <AddReadingRoute
          refresh={refresh}
          setRefresh={setRefresh}
          trigger={showAddRoute}
        />
      )}

      {editReadingRoute && (
        <EditReadingRoute
          trigger={showEditReadingRoute}
          refresh={refresh}
          setRefresh={setRefresh}
          details={editDetails}
        />
      )}

      {addDistrict && (
        <AddDistrict
          refresh={refresh}
          setRefresh={setRefresh}
          trigger={showAddDistrict}
        />
      )}
    </Layout>
  );
}

export default ReadingRoutes;
