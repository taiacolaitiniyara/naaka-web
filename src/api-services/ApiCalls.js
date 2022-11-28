import { AuthToken } from "../reusables/Constants";
import { apiRoutes } from "./ApiRoutes";



export const apiGet = (url, set, refresh) => {
  //log("AuthToken()", AuthToken());

  fetch(apiRoutes.baseUrl + url, {
    method: "GET",
    headers: {
      accept: "*/*",
      Authorization: AuthToken(),
    },
  })
    .then((r) => r.json())
    .then((res) => {
      set(res);
    })
    .then(() => {
      if (refresh !== undefined) {
        refresh();
      }
    })
    .catch((e) => console.log("GET Call Error => ", e, url));
};

export const apiGetWithTwoParameters = (
  url,
  param1,
  value1,
  param2,
  value2,
  set,
  refresh
) => {
  fetch(
    apiRoutes.baseUrl +
      url +
      param1 +
      "=" +
      value1 +
      "&" +
      param2 +
      "=" +
      value2,
    {
      method: "GET",
      headers: {
        accept: "*/*",
        Authorization: AuthToken(),
      },
    }
  )
    .then((r) => r.json())
    .then((res) => {
      set(res);
    })
    .then(() => {
      if (refresh !== undefined) {
        refresh();
      }
    })
    .catch((e) => console.log("GET Call Error => ", e, url));
};

export const apiPost = (url, body, functions) => {
  fetch(apiRoutes.baseUrl + url, {
    method: "POST",
    headers: {
      accept: "*/*",
      "Content-Type": "application/json",
      Authorization: AuthToken(),
    },
    body: JSON.stringify(body),
  })
    .then((r) => r.json())
    .then((res) => {
      console.log(res);
      if (functions !== undefined) {
        functions();
      }
    })
    .catch((e) => console.log("POST Call Error => ", e));
};

export const apiPostFiles = (url, body, refresh) => {
  fetch(apiRoutes.baseUrl + url, {
    method: "POST",
    headers: {
      accept: "*/*",
      "Content-Type": `multipart/form-data`,
      Authorization: AuthToken(),
    },
    body: JSON.stringify(body),
  })
    .then((r) => r.json())
    .then((res) => {
      console.log(res);
      if (refresh !== undefined) {
        refresh();
      }
    })
    .catch((e) => console.log("POST Call Error => ", e));
};

export const apiPut = (url, body, refresh) => {
  fetch(apiRoutes.baseUrl + url, {
    method: "PUT",
    headers: {
      accept: "*/*",
      "Content-Type": "application/json",
      Authorization: AuthToken(),
    },
    body: JSON.stringify(body),
  })
    .then((r) => r.json())
    .then((res) => {
      console.log(res);
      if (refresh !== undefined) {
        refresh();
      }
    })
    .catch((e) => console.log("PUT Call Error => ", e));
};

export const verifyToken = (route) => {
  fetch(apiRoutes.baseUrl + apiRoutes.verifyAuthToken, {
    method: "POST",
    headers: {
      accept: "*/*",
      "Content-Type": "application/json",
      Authorization: AuthToken(),
    },
  })
    .then((r) => r.json())
    .then((res) => {
      if (res === false) {
        window.location.href = "/user-login";
      } else if (route !== undefined) {
        window.location.href = route;
      }
    })
    .catch((e) => console.log("POST Call Error => ", e));
};
