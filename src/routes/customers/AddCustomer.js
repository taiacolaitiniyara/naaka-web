import React, { useState } from "react";
import { apiPost } from "../../api-services/ApiCalls";
import { apiRoutes } from "../../api-services/ApiRoutes";
import { CancelButton, SubmitButton } from "../../reusables/Buttons";
import { AuthToken } from "../../reusables/Constants";
import { useFetchApiList } from "../../reusables/CustomHooks";
import { SpaceHorizontal, SpaceVertical } from "../../reusables/Elements";
import {
  DoubleInputs,
  NumberInput,
  SelectInput,
  TextInput,
} from "../../reusables/Inputs";
import { AddAddressMap } from "../../reusables/Maps";

function AddCustomer({ width, setCustomer, trigger }) {
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

        const entry = {
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
              RecId: 0,
              TenantId: 0,
              MtrNum: "string",
              MtrNumBill: 0,
              MtrTypeId: 0,
              MtrType: "string",
              MtrPhaseId: 0,
              MtrPhase: 0,
              MtrStatusId: 0,
              MtrModelNum: "string",
              MtrSerialNum: "string",
              MtrLocId: 0,
              InUseDate: "2022-12-30T00:19:32.665Z",
              UploadId: 0,
            },
          ],
          Id: 0,
          TenantId: 0,
          TrackerId: 0,
          ParentNnum: "string",
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
          IsApproved: true,
          ApprovedBy: "string",
          ApprovedAt: "2022-12-12T22:49:35.161Z",
        };

        console.log("Authtoken", AuthToken());

        fetch("http://13.238.73.156:44340/api/v1/Customer", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            accept: "*/*",
            Authorization: AuthToken(),
          },
          body: JSON.stringify(entry),
        })
          .then((r) => r.json())
          .then((r) => {
            console.log(r);
            if (setCustomer != undefined) {
              setCustomer(r);
            }
          })
          .catch((e) => console.log("Error", e));
      }}
      style={{ width: `${width}%` }}
    >
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
            maxValue={"99999999"}
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
        height={200}
        setLat={setYLat}
        setLng={setXLng}
        setGpsAddress={setGpsAddress}
      />
      <SpaceHorizontal height={10} />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <CancelButton
          onClick={() => {
            if (setCustomer !== undefined) {
              setCustomer({});
            }
            if (trigger !== undefined) {
              trigger(false);
            }
          }}
        />
        <SpaceVertical width={10} />
        <SubmitButton text={"Submit"} />
      </div>
    </form>
  );
}

export default AddCustomer;
