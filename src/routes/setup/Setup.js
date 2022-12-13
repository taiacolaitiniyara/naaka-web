import React, { useState } from "react";
import Layout from "../../layout/Layout";
import { useShadeTabs } from "../../reusables/CustomHooks";
import { MenuListItem } from "../../reusables/Elements";
import { setupList } from "../../reusables/Lists";

function Setup() {
  useShadeTabs("setup-tab");

  return (
    <Layout headerText={"Setup"}>
      {setupList
        .sort((a, b) => {
          return a.name > b.name ? 1 : -1;
        })
        .map((s, i) => (
          <MenuListItem key={i} name={s.name} to={s.to} />
        ))}
    </Layout>
  );
}

export default Setup;
