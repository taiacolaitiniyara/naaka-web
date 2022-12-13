import { Offline, Online } from "react-detect-offline";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { appRoutes } from "./reusables/Lists";
import OfflinePopup from "./routes/offline/OfflinePopup";

function App() {
  //console.log(JSON.parse(localStorage.getItem("userInfo")));

  return (
    <div className="App">
      <Online>
        <Router>
          <Routes>
            <Route
              path={appRoutes.Home.path}
              element={appRoutes.Home.element}
            />
            <Route
              path={appRoutes.Login.path}
              element={appRoutes.Login.element}
            />
            <Route
              path={appRoutes.Billing.path}
              element={appRoutes.Billing.element}
            />
            <Route
              path={appRoutes.Changes.path}
              element={appRoutes.Changes.element}
            />
            <Route
              path={appRoutes.Customers.path}
              element={appRoutes.Customers.element}
            />
            <Route
              path={appRoutes.Connections.path}
              element={appRoutes.Connections.element}
            />
            <Route
              path={appRoutes.Welcome.path}
              element={appRoutes.Welcome.element}
            />
            <Route
              path={appRoutes.Meters.path}
              element={appRoutes.Meters.element}
            />
            <Route
              path={appRoutes.Settings.path}
              element={appRoutes.Settings.element}
            />
            <Route
              path={appRoutes.ManagedLists.path}
              element={appRoutes.ManagedLists.element}
            />
            <Route
              path={appRoutes.Setup.path}
              element={appRoutes.Setup.element}
            />
            <Route
              path={appRoutes.TariffManagement.path}
              element={appRoutes.TariffManagement.element}
            />
            <Route
              path={appRoutes.MeterInventory.path}
              element={appRoutes.MeterInventory.element}
            />
            <Route
              path={appRoutes.TenantManagement.path}
              element={appRoutes.TenantManagement.element}
            />
            <Route
              path={appRoutes.PermissionsManagement.path}
              element={appRoutes.PermissionsManagement.element}
            />
            <Route
              path={appRoutes.ProcessTemplates.path}
              element={appRoutes.ProcessTemplates.element}
            />
            <Route
              path={appRoutes.MeterInventoryMain.path}
              element={appRoutes.MeterInventoryMain.element}
            />
            <Route
              path={appRoutes.MeterVendors.path}
              element={appRoutes.MeterVendors.element}
            />
            <Route
              path={appRoutes.ProcessWorkgroupsManagement.path}
              element={appRoutes.ProcessWorkgroupsManagement.element}
            />
            <Route
              path={appRoutes.AddConnection.path}
              element={appRoutes.AddConnection.element}
            />
            <Route
              path={appRoutes.ConnectionsInventory.path}
              element={appRoutes.ConnectionsInventory.element}
            />
            <Route
              path={appRoutes.ProcessZonesManagement.path}
              element={appRoutes.ProcessZonesManagement.element}
            />
            <Route
              path={appRoutes.HubsManagement.path}
              element={appRoutes.HubsManagement.element}
            />
            <Route
              path={appRoutes.SanityChecks.path}
              element={appRoutes.SanityChecks.element}
            />
          </Routes>
        </Router>
      </Online>
      <Offline>
        <OfflinePopup />
      </Offline>
    </div>
  );
}

export default App;
