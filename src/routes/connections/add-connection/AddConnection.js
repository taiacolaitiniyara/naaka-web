import React, { useState } from "react";
import { apiRoutes } from "../../../api-services/ApiRoutes";
import Layout from "../../../layout/Layout";
import { useFetchApiList, useShadeTabs } from "../../../reusables/CustomHooks";
import { SelectSearchInput } from "../../../reusables/Inputs";
import AddCustomer from "../../customers/AddCustomer";

function AddConnection() {
  useShadeTabs("connections-tab");
  const [customer, setCustomer] = useState();
  console.log("Customer", customer);
  const customers = useFetchApiList(apiRoutes.Customer);
  return (
    <Layout headerText={"Add Connection"}>
      <div style={{ display: "flex" }}>
        <div style={{ width: "30%" }}>
          <div>
            {" "}
            <SelectSearchInput
              list={customers}
              listName={"Customer"}
              optionName={"CustName"}
              dataType={"int"}
              onChange={setCustomer}
            />
          </div>
          <div>
            <AddCustomer />
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </Layout>
  );
}

export default AddConnection;
