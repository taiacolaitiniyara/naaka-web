import { Offline, Online } from "react-detect-offline";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./routes/welcome/Welcome";
import Login from "./routes/login/Login";
import Sidebar from "./layout/Sidebar";
import Billing from "./routes/billing/Billing";
import Changes from "./routes/changes/Changes";
import Customers from "./routes/customers/Customers";
import Home from "./routes/home/Home";
import Meters from "./routes/meters/Meters";
import Settings from "./routes/settings/Settings";
import Setup from "./routes/setup/Setup";
import Connections from "./routes/connections/Connections";
import ManagedLists from "./routes/settings/managed-lists.js/ManagedLists";
import TariffManagement from "./routes/settings/tariff-management/TariffManagement";
import TenanantManagement from "./routes/setup/TenantManagement/TenanantManagement";
import PermissionsManagement from "./routes/setup/PermissionsManagement/PermissionsManagement";

function App() {
  //console.log(JSON.parse(localStorage.getItem("userInfo")));
  return (
    <div className="App">
      <Online>
        <Router>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="user-login" element={<Login />} />
            <Route path="billing" element={<Billing />} />
            <Route path="changes" element={<Changes />} />
            <Route path="customers" element={<Customers />} />
            <Route path="connections" element={<Connections />} />
            <Route path="home" element={<Home />} />
            <Route path="meters" element={<Meters />} />
            <Route path="settings" element={<Settings />} />
            <Route path="settings/managedlists" element={<ManagedLists />} />
            <Route path="setup" element={<Setup />} />
            <Route
              path="settings/tariffmanagement"
              element={<TariffManagement />}
            />
            <Route
              path="setup/tenantmanagement"
              element={<TenanantManagement />}
            />
            <Route
              path="setup/permissions"
              element={<PermissionsManagement />}
            />
          </Routes>
        </Router>
      </Online>
      <Offline></Offline>
    </div>
  );
}

export default App;
