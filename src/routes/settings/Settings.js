import React from "react";
import Layout from "../../layout/Layout";
import { useShadeTabs } from "../../reusables/CustomHooks";
import { MenuListItem } from "../../reusables/Elements";
import { settingsList } from "../../reusables/Lists";

function Settings() {
  useShadeTabs("settings-tab")
  return (
    <Layout headerText={"Settings"}>
      {settingsList.sort((a, b) => {
        return a.name > b.name ? 1 : -1;
      }).map((s, i) => (
        <MenuListItem key={i} name={s.name} to={s.to} />
      ))}
    </Layout>
  );
}

export default Settings;
