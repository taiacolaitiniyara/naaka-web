import React, { useState } from "react";
import Layout from "../../../layout/Layout";
import { DynamicTable } from "../../../reusables/Tables";
import { apiRoutes } from "../../../api-services/ApiRoutes";
import { SpaceHorizontal, Status } from "../../../reusables/Elements";
import AddBillRun from "./AddBillRun";
import { AddButton } from "../../../reusables/Buttons";

function BillRunManagement() {
  const [refresh, setRefresh] = useState(1);
  const [showAdd, setShowAdd] = useState(false);
  return (
    <Layout headerText={"Bill Run Management"}>
      <AddButton text={"Add Bill Run"} onClick={() => setShowAdd(true)} />
      <SpaceHorizontal height={10} />
      <DynamicTable
        injectedParameters={[refresh]}
        apiRoute={apiRoutes.billRun}
        columns={[
          { path: "BillRunNum", name: "Bill Run Number" },
          { path: "BillingMthEnd", name: "Billing Month End", date: true },
          { path: "UnreadMtrs", name: "Unread Mtrs" },
          { path: "ReadMtrs", name: "Read Mtrs" },
          { path: "UnchargedMtrs", name: "Uncharged Mtrs" },
          { path: "ChargedMtrs", name: "Charged Mtrs" },
          { path: "ExemptedMtrs", name: "Exempted Mtrs" },
          { path: "BilledMtrs", name: "Billed Mtrs" },
          { path: "BillStatus", name: "Billed Status"},
          { path: "DateAdded", name: "Date Added", date: true },
          { path: "AddedBy", name: "Added By" },
        ]}
        tableWidth={100}
      />
      {showAdd && (
        <AddBillRun
          refresh={refresh}
          setRefresh={setRefresh}
          trigger={setShowAdd}
        />
      )}
    </Layout>
  );
}

export default BillRunManagement;
