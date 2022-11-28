import React, { useEffect, useState } from "react";
import { apiRoutes } from "../../api-services/ApiRoutes";
import Layout from "../../layout/Layout";
import { useSearch } from "../../reusables/CustomHooks";
import { SpaceHorizontal } from "../../reusables/Elements";
import { DynamicTable } from "../../reusables/Tables";

function Customers() {
  const [filter, setFilter] = useState("");


  const list = [
    { Name: "Taia", Age: "28" },
    { Name: "Lino", Age: "26" },
  ];

  //const search = useSearch(list, filter, setResults);
  return (
    <Layout headerText={"Customers"}>
      <DynamicTable
        apiRoute={apiRoutes.Customer}
        height={400}
        tableWidth={100}
        search
        columns={[
          { path: "CustNumDisp", name: "Cust Num" },
          { path: "CustName", name: "Name" },
          { path: "StreetAddress", name: "Street Address" },
          { path: "DistrictName", name: "District" },
        ]}
      />

      <input
        onChange={(v) => {
          setFilter(v.target.value);
          list.filter((el) =>
            console.log(
              JSON.stringify(el)
                .toLowerCase()
                .includes(v.target.value.toLowerCase())
            )
          );
        }}
        placeholder={"Search"}
      />
      <SpaceHorizontal height={10} />
    </Layout>
  );
}

export default Customers;
