import React, { useState } from "react";
import { apiPost } from "../../api-services/ApiCalls";
import { apiRoutes } from "../../api-services/ApiRoutes";
import { SubmitButton } from "../../reusables/Buttons";
import { useFetchApiList } from "../../reusables/CustomHooks";
import { SpaceHorizontal } from "../../reusables/Elements";
import {
  DoubleInputs,
  NumberInput,
  SelectInput,
  TextInput,
} from "../../reusables/Inputs";
import { AddAddressMap } from "../../reusables/Maps";

function AddCustomer({ width }) {
  const districts = useFetchApiList(apiRoutes.getLookUps + 3);
  const pwrProviders = useFetchApiList(apiRoutes.getLookUps + 17);
  const [custName, setCustName] = useState();
  const [custNum, setCustNum] = useState("");
  const [districtId, setDistrictId] = useState();
  const [installationAddress, setInstallationAddress] = useState();
  const [pwrProviderId, setPwrProviderId] = useState();
  const [yLat, setYLat] = useState(0.0);
  const [xLng, setXLng] = useState(0.0);
  const [gpsAddress, setGpsAddress] = useState();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        apiPost(apiRoutes.Customer, {
          DistrictName: "string",
          CustNumDisp: "string",
          IsEditable: true,
          MeterDetailsAdded: true,
          MeterStatus: 0,
          ShowInUse: true,
          GpsAddress: gpsAddress,
          XLng: xLng,
          YLat: yLat,
          PwrProvider: "string",
          ActiveMeters: [
            {
              Id: 0,
              TenantId: 0,
              MtrNum: "string",
              MtrNumBill: 0,
              MtrTypeId: 0,
              MtrType: "string",
              MtrPhase: 0,
              MtrStatusId: 0,
              MtrModelNum: "string",
              MtrSerialNum: "string",
              MtrLocId: 0,
              InUseDate: "2022-12-12T22:49:35.161Z",
              UploadId: 0,
            },
          ],
          Id: 0,
          TenantId: 0,
          ParentNo: "string",
          ParentName: "string",
          PwrProviderId: pwrProviderId,
          PwrProviderRefNum: "CUS" + custNum,
          CustNum: custNum,
          CustName: custName,
          InstallationAddress: installationAddress,
          DistrictId: districtId,
          LocationId: 0,
          AddedOn: "2022-12-12T22:49:35.161Z",
          UpdatedOn: "2022-12-12T22:49:35.161Z",
          IsActive: true,
          IsApproved: 0,
          ApprovedBy: "string",
          ApprovedAt: "2022-12-12T22:49:35.161Z",
        });
      }}
      style={{ width: `${width}%` }}
    >
      <h3>Customer Info</h3>
      <SpaceHorizontal height={10} />{" "}
      <SelectInput
        list={pwrProviders}
        listName={"Power Provider"}
        optionName={"Description"}
        optionValue={"Id"}
        setValue={setPwrProviderId}
        dataType={"int"}
      />
      <SpaceHorizontal height={10} />
      <DoubleInputs
        width1={50}
        width2={50}
        input2={
          <TextInput
            value={"CUS" + custNum}
            width={100}
            placeholder={"Pwr Provider Ref. Number"}
          />
        }
        input1={
          <NumberInput
            maxValue={"99999"}
            minValue={"1"}
            onChange={setCustNum}
            width={100}
            placeholder={"Customer Number"}
          />
        }
      />
      <SpaceHorizontal height={10} />
      <TextInput
        required={true}
        width={100}
        placeholder={"Name"}
        onChange={setCustName}
      />
      <SpaceHorizontal height={10} />
      <SelectInput
        list={districts}
        listName={"District"}
        optionName={"Description"}
        optionValue={"Id"}
        setValue={setDistrictId}
        dataType={"int"}
      />
      <SpaceHorizontal height={10} />
      <TextInput
        required={true}
        width={100}
        placeholder={"Installation Address"}
        onChange={setInstallationAddress}
      />
      <SpaceHorizontal height={10} />
      <AddAddressMap
        width={100}
        height={300}
        setLat={setYLat}
        setLng={setXLng}
        setGpsAddress={setGpsAddress}
      />
      <SpaceHorizontal height={10} />
      <SubmitButton text={"Submit"} />
    </form>
  );
}

export default AddCustomer;
