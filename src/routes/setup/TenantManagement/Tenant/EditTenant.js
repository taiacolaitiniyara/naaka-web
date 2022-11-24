import React, { useState } from "react";
import { apiPut } from "../../../../api-services/ApiCalls";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import {
  PopupForm,
  SpaceHorizontal,
  SpaceVertical,
} from "../../../../reusables/Elements";
import { LicenseKeyGenerator } from "../../../../reusables/Functions";
import {
  DateTimeInput,
  DoubleInputs,
  EmailInput,
  SelectInput,
  TextInput,
} from "../../../../reusables/Inputs";
import { TenantTypeList } from "../../../../reusables/Lists";
import AddAddressMap from "../../../../reusables/Maps";

function EditTenant({ trigger, details }) {
  const [tenantName, setTenantName] = useState(details.TenantName);
  const [tenantType, setTenantType] = useState(details.TenantType);
  const [licenseStartDate, setLicenseStartDate] = useState(
    details.LicenceStartDate
  );
  const [licenseEndDate, setLicenseEndDate] = useState(details.LicenceEndDate);
  const [licenceKey, setLicenseKey] = useState(details.LicenceKey);
  const [contactName, setContactName] = useState(details.ContactName);
  const [contactEmail, setContactEmail] = useState(details.ContactEmail);
  const [contactPhone, setContactPhone] = useState(details.ContactPhone);
  const [contactMobile, setContactMobile] = useState(details.ContactMobile);
  const [xLong, setXLong] = useState(details.Xlong);
  const [yLat, setYLat] = useState(details.Ylat);
  const [address, setAddress] = useState(details.FormattedAddress);

  function onSubmit() {
    console.log("Submit");
    console.log("Entry", {
      Id: details.Id,
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
    apiPut(apiRoutes.tenantsUpdate, {
      Id: details.Id,
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
      <TextInput
        placeholder={"Name"}
        onChange={setTenantName}
        value={tenantName}
      />
      <SpaceHorizontal height={10} />
      <SelectInput
        list={TenantTypeList}
        listName={"Tenant Type"}
        optionValue={"Id"}
        optionName={"Name"}
        dataType={"int"}
        setValue={setTenantType}
        value={tenantType}
      />
      <SpaceHorizontal height={10} />
      <DoubleInputs
        width1={50}
        width2={50}
        input1={
          <TextInput
            value={contactName}
            placeholder={"Contact Name"}
            onChange={setContactName}
          />
        }
        input2={
          <EmailInput
            placeholder={"Contact Email"}
            onChange={setContactEmail}
            value={contactEmail}
          />
        }
      />
      <SpaceHorizontal height={10} />
      <DoubleInputs
        width1={50}
        width2={50}
        input1={
          <TextInput
            value={contactPhone}
            placeholder={"Contact Phone"}
            onChange={setContactPhone}
          />
        }
        input2={
          <TextInput
            value={contactMobile}
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
        License Key:
        <SpaceVertical width={10} />
        <input disabled value={licenceKey} />
      </div>
      <SpaceHorizontal height={10} />

      <AddAddressMap
        lat={details.Ylat}
        lng={details.Xlong}
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

export default EditTenant;
