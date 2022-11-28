export const UserName = "Sumeet";

export const TenantId = 1;

export const AuthToken = () => {
  const userInfo = localStorage.getItem("userInfo");
  if (userInfo !== null) {
    return "Bearer " + JSON.parse(userInfo).accessToken;
  } else {
    return "token";
  }
};
