import { useFetchApiList } from "./CustomHooks";
import { appRoutes } from "./AppRoutes";

const sidebarList = [
  { name: "Home", to: appRoutes.Home.path, icon: "house", id: "home-tab" },
  {
    name: "Customers",
    to: appRoutes.Customers.path,
    icon: "users",
    id: "customers-tab",
  },
  {
    name: "Connections",
    to: appRoutes.Connections.path,
    icon: "circle-nodes",
    id: "connections-tab",
  },
  {
    name: "Changes",
    to: appRoutes.Changes.path,
    icon: "pen-to-square",
    id: "changes-tab",
  },
  {
    name: "Billing",
    to: appRoutes.Billing.path,
    icon: "file-invoice-dollar",
    id: "billing-tab",
  },
  {
    name: "Meters",
    to: appRoutes.Meters.path,
    icon: "gauge",
    id: "meters-tab",
  },
  {
    name: "Settings",
    to: appRoutes.Settings.path,
    icon: "gear",
    id: "settings-tab",
  },
  {
    name: "Setup",
    to: appRoutes.Setup.path,
    icon: "screwdriver-wrench",
    id: "setup-tab",
  },
];

const settingsList = [
  {
    to: appRoutes.ManagedLists.path,
    name: "Managed Lists",
  },
  {
    to: appRoutes.SanityChecks.path,
    name: "Sanity Checks",
  },
  {
    to: appRoutes.TariffManagement.path,
    name: "Tariff Management",
  },
  {
    to: appRoutes.ProcessTemplates.path,
    name: "Process Templates",
  },
  {
    to: appRoutes.ProcessWorkgroupsManagement.path,
    name: "Process Workgroups",
  },
  {
    to: appRoutes.MeterInventory.path,
    name: "Meter Inventory",
  },
];

const metersMenuList = [
  { to: appRoutes.MeterInventoryMain.path, name: "Meter Inventory" },
  { to: appRoutes.MeterVendors.path, name: "Meters By Vendor" },
];

const setupList = [
  {
    to: appRoutes.TenantManagement.path,
    name: "Tenant Management",
  },
  {
    to: appRoutes.ProcessZonesManagement.path,
    name: "Process Zones Management",
  },
  {
    to: appRoutes.HubsManagement.path,
    name: "Hubs Management",
  },
  {
    to: "/setup/users",
    name: "User Management",
  },
  {
    to: appRoutes.PermissionsManagement.path,
    name: "Permissions Management",
  },
  {
    to: appRoutes.PhaseManagement.path,
    name: "Phase Management"
  }
];

const billingMenuList = [
  {
    to: appRoutes.BillRunManagement.path,
    name: "Bill Run Management",
  },
];

const connectionsMenuList = [
  { to: appRoutes.AddConnection.path, name: "Add Connection" },
  { to: appRoutes.ConnectionsInventory.path, name: "Connections Inventory" },
  { to: appRoutes.ReadingRoutes.path, name: "Reading Routes" },
];

const TenantTypeList = [
  { Id: 1, Name: "Billing" },
  { Id: 2, Name: "Utility" },
  { Id: 3, Name: "Vendor" },
];

const HubRolesList = (hubId, tenantId) => {
  const list = useFetchApiList(
    `/api/v1/UsersAndRoles/getRolesBelongToHub?HubId=${hubId}&TenantId=${tenantId}`
  );

  return list;
};

const DepotTypes = [
  { id: 1, name: "Manned" },
  { id: 2, name: "Unmanned" },
];

export {
  sidebarList,
  settingsList,
  setupList,
  TenantTypeList,
  HubRolesList,
  appRoutes,
  metersMenuList,
  connectionsMenuList,
  DepotTypes,
  billingMenuList
};
