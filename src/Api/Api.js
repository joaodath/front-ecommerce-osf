import { JwtHandler } from "../jwt-handler/JwtHandler";

export const Api = {
  baseUrl: "http://localhost:8000",
  // baseUrl: "https://backend-osf-release-0-1-ifzzla.herokuapp.com",

  // Endpoint - Login
  loginUrl: () => Api.baseUrl + "/auth/login",
  loginTestUrl: (pass) => Api.baseUrl + "/auth/test",

  // Endpoint - User
  createUserUrl: () => Api.baseUrl + "/user/new",

  readAllUserUrl: () => Api.baseUrl + "/user/all",

  readByIdUserUrl: (id) => Api.baseUrl + "/user/id/" + id,

  readByUsernameUserUrl: (username) => Api.baseUrl + "/user/" + username,

  updateUserUrl: (id) => Api.baseUrl + "/user/" + id,

  deleteUserUrl: (id) => Api.baseUrl + "/user/" + id,

  //jwt

  authHeader: () => ({
    Authorization: "Bearer " + JwtHandler.getJwt(),
  }),

  // GET
  buildApiGetRequest: (url, auth) =>
    fetch(url, {
      method: "GET",
      headers: auth ? new Headers(Api.authHeader()) : undefined,
    }),

  // POST
  buildApiPostRequest: (url, body, auth) =>
    fetch(url, {
      method: "POST",
      headers: new Headers({
        "Content-type": "application/json",
        ...(auth ? Api.authHeader() : {}),
      }),
      body: JSON.stringify(body),
    }),

  // PATCH
  buildApiPatchRequest: (url, body, auth) =>
    fetch(url, {
      method: "PATCH",
      headers: new Headers({
        "Content-type": "application/json",
        ...(auth ? Api.authHeader() : {}),
      }),
      body: JSON.stringify(body),
    }),

  // DELETE
  buildApiDeleteRequest: (url, auth) =>
    fetch(url, {
      method: "DELETE",
      headers: auth ? new Headers(Api.authHeader()) : undefined,
    }),
};
