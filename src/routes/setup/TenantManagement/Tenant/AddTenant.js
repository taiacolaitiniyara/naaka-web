import React, { useState } from "react";
import {
  PopupForm,
  SpaceHorizontal,
  SpaceVertical,
} from "../../../../reusables/Elements";
import {
  DateTimeInput,
  DoubleInputs,
  EmailInput,
  SelectInput,
  TextInput,
} from "../../../../reusables/Inputs";
import { TenantTypeList } from "../../../../reusables/Lists";
import { LicenseKeyGenerator } from "../../../../reusables/Functions";
import { AddAddressMap } from "../../../../reusables/Maps";
import { apiPost } from "../../../../api-services/ApiCalls";
import { apiRoutes } from "../../../../api-services/ApiRoutes";

function AddTenant({ trigger }) {
  const [tenantName, setTenantName] = useState("");
  const [tenantType, setTenantType] = useState();
  const [licenseStartDate, setLicenseStartDate] = useState();
  const [licenseEndDate, setLicenseEndDate] = useState();
  const [licenceKey, setLicenseKey] = useState("************");
  const [contactName, setContactName] = useState();
  const [contactEmail, setContactEmail] = useState();
  const [contactPhone, setContactPhone] = useState();
  const [contactMobile, setContactMobile] = useState();
  const [xLong, setXLong] = useState(166.931032);
  const [yLat, setYLat] = useState(-0.531842);
  const [address, setAddress] = useState("Address");

  function onSubmit() {
    console.log("Submit");
    apiPost(apiRoutes.tenants, {
      Id: 0,
      TenantName: tenantName,
      TenantType: tenantType,
      LicenceStartDate: licenseStartDate,
      LicenceEndDate: licenseEndDate,
      LicenceKey: licenceKey,
      IsActive: true,
      ContactName: contactName,
      ContactEmail: contactEmail,
      ContactPhone: contactPhone,
      ContactMobile: contactMobile,
      Xlong: xLong,
      Ylat: yLat,
      FormattedAddress: address,
    });
  }
  return (
    <PopupForm
      trigger={trigger}
      heading={"Add Tenant"}
      onSubmit={onSubmit}
      submitBtnText={"Save"}
    >
      <TextInput placeholder={"Name"} onChange={setTenantName} />
      <SpaceHorizontal height={10} />
      <SelectInput
        list={TenantTypeList}
        listName={"Tenant Type"}
        optionValue={"Id"}
        optionName={"Name"}
        dataType={"int"}
        setValue={setTenantType}
      />
      <SpaceHorizontal height={10} />
      <DoubleInputs
        width1={50}
        width2={50}
        input1={
          <TextInput placeholder={"Contact Name"} onChange={setContactName} />
        }
        input2={
          <EmailInput
            placeholder={"Contact Email"}
            onChange={setContactEmail}
          />
        }
      />
      <SpaceHorizontal height={10} />
      <DoubleInputs
        width1={50}
        width2={50}
        input1={
          <TextInput placeholder={"Contact Phone"} onChange={setContactPhone} />
        }
        input2={
          <TextInput
            placeholder={"Contact Mobile"}
            onChange={setContactMobile}
          />
        }
      />
      <SpaceHorizontal height={10} />
      <DoubleInputs
        label1={"License Start Date"}
        input1={
          <DateTimeInput
            onChange={setLicenseStartDate}
            value={licenseStartDate}
          />
        }
        label2={"License End Date"}
        input2={
          <DateTimeInput onChange={setLicenseEndDate} value={licenseEndDate} />
        }
        width1={50}
        width2={50}
      />
      <SpaceHorizontal height={10} />
      <div style={{ display: "flex", alignItems: "center" }}>
        <button
          style={{ width: "70%" }}
          type="button"
          onClick={() => LicenseKeyGenerator(tenantName, setLicenseKey)}
        >
          Generate License Key
        </button>
        <SpaceVertical width={10} />
        <input disabled value={licenceKey} />
      </div>
      <SpaceHorizontal height={10} />

      <AddAddressMap
        height={"200px"}
        setLng={setXLong}
        setLat={setYLat}
        setGpsAddress={setAddress}
      />
      <SpaceHorizontal height={10} />
      <input disabled placeholder={address} />
    </PopupForm>
  );
}

export default AddTenant;
