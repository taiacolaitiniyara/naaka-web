import React, { useEffect, useState } from "react";
import { apiRoutes } from "../../api-services/ApiRoutes";
import Layout from "../../layout/Layout";
import { AddButton } from "../../reusables/Buttons";
import { useShadeTabs } from "../../reusables/CustomHooks";
import { SpaceHorizontal } from "../../reusables/Elements";
import { DynamicTable } from "../../reusables/Tables";
import CustomerInfo from "./CustomerInfo";
import EditCustomer from "./EditCustomer";

function Customers() {
  useShadeTabs("customers-tab");
  const [refresh, setRefresh] = useState(1);
  const [showEdit, setShowEdit] = useState(false);
  const [details, setDetails] = useState({});
  return (
    <Layout headerText={"Customers"}>
      <AddButton text={"Add Customer"} onClick={() => alert("Add")} />
      <SpaceHorizontal height={10} />
      <DynamicTable
        apiRoute={apiRoutes.Customer}
        height={250}
        tableWidth={100}
        search
        setDetails={setDetails}
        injectedParameters={[refresh]}
        seletableRow
        rowHover
        columns={[
          { path: "CustNumDisp", name: "Cust Num", sort: true },
          { path: "CustName", name: "Name", sort: true },
          { path: "InstallationAddress", name: "Address", sort: true },
          { path: "DistrictName", name: "District", sort: true },
          {
            path: "Edit",
            name: "Edit",
            edit: true,
            showEdit: () => setShowEdit(!showEdit),
            setEditDetails: setDetails,
          },
        ]}
      />
      <SpaceHorizontal height={10} />

      {showEdit && (
        <EditCustomer
          setRefresh={setRefresh}
          refresh={refresh}
          trigger={setShowEdit}
          details={details}
        />
      )}
      <SpaceHorizontal height={10} />
      <CustomerInfo details={details} />
    </Layout>
  );
}

export default Customers;
