import React, { useState } from "react";
import { apiPost } from "../../../api-services/ApiCalls";
import { apiRoutes } from "../../../api-services/ApiRoutes";
import {
  useFetchApiList,
  useReadExcelFile,
} from "../../../reusables/CustomHooks";
import { PopupForm, SpaceHorizontal } from "../../../reusables/Elements";
import {
  DateInput,
  DoubleInputs,
  ExcelInput,
  NumberInput,
  SelectInput,
  TripleInputs,
} from "../../../reusables/Inputs";

function AddMetersFromFile({ trigger }) {
  const vendorList = useFetchApiList(apiRoutes.meterVendors);
  const warrantyStartEvents = useFetchApiList(apiRoutes.meterVendorEvents);
  const [mtrVendor, setMtrVendor] = useState();
  const [dateInvoiced, setDateInvoiced] = useState();
  const [dateShipped, setDateShipped] = useState();
  const [dateReceived, setDateReceived] = useState();
  const [mtrFile, setMtrFile] = useState(null);
  const [warrantyMonths, setWarrantyMonths] = useState();
  const [warrantyStartEvent, setWarrantyStartEvent] = useState();
  const [newMtrsList, setNewMtrsList] = useState([]);

  const validateData = async (list) => {
    let newList = [];
    list.map((l) => {
      l["MeterNum"] = l["MeterNum"].toString();
      newList.push(l);
    });
    setNewMtrsList(newList);
  };

  const upload = () => {
    let meterDetails = {
      NewMetersList: newMtrsList,
      MtrVendorEvents: [
        {
          VendorEventId: 1,
          VendorEventDate: dateInvoiced,
        },
        {
          VendorEventId: 2,
          VendorEventDate: dateShipped,
        },
        {
          VendorEventId: 3,
          VendorEventDate: dateReceived,
        },
      ],
      MtrVendorId: mtrVendor,
      DateInvoiced: dateInvoiced,
      DateShipped: dateShipped,
      DateReceived: dateReceived,
      WarrantyStartEventId: warrantyStartEvent,
      WarrantyMonths: warrantyMonths,
    };

    console.log("Entry = ", mtrFile, "METER DETAILS: ", meterDetails);
    apiPost(apiRoutes.addMetersFromFile, meterDetails);
  };

  const addMeter = async () => {
    if (dateShipped < dateInvoiced) {
      alert("Date Shipped cannot be less than Date Invoiced");
    } else if (dateReceived < dateShipped) {
      alert("Date Received cannot be less than Date Shipped");
    } else {
      await validateData(newMtrsList);
      upload();
    }
  };

  return trigger ? (
    <PopupForm
      onSubmit={addMeter}
      trigger={trigger}
      submitBtnText={"Upload"}
      width={650}
      heading={"Add Meters from File"}
    >
      Vendor
      <SelectInput
        list={vendorList}
        listName={"Vendor"}
        optionName={"VendorName"}
        optionValue={"Id"}
        setValue={setMtrVendor}
        dataType={"int"}
      />
      <SpaceHorizontal height={10} />
      <TripleInputs
        label1={"Date Invoiced"}
        input1={<DateInput onChange={setDateInvoiced} />}
        width1={32}
        label2={"Date Shipped"}
        input2={<DateInput onChange={setDateShipped} />}
        width2={32}
        label3={"Date Received"}
        input3={<DateInput onChange={setDateReceived} />}
        width3={32}
      />
      <SpaceHorizontal height={10} />
      <DoubleInputs
        input1={
          <NumberInput
            placeholder={"Warranty Months"}
            onChange={setWarrantyMonths}
          />
        }
        input2={
          <SelectInput
            setValue={setWarrantyStartEvent}
            list={warrantyStartEvents}
            listName={"Warranty Start Event"}
            optionName={"Descrip"}
            optionValue={"Id"}
            dataType={"int"}
          />
        }
        label1={"Warranty Months"}
        label2={"Warranty Start Event"}
        width1={50}
        width2={50}
      />
      <SpaceHorizontal height={15} />
      <ExcelInput setList={setNewMtrsList} />
    </PopupForm>
  ) : (
    ""
  );
}

export default AddMetersFromFile;