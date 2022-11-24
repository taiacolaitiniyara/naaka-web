export const UserName = "Sumeet";

export const TenantId = 1;

export const AuthToken = `Bearer ${
  JSON.parse(localStorage.getItem("userInfo")).accessToken
}`;
