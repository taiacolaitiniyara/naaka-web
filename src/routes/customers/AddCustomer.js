import React, { useState } from "react";
import { apiRoutes } from "../../api-services/ApiRoutes";
import { useFetchApiList } from "../../reusables/CustomHooks";
import { SpaceHorizontal } from "../../reusables/Elements";
import { SelectInput, TextInput } from "../../reusables/Inputs";
import { AddAddressMap } from "../../reusables/Maps";

function AddCustomer() {
  const districts = useFetchApiList(apiRoutes.getLookUps + 3);
  const [custName, setCustName] = useState();

  return (
    <form>
      <h3>Add Customer</h3>
      <SpaceHorizontal height={10} />
      <TextInput placeholder={"Name"} onChange={setCustName} />
      <SpaceHorizontal height={10} />
      <SelectInput
        list={districts}
        listName={"District"}
        optionName={"Description"}
        optionValue={"Id"}
      />
      <SpaceHorizontal height={10} />
      <AddAddressMap width={"100%"} height={"300px"} />
    </form>
  );
}

export default AddCustomer;
