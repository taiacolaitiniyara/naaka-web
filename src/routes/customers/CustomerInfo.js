import React from "react";
import { DisplayAddressMap } from "../../reusables/Maps";

function CustomerInfo({ details }) {
  return (
    <DisplayAddressMap
      lat={details.YLat === undefined ? 0.0 : details.YLat}
      lng={details.XLng === undefined ? 0.0 : details.XLng}
      width={100}
      height={240}
    />
  );
}

export default CustomerInfo;
