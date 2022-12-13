import React from "react";
import { useState } from "react";
import { apiPut } from "../../api-services/ApiCalls";
import { apiRoutes } from "../../api-services/ApiRoutes";
import { useFetchApiList } from "../../reusables/CustomHooks";
import { PopupForm, SpaceHorizontal } from "../../reusables/Elements";
import { NumberInput, SelectInput, TextInput } from "../../reusables/Inputs";
import { AddAddressMap } from "../../reusables/Maps";

function EditCustomer({ trigger, details, refresh, setRefresh }) {
  const [custName, setCustName] = useState(details.CustName);
  const districts = useFetchApiList(apiRoutes.getLookUps + 3);
  const [district, setDistrict] = useState(details.DistrictId);
  const [gpsAddress, setGpsAddress] = useState(details.GpsAddress);
  const [installationAddress, setInstallationAddress] = useState(
    details.InstallationAddress
  );
  const [yLat, setYLat] = useState(details.YLat);
  const [xLng, setXLng] = useState(details.XLng);
  const [custNum, setCustNum] = useState(details.CustNum);

  return trigger ? (
    <PopupForm
      submitBtnText={"Save"}
      width={500}
      trigger={trigger}
      onSubmit={() => {
        apiPut(
          apiRoutes.EditCustomer,
          {
            DistrictName: details.DistrictName,
            CustNumDisp: details.CustNumDisp,
            IsEditable: details.IsEditable,
            MeterDetailsAdded: details.MeterDetailsAdded,
            MeterStatus: details.MeterStatus,
            ShowInUse: true,
            GpsAddress: "string",
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
                InUseDate: "2022-12-09T00:34:21.646Z",
                UploadId: 0,
              },
            ],
            Id: details.Id,
            TenantId: 0,
            ParentNo: "string",
            ParentName: "string",
            PwrProviderId: 0,
            PwrProviderRefNum: "string",
            CustNum: custNum,
            CustName: custName,
            InstallationAddress: installationAddress,
            DistrictId: district,
            LocationId: 0,
            AddedOn: "2022-12-09T00:34:21.646Z",
            UpdatedOn: "2022-12-09T00:34:21.646Z",
            IsActive: true,
            IsApproved: 0,
            ApprovedBy: "string",
            ApprovedAt: "2022-12-09T00:34:21.646Z",
          },
          () => setRefresh(refresh + 3)
        );
        trigger(false);
      }}
      heading={"Edit [ " + details.CustNumDisp + " ] " + details.CustName}
    >
      Customer Number:
      <NumberInput placeholder={custNum} onChange={setCustNum} />
      <SpaceHorizontal height={10} />
      Customer Name
      <TextInput placeholder={custName} onChange={setCustName} />
      <SpaceHorizontal height={10} />
      District
      <SelectInput
        list={districts}
        listName={"District"}
        optionName={"Description"}
        optionValue={"Id"}
        value={district}
        setValue={setDistrict}
      />
      <SpaceHorizontal height={10} />
      Installation Address
      <TextInput
        placeholder={installationAddress}
        onChange={setInstallationAddress}
      />
      <SpaceHorizontal height={10} />
      Drag marker to set new location on map:
      <AddAddressMap
        lat={yLat}
        lng={xLng}
        setLat={setYLat}
        setLng={setXLng}
        setGpsAddress={setGpsAddress}
        height={200}
      />
      {gpsAddress}
      <SpaceHorizontal height={10} />
    </PopupForm>
  ) : (
    ""
  );
}

export default EditCustomer;
