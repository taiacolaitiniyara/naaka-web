import React, { useEffect, useState } from "react";
import Layout from "../../../layout/Layout";
import { apiRoutes } from "../../../api-services/ApiRoutes";
import { apiGet, apiPost } from "../../../api-services/ApiCalls";
import ManagedListTable from "./ManagedListTable";
import { AddButton } from "../../../reusables/Buttons";
import {
  Collapsible,
  PopupForm,
  SpaceHorizontal,
} from "../../../reusables/Elements";
import { useShadeTabs } from "../../../reusables/CustomHooks";
import { TextInput } from "../../../reusables/Inputs";
import { refreshOnClose } from "../../../reusables/Functions";

function ManagedLists() {
  useShadeTabs("settings-tab");
  const [refresh, setRefresh] = useState(1);
  const [lookupParents, setLookupParents] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  useEffect(() => {
    apiGet(apiRoutes.lookup, setLookupParents);
  }, []);
  return (
    <Layout headerText={"Managed Lists"}>
      <AddButton text={"Add New List"} onClick={() => setShowAdd(true)} />
      <SpaceHorizontal height={10} />
      {lookupParents.map((l, i) => (
        <div key={i}>
          <Collapsible
            title={l.LookupTypeName}
            child={<ManagedListTable title={l.LookupTypeName} type={l.Id} />}
          />
        </div>
      ))}
      {showAdd && (
        <AddManagedList
          refresh={refresh}
          setRefresh={setRefresh}
          trigger={setShowAdd}
        />
      )}
    </Layout>
  );
}

function AddManagedList({ trigger, refresh, setRefresh }) {
  const [listName, setListName] = useState();
  function add() {
    apiPost(
      apiRoutes.addLookupParent,
      {
        HubId: 0,
        Mapped: true,
        Order: 1,
        HasResponses: true,
        HasHelperText: true,
        IsRequired: true,
        Grid: true,
        EditPermission: true,
        ChangeMandatory: true,
        NeedDescriptionBool: true,
        MultiselectBool: true,
        IsTimeDependentBool: true,
        MandatoryBool: true,
        HasColorBool: true,
        HasClassificationBool: true,
        AlphabeticalSortBool: true,
        Id: 0,
        TenantId: 0,
        LookupTypeName: listName,
        IsActive: true,
        NeedDescription: true,
        Multiselect: false,
        IsTimeDependent: false,
        Mandatory: false,
        HasColor: true,
        HasClassification: false,
        AlphabeticalSort: true,
      },
      refreshOnClose(setRefresh, refresh, trigger)
    );
  }
  return trigger ? (
    <PopupForm
      width={400}
      onSubmit={add}
      submitBtnText={"Save"}
      trigger={trigger}
      heading={"Add Managed List"}
    >
      <TextInput placeholder={"List Name"} onChange={setListName} />
    </PopupForm>
  ) : (
    ""
  );
}

function EditManagedList({ trigger, refresh, setRefresh, details }) {
  const [listName, setListName] = useState();
  function add() {
    apiPost(
      apiRoutes.addLookupParent,
      {
        HubId: 0,
        Mapped: true,
        Order: 1,
        HasResponses: true,
        HasHelperText: true,
        IsRequired: true,
        Grid: true,
        EditPermission: true,
        ChangeMandatory: true,
        NeedDescriptionBool: true,
        MultiselectBool: true,
        IsTimeDependentBool: true,
        MandatoryBool: true,
        HasColorBool: true,
        HasClassificationBool: true,
        AlphabeticalSortBool: true,
        Id: details.Id,
        TenantId: 0,
        LookupTypeName: listName,
        IsActive: true,
        NeedDescription: 1,
        Multiselect: 0,
        IsTimeDependent: 0,
        Mandatory: 0,
        HasColor: 1,
        HasClassification: 0,
        AlphabeticalSort: 1,
      },
      refreshOnClose(setRefresh, refresh, trigger)
    );
  }
  return trigger ? (
    <PopupForm
      width={400}
      onSubmit={add}
      submitBtnText={"Save"}
      trigger={trigger}
      heading={"Add Managed List"}
    >
      <TextInput
        value={listName}
        placeholder={"List Name"}
        onChange={setListName}
      />
    </PopupForm>
  ) : (
    ""
  );
}

export default ManagedLists;
