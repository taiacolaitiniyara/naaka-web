import { apiRoutes } from "../api-services/ApiRoutes";
import { useFetchApiList } from "./CustomHooks";

export const sidebarList = [
  { name: "Home", to: "/home", icon: "house", id: "home-tab" },
  {
    name: "Customers",
    to: "/customers",
    icon: "users",
    id: "customers-tab",
  },
  {
    name: "Connections",
    to: "/connections",
    icon: "circle-nodes",
    id: "connections-tab",
  },
  { name: "Changes", to: "/changes", icon: "pen-to-square", id: "changes-tab" },
  {
    name: "Billing",
    to: "/billing",
    icon: "file-invoice-dollar",
    id: "billing-tab",
  },
  { name: "Meters", to: "/meters", icon: "gauge", id: "meters-tab" },
  { name: "Settings", to: "/settings", icon: "gear", id: "settings-tab" },
  { name: "Setup", to: "/setup", icon: "screwdriver-wrench", id: "setup-tab" },
];

export const settingsList = [
  {
    to: "/settings/managedlists",
    name: "Managed Lists",
  },
  {
    to: "/settings/sanitychecks",
    name: "Sanity Checks",
  },
  {
    to: "/settings/tariffmanagement",
    name: "Tariff Management",
  },
  {
    to: "/settings/processes",
    name: "Process Templates",
  },
  {
    to: "/settings/processworkgroups",
    name: "Process Workgroups",
  },
  {
    to: "/settings/meterinventory",
    name: "Meter Inventory",
  },
];

export const setupList = [
  {
    to: "/setup/tenantmanagement",
    name: "Tenant Management",
  },
  {
    to: "/setup/processzones",
    name: "Process Zones Management",
  },
  {
    to: "/setup/hubs",
    name: "Hubs Management",
  },
  {
    to: "/setup/users",
    name: "User Management",
  },
  {
    to: "/setup/permissions",
    name: "Permissions Management"
  }
];

export const TenantTypeList = [
  { Id: 1, Name: "Billing" },
  { Id: 2, Name: "Utility" },
  { Id: 3, Name: "Vendor" },
];

export const HubRolesList = (hubId, tenantId) => {
  const list = useFetchApiList(
    `/api/v1/UsersAndRoles/getRolesBelongToHub?HubId=${hubId}&TenantId=${tenantId}`
  );

  return list;
};
