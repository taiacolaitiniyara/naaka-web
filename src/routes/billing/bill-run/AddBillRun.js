import React, { useState } from "react";
import { PopupForm } from "../../../reusables/Elements";
import { DateTimeInput } from "../../../reusables/Inputs";
import { apiPost } from "../../../api-services/ApiCalls";
import { apiRoutes } from "../../../api-services/ApiRoutes";
import { refreshOnClose } from "../../../reusables/Functions";

function AddBillRun({ refresh, setRefresh, trigger }) {
  const [billMthEnd, setBillMthEnd] = useState();
  return (
    <PopupForm
      heading={"Add Bill Run"}
      trigger={trigger}
      submitBtnText={"Submit"}
      onSubmit={() => {
        apiPost(
          apiRoutes.billRun,
          {
            Id: 0,
            TenantId: 0,
            BillRunId: 0,
            BillingMthEnd: billMthEnd,
            UnreadMtrs: 0,
            ReadMtrs: 0,
            UnchargedMtrs: 0,
            ChargedMtrs: 0,
            ExemptedMtrs: 0,
            BilledMtrs: 0,
            BillStatusId: 0,
            DateAdded: "2022-12-28T06:02:41.061Z",
            AddedBy: "string",
          },
          () => refreshOnClose(setRefresh, refresh, trigger)
        );
      }}
    >
      Bill Month End
      <DateTimeInput onChange={setBillMthEnd} />
    </PopupForm>
  );
}

export default AddBillRun;
