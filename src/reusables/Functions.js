import { useState } from "react";
import { apiPost } from "../api-services/ApiCalls";

export const LicenseKeyGenerator = (tenantName, onChange) => {
  const int = Math.random() * (9999 - 1000) + 1000;
  const splitTenantName = tenantName.split(" ");
  let abbrev = [];
  splitTenantName.forEach((i) => {
    const splitI = i.split("");
    abbrev.push(splitI[0]);
  });
  const splitNumber = int.toString().split("");
  let newKey = [];
  splitNumber.forEach((e) => {
    var newE = "";
    if (e === "3") {
      newE = e + abbrev[0];
    } else if (e === "5") {
      newE = e + abbrev[1];
    } else {
      newE = e;
    }
    newKey.push(newE);
  });
  onChange(newKey.join(""));
};

export function addToApi(route, body, refresh) {
  apiPost(route, body, refresh);
}

export function RefreshOnAddOrEdit() {
  const [v, setV] = useState(0);
  setV(v + 0);
  return v;
}
