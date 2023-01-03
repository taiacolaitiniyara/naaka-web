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

export function refreshOnClose(setRefresh, refresh, trigger) {
  setRefresh(refresh + refresh);
  trigger(false);
}

function month(m) {
  let newMonth = "";
  switch (m) {
    case "12":
      newMonth = "Dec";
      break;
    case "11":
      newMonth = "Nov";
      break;
    case "10":
      newMonth = "Oct";
      break;
    case "09":
      newMonth = "Sep";
      break;
    case "08":
      newMonth = "Aug";
      break;
    case "07":
      newMonth = "Jul";
      break;
    case "06":
      newMonth = "Jun";
      break;
    case "05":
      newMonth = "May";
      break;
    case "04":
      newMonth = "Apr";
      break;
    case "03":
      newMonth = "Mar";
      break;
    case "02":
      newMonth = "Feb";
      break;
    case "01":
      newMonth = "Jan";
      break;
    default:
      break;
  }
  return newMonth;
}

export function DateFormatter(date) {
  if (date != null || date === undefined) {
    const splitDateAndTime = date.split("T");
    const splitDate = splitDateAndTime[0].split("-");
    return `${splitDate[2]} ${month(splitDate[1])} ${splitDate[0]}`;
  } else {
    return date;
  }
}
