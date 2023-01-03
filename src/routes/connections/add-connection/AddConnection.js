import React, { useEffect, useState } from "react";
import { apiGet, apiPost } from "../../../api-services/ApiCalls";
import { apiRoutes } from "../../../api-services/ApiRoutes";
import Layout from "../../../layout/Layout";
import { AddButton } from "../../../reusables/Buttons";
import { useFetchApiList, useShadeTabs } from "../../../reusables/CustomHooks";
import { SpaceHorizontal, SpaceVertical } from "../../../reusables/Elements";
import { SelectSearchInput } from "../../../reusables/Inputs";
import AddCustomer from "../../customers/AddCustomer";
import PaymentDetails from "./PaymentDetails";
import CustDetails from "./CustDetails";
import GridSide from "./GridSide";
import ProdSide from "./ProdSide";

function AddConnection() {
  useShadeTabs("connections-tab");
  const [spareMtrs, setSpareMeters] = useState([]);
  const mtrPhases = useFetchApiList(apiRoutes.getLookUps + 11);
  const connPhases = useFetchApiList(apiRoutes.getLookUps + 9);
  const mtrTypes = useFetchApiList(apiRoutes.getLookUps + 8);
  const [customer, setCustomer] = useState();
  const customers = useFetchApiList(apiRoutes.Customer);
  const [tariffTypeId, setTariffTypeId] = useState();
  const [connTypeId, setConnTypeId] = useState(0);
  const [paymodeId, setPayModeId] = useState();
  const [metersList, setMetersList] = useState([]);
  const [mtrsCount, setMtrsCount] = useState(0);

  useEffect(() => {
    apiGet(apiRoutes.getSpareMetersNew, setSpareMeters);
    setMtrsCount(metersList.length);
  }, [metersList]);

  console.log("MtrList", metersList);
  return (
    <Layout headerText={"Add Connection"}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: "32.5%",
            padding: "10px",
            border: "2px solid #ddd",
            borderRadius: "15px",
          }}
        >
          <h3>
            {customer === undefined
              ? "Add Conn to Existing Customer"
              : "Customer Info"}
          </h3>
          <SpaceHorizontal height={10} />
          <div>
            <SelectSearchInput
              list={customers}
              listName={"Customer"}
              optionName={"CustNumDisp"}
              dataType={"int"}
              onChange={setCustomer}
            />
          </div>
          <div style={{ display: customer === undefined ? "none" : "block" }}>
            <CustDetails details={customer} />
            <SpaceHorizontal height={10} />
            <AddButton
              text={"Add New Customer"}
              onClick={() => setCustomer(undefined)}
            />
          </div>
          <SpaceHorizontal height={10} />
          <div style={{ display: customer !== undefined ? "none" : "block" }}>
            <SpaceHorizontal height={10} />
            <h3>Add New Customer</h3>
            <AddCustomer setCustomer={setCustomer} />
          </div>

          <div style={{ display: customer === undefined ? "none" : "block" }}>
            <PaymentDetails
              setTariffTypeId={setTariffTypeId}
              setConnTypeId={setConnTypeId}
              setPayModeId={setPayModeId}
            />
          </div>
        </div>
        <SpaceVertical width={10} />
        <div
          style={{
            width: "32.5%",
            padding: "10px",
            border: "2px solid #ddd",
            borderRadius: "15px",
            display: connTypeId === 0 ? "none" : "block",
          }}
        >
          <GridSide
            mtrList={metersList}
            mtrPhases={mtrPhases}
            connPhases={connPhases}
            spareMtrs={spareMtrs}
            metersList={metersList}
            setMetersList={setMetersList}
            mtrTypes={mtrTypes}
          />
        </div>
        <SpaceVertical width={10} />
        <div
          style={{
            width: "32.5%",
            padding: "10px",
            border: "2px solid #ddd",
            borderRadius: "15px",
            display: connTypeId === 7 ? "block" : "none",
          }}
        >
          <ProdSide
            mtrList={metersList}
            mtrPhases={mtrPhases}
            connPhases={connPhases}
            spareMtrs={spareMtrs}
            metersList={metersList}
            setMetersList={setMetersList}
            mtrTypes={mtrTypes}
          />
        </div>
      </div>
      <SpaceHorizontal height={20} />
      <div
        style={{
          display: mtrsCount === 0 ? "none" : "flex",
          justifyContent: "center",
        }}
      >
        <AddButton
          text={"Submit"}
          onClick={() => {
            apiPost(apiRoutes.addCustomerConnection, {
              Id: 0,
              TenantId: 0,
              CustId: customer.Id,
              ConnNum: 0,
              LocationId: 0,
              ConnStatusId: 0,
              ConnTypeId: connTypeId,
              ConnPayModeId: paymodeId,
              TariffTypeId: tariffTypeId,
              AddedOn: "2022-12-13T21:35:16.379Z",
              UpdatedOn: "2022-12-13T21:35:16.379Z",
              OpHrsRate: 0,
              NonOpHrsRate: 0,
              FixedAmtConsump: 0,
              MeterList: metersList,
            });

            console.log(
              "Entry",
              JSON.stringify({
                Id: 0,
                TenantId: 0,
                CustId: customer.Id,
                ConnNum: 0,
                LocationId: 0,
                ConnStatusId: 0,
                ConnTypeId: connTypeId,
                ConnPayModeId: paymodeId,
                TariffTypeId: tariffTypeId,
                AddedOn: "2022-12-13T21:35:16.379Z",
                UpdatedOn: "2022-12-13T21:35:16.379Z",
                OpHrsRate: 0,
                NonOpHrsRate: 0,
                FixedAmtConsump: 0,
                MeterList: metersList,
              })
            );
          }}
        />
      </div>
    </Layout>
  );
}

export default AddConnection;
