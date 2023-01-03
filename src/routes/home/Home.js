import React, { useState } from "react";
import Layout from "../../layout/Layout";
import { useFetchApiList, useShadeTabs } from "../../reusables/CustomHooks";
import { sidebarList } from "../../reusables/Lists";
import { DynamicTable } from "../../reusables/Tables";
import { apiRoutes } from "../../api-services/ApiRoutes";
import {
  SpaceHorizontal,
  SpaceVertical,
  Status,
} from "../../reusables/Elements";
import { DisplayAddressMap } from "../../reusables/Maps";
import CustDetails from "./CustDetails";
import BillingDetails from "./BillingDetails";

function Home() {
  useShadeTabs("home-tab");
  const [custId, setCustId] = useState(443);
  const [custDetails, setDetails] = useState({});
  const [showCustDetails, setShowCustDetails] = useState(false);
  const custConnDetails = useFetchApiList(apiRoutes.custConnDetails + custId);
  return (
    <Layout headerText={"Home"}>
      {showCustDetails && (
        <CustDetails
          trigger={setShowCustDetails}
          custDetails={custDetails}
          connDetails={custConnDetails}
        />
      )}
      <SpaceHorizontal height={5} />
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <DynamicTable
            fontSize={10}
            setDetails={setDetails}
            seletableRow
            rowHover
            showMoreDetails={setShowCustDetails}
            search
            tableDetails={<h4>Customers</h4>}
            apiRoute={apiRoutes.Customer}
            selectedRowValue={"Id"}
            setValueFromSelectedRow={setCustId}
            columns={[
              { path: "CustNumDisp", name: "Cust Num", sort: true, width: 17 },
              { path: "CustName", name: "Cust Name", sort: true },
              { path: "DistrictName", name: "District", sort: true },
              { path: "InstallationAddress", name: "Installation Address" },
              {
                path: "ShowMoreDetails",
                name: "Info",
                showMoreDetails: setShowCustDetails,
              },
            ]}
            height={200}
            tableWidth={100}
          />
          <SpaceHorizontal height={20} />
          <DynamicTable
            fontSize={10}
            search
            seletableRow
            tableDetails={
              <div style={{ display: "flex" }}>
                <h4>
                  Connection Type:{" "}
                  <strong style={{ marginLeft: "5px" }}>
                    {custConnDetails.ConnType}
                  </strong>
                </h4>
              </div>
            }
            rowHover
            injectedParameters={[custId]}
            apiRoute={apiRoutes.getCustMeters + custId}
            columns={[
              { path: "ConnPosition", name: "Conn Position" },
              { path: "ConnPhase", name: "Conn Ph" },
              { path: "MtrNum", name: "Mtr Num" },
              { path: "MtrPhase", name: "Mtr Ph" },
              { path: "MtrType", name: "Mtr Type" },
              { path: "MtrStatus", name: "Mtr Status" },
              { path: "InitialReadDate", name: "In-Use Date", date: true },
              {
                path: "BillableStatus",
                name: "Billable Status",
                status: Status,
              },
            ]}
            height={120}
            tableWidth={100}
          />
          <SpaceHorizontal height={10} />
          <DynamicTable
            fontSize={10}
            search
            selectedRowColor={"#ffe6e6"}
            seletableRow
            rowHover
            tableDetails={<h4>Connection Info - History</h4>}
            injectedParameters={[custId]}
            apiRoute={apiRoutes.getCustomerMeterHistory + custId}
            columns={[
              { path: "ConnPosition", name: "Conn Position" },
              { path: "ConnPhase", name: "Conn Ph" },
              { path: "MtrNum", name: "Mtr Num" },
              { path: "MtrPhase", name: "Mtr Ph" },
              { path: "MtrType", name: "Mtr Type" },
              { path: "MtrStatus", name: "Mtr Status" },
              { path: "InitialReadDate", name: "In-Use Date", date: true },
              {
                path: "BillableStatus",
                name: "Billable Status",
                status: Status,
              },
            ]}
            height={120}
            tableWidth={100}
          />
        </div>
        <SpaceVertical width={10} />
        <div style={{ width: "50%" }}>
          <DisplayAddressMap
            lat={custDetails.YLat === undefined ? 0.0 : custDetails.YLat}
            lng={custDetails.XLng === undefined ? 0.0 : custDetails.XLng}
            width={100}
            height={160}
          />
          <SpaceHorizontal height={10} />
          <BillingDetails />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
