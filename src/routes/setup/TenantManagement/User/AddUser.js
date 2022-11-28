import React, { useState } from "react";
import { apiPost } from "../../../../api-services/ApiCalls";
import { apiRoutes } from "../../../../api-services/ApiRoutes";
import { PopupForm, SpaceHorizontal } from "../../../../reusables/Elements";
import {
  DoubleInputs,
  EmailInput,
  PasswordInput,
  SelectInput,
  TextAreaInput,
  TextInput,
} from "../../../../reusables/Inputs";
import { HubRolesList } from "../../../../reusables/Lists";

function AddUser({ trigger, hubId, tenantId }) {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [role, setRole] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [phone, setPhone] = useState("");
  const [mobile, setMobile] = useState();
  const [note, setNote] = useState("");
  const [location, setLocation] = useState();
  const [title, setTitle] = useState();
  const [org, setOrg] = useState();
  function addUser() {
    console.log({
      Email: email,
      Fname: firstName,
      Lname: lastName,
      Password: password,
      ConfirmPassword: confirmPassword,
      RoleId: role,
      PhoneNumber: phone,
      MobileNumber: mobile,
      Note: note,
      Location: location,
      Title: title,
      Organisation: org,
      HubId: hubId,
    });
    if (confirmPassword !== password) {
      alert("Passwords must match. Please try again.");
    } else {
      apiPost(apiRoutes.createUser, {
        Email: email,
        Fname: firstName,
        Lname: lastName,
        Password: password,
        ConfirmPassword: confirmPassword,
        RoleId: role,
        PhoneNumber: phone,
        MobileNumber: mobile,
        Note: note,
        Location: location,
        Title: title,
        Organisation: org,
        HubId: hubId,
      });
    }
  }
  return trigger ? (
    <PopupForm
      width={500}
      trigger={trigger}
      submitBtnText={"Save"}
      onSubmit={addUser}
      heading={"Add User to Hub"}
    >
      <DoubleInputs
        input1={
          <TextInput
            required={true}
            placeholder={"First Name"}
            onChange={setFirstName}
          />
        }
        input2={
          <TextInput
            required={true}
            placeholder={"Last Name"}
            onChange={setLastName}
          />
        }
        width1={50}
        width2={50}
      />
      <SpaceHorizontal height={10} />

      <DoubleInputs
        input1={
          <TextInput
            required={true}
            onChange={setTitle}
            placeholder={"Title e.g. DevOps"}
          />
        }
        input2={
          <TextInput
            required={true}
            onChange={setOrg}
            placeholder={"Organisation"}
          />
        }
        width1={40}
        width2={60}
      />
      <SpaceHorizontal height={10} />
      <SelectInput setValue={setRole} list={HubRolesList(hubId, tenantId)} listName={"Role"} optionName={"Name"} optionValue={"Id"} />
      <SpaceHorizontal height={10} />
      <EmailInput required={true} onChange={setEmail} placeholder={"Email"} />
      <SpaceHorizontal height={10} />
      <DoubleInputs
        input1={
          <TextInput onChange={setMobile} placeholder={"Phone (optional)"} />
        }
        input2={
          <TextInput
            required={true}
            onChange={setMobile}
            placeholder={"Mobile"}
          />
        }
        width1={50}
        width2={50}
      />
      <SpaceHorizontal height={10} />
      <DoubleInputs
        input1={
          <PasswordInput
            required={true}
            onChange={setPassword}
            placeholder={"Password"}
          />
        }
        input2={
          <PasswordInput
            required={true}
            onChange={setConfirmPassword}
            placeholder={"ConfirmPassword"}
          />
        }
        width1={50}
        width2={50}
      />
      <SpaceHorizontal height={10} />
      <TextAreaInput onChange={setNote} placeholder={"Notes"} />
      <SpaceHorizontal height={10} />
      <TextInput
        required={true}
        onChange={setLocation}
        placeholder={"Location"}
      />
    </PopupForm>
  ) : (
    ""
  );
}

export default AddUser;
