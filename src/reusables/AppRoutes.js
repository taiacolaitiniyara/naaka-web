import Billing from "../routes/billing/Billing";
import Changes from "../routes/changes/Changes";
import AddConnection from "../routes/connections/add-connection/AddConnection";
import ConnectionsInventory from "../routes/connections/connection-inventory/ConnectionsInventory";
import Connections from "../routes/connections/Connections";
import ReadingRoutes from "../routes/connections/reading-routes/ReadingRoutes";
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
import SanityChecks from "../routes/settings/sanity-checks/SanityChecks";
import Settings from "../routes/settings/Settings";
import TariffManagement from "../routes/settings/tariff-management/TariffManagement";
import HubsManagement from "../routes/setup/HubsManagement/HubsManagement";
import PermissionsManagement from "../routes/setup/PermissionsManagement/PermissionsManagement";
import ProcessZonesManagement from "../routes/setup/ProcessZonesManagement/ProcessZonesManagement";
import Setup from "../routes/setup/Setup";
import TenanantManagement from "../routes/setup/TenantManagement/TenanantManagement";
import Phases from "../routes/setup/phases/Phases";
import Welcome from "../routes/welcome/Welcome";
import BillRunManagement from "../routes/billing/bill-run/BillRunManagement";

const TenantUrl = localStorage.getItem("tenantUrl");

export const appRoutes = {
  Home: {
    path: "/business/home",
    element: <Home />,
  },
  Login: {
    path: "/business/login",
    element: <Login />,
  },
  Customers: {
    path: "/business/customers",
    element: <Customers />,
  },
  Connections: {
    path: "/business/connections",
    element: <Connections />,
  },
  Changes: {
    path: "/business/changes",
    element: <Changes />,
  },
  Billing: {
    path: "/business/billing",
    element: <Billing />,
  },
  Meters: {
    path: "/business/meters",
    element: <Meters />,
  },
  Settings: {
    path: "/business/settings",
    element: <Settings />,
  },
  ManagedLists: {
    path: "/business/settings/managed-lists",
    element: <ManagedLists />,
  },
  TariffManagement: {
    path: "/business/settings/tariff-management",
    element: <TariffManagement />,
  },
  MeterInventory: {
    path: "/business/settings/meter-inventory",
    element: <MeterInventory />,
  },
  ProcessTemplates: {
    path: "/business/settings/process-templates",
    element: <ProcessTemplates />,
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
    path: "/business/meters/metervendors",
    element: <MeterVendors />,
  },
  MeterInventoryMain: {
    path: "/business/meters/meterinventory",
    element: <MeterInventoryMain />,
  },
  ProcessWorkgroupsManagement: {
    path: "/business/settings/processworkgroups",
    element: <ProcessWorkgroupManagement />,
  },
  ConnectionsInventory: {
    path: "/business/connections/connections-inventory",
    element: <ConnectionsInventory />,
  },
  AddConnection: {
    path: "/business/connections/add-connection",
    element: <AddConnection />,
  },
  ProcessZonesManagement: {
    path: "/business/setup/process-zones-management",
    element: <ProcessZonesManagement />,
  },
  HubsManagement: {
    path: "/business/setup/hubs-management",
    element: <HubsManagement />,
  },
  SanityChecks: {
    path: "/business/settings/sanity-checks",
    element: <SanityChecks />,
  },
  ReadingRoutes: {
    path: "/business/connections/reading-routes",
    element: <ReadingRoutes />,
  },
  ContractorPortal: {
    path: "/contractor",
  },
  CustomerPortal: {
    path: "/customer",
  },
  BusinessPortal: {
    path: "/business/",
  },
  PhaseManagement: {
    path: "/business/setup/phase-management",
    element: <Phases />
  },
  BillRunManagement: {
    path: "/business/billing/bill-run-management",
    element: <BillRunManagement />
  }
};
