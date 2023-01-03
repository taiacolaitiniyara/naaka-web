import React from "react";
import {
  DataWithLabelDisplay,
  PopupDetails,
  SpaceHorizontal,
} from "../../reusables/Elements";
import { DoubleInputs } from "../../reusables/Inputs";
import { DateFormatter } from "../../reusables/Functions";

function CustDetails({ trigger, custDetails, connDetails }) {
  return (
    <PopupDetails heading={"Customer Details:"} trigger={trigger}>
      <DoubleInputs
        input1={
          <DataWithLabelDisplay
            data={custDetails.CustNumDisp}
            dataId={custDetails.CustNumDisp}
            label={"Cust Num"}
          />
        }
        input2={
          <DataWithLabelDisplay
            data={custDetails.CustName}
            dataId={custDetails.CustName}
            label={"Cust Name"}
          />
        }
      />
      <SpaceHorizontal height={10} />

      <DataWithLabelDisplay
        data={custDetails.DistrictName}
        dataId={custDetails.DistrictName}
        label={"District"}
      />
      <SpaceHorizontal height={10} />
      <DataWithLabelDisplay
        data={custDetails.InstallationAddress}
        dataId={custDetails.InstallationAddress}
        label={"Address"}
      />
      <SpaceHorizontal height={10} />
      <DataWithLabelDisplay
        data={connDetails.TariffType}
        dataId={connDetails.Tariff}
        label={"Tariff Type"}
      />
      <SpaceHorizontal height={10} />
      <DataWithLabelDisplay
        label={"Date Added"}
        data={DateFormatter(custDetails.AddedOn)}
        dataId={DateFormatter(custDetails.AddedOn)}
      />
    </PopupDetails>
  );
}

export default CustDetails;
