import Billing from "../routes/billing/Billing";
import Changes from "../routes/changes/Changes";
import AddConnection from "../routes/connections/add-connection/AddConnection";
import ConnectionsInventory from "../routes/connections/connection-inventory/ConnectionsInventory";
import Connections from "../routes/connections/Connections";
import Customers from "../routes/customers/Customers";
import Home from "../routes/home/Home";
import Login from "../routes/login/Login";
import MeterInventoryMain from "../routes/meters/meter-inventory/MeterInventoryMain";
import Meters from "../routes/meters/Meters";
import MeterVendors from "../routes/meters/meters-by-vendor/MeterVendors";
import ManagedLists from "../routes/settings/managed-lists.js/ManagedLists";
import MeterInventory from "../routes/settings/meter-inventory/MeterInventory";
import ProcessTemplates from "../routes/settings/process-templates/ProcessTemplates";
import ProcessWorkgroupManagement from "../routes/settings/process-workgroups/ProcessWorkgroupManagement";
import Settings from "../routes/settings/Settings";
import TariffManagement from "../routes/settings/tariff-management/TariffManagement";
import PermissionsManagement from "../routes/setup/PermissionsManagement/PermissionsManagement";
import Setup from "../routes/setup/Setup";
import TenanantManagement from "../routes/setup/TenantManagement/TenanantManagement";
import Welcome from "../routes/welcome/Welcome";

export const appRoutes = {
  Home: {
    path: "/home",
    element: <Home />,
  },
  Login: {
    path: "/login",
    element: <Login />
  },
  Customers: {
    path: "/customers",
    element: <Customers />,
  },
  Connections: {
    path: "/connections",
    element: <Connections />,
  },
  Changes: {
    path: "/changes",
    element: <Changes />,
  },
  Billing: {
    path: "/billing",
    element: <Billing />,
  },
  Meters: {
    path: "/meters",
    element: <Meters />,
  },
  Settings: {
    path: "/settings",
    element: <Settings />,
  },
  ManagedLists: {
    path: "/settings/managed-lists",
    element: <ManagedLists />,
  },
  TariffManagement: {
    path: "/settings/tariff-management",
    element: <TariffManagement />,
  },
  MeterInventory: {
    path: "/settings/meter-inventory",
    element: <MeterInventory />
  },
  ProcessTemplates: {
    path: "/settings/process-templates",
    element: <ProcessTemplates />
  },
  Setup: {
    path: "/setup",
    element: <Setup />,
  },
  PermissionsManagement: {
    path: "/setup/permissions-management",
    element: <PermissionsManagement />,
  },
  TenantManagement: {
    path: "/setup/tenant-management",
    element: <TenanantManagement />,
  },
  Welcome: {
    path: "/",
    element: <Welcome />,
  },
  MeterVendors: {
    path: "/meters/metervendors",
    element: <MeterVendors />
  },
  MeterInventoryMain: {
    path: "/meters/meterinventory",
    element: <MeterInventoryMain />
  },
  ProcessWorkgroupsManagement: {
    path: "/settings/processworkgroups",
    element: <ProcessWorkgroupManagement />
  },
  ConnectionsInventory: {
    path: "/connections/connections-inventory",
    element: <ConnectionsInventory />
  },
  AddConnection: {
    path: "/connections/add-connection", 
    element: <AddConnection />
  }
};
