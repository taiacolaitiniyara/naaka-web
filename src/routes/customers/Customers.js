import React, { useEffect, useState } from "react";
import { apiRoutes } from "../../api-services/ApiRoutes";
import Layout from "../../layout/Layout";
import { useShadeTabs } from "../../reusables/CustomHooks";
import { SpaceHorizontal } from "../../reusables/Elements";
import { DynamicTable } from "../../reusables/Tables";

function Customers() {
  useShadeTabs("customers-tab");
  const [custId, setCustId] = useState(0);
  const [custList, setCustList] = useState([]);

  console.log("CustList", custList);
  return (
    <Layout headerText={"Customers"}>
      <DynamicTable
        apiRoute={apiRoutes.Customer}
        height={250}
        tableWidth={100}
        search
        seletableRow
        rowHover
        columns={[
          { path: "CustNumDisp", name: "Cust Num" },
          { path: "CustName", name: "Name" },
          { path: "StreetAddress", name: "Street Address" },
          { path: "DistrictName", name: "District" },
        ]}
        setExternalList={setCustList}
        setValueFromSelectedRow={setCustId}
        selectedRowValue={"Id"}
      />
      <SpaceHorizontal height={10} />
    </Layout>
  );
}

export default Customers;
