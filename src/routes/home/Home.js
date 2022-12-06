import React from "react";
import Layout from "../../layout/Layout";
import { useShadeTabs } from "../../reusables/CustomHooks";
import { sidebarList } from "../../reusables/Lists";

function Home() {
  useShadeTabs("home-tab");
  return <Layout headerText={"Home"}>Home</Layout>;
}

export default Home;
