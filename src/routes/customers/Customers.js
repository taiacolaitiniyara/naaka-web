import React, { useEffect, useState } from "react";
import { apiGet } from "../../api-services/ApiCalls";
import { apiRoutes } from "../../api-services/ApiRoutes";
import Layout from "../../layout/Layout";
import { DynamicTable } from "../../reusables/Tables";

function Customers() {
  return (
    <Layout headerText={"Customers"}>
      <DynamicTable
        apiRoute={apiRoutes.Customer}
        height={400}
        tableWidth={100}
        columns={[
          { path: "CustNumDisp", name: "Cust Num" },
          { path: "CustName", name: "Name" },
          { path: "StreetAddress", name: "Street Address" },
          { path: "DistrictName", name: "District" },
        ]}
      />
    </Layout>
  );
}

export default Customers;
