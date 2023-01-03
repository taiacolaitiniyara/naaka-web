import React from "react";
import { SpaceHorizontal } from "../../../reusables/Elements";

function CustDetails({ details }) {
  return (
    <div>
      <SpaceHorizontal height={10} />
      <p>
        <strong>Cust ID:</strong> {details === undefined ? "" : details.Id}
      </p>
      <p>
        <strong>Cust Num:</strong>{" "}
        {details === undefined ? "" : details.CustNum}
      </p>
      <p>
        <strong>Cust Name:</strong>{" "}
        {details === undefined ? "" : details.CustName}
      </p>
    </div>
  );
}

export default CustDetails;
