import { JwtHandler } from "../jwt-handler/JwtHandler";

export const Api = {
  baseUrl: "https://backend-osf-release-0-6-0wwika.herokuapp.com",
  // "https://backend-osf-5.herokuapp.com",
  // "https://backend-osf-release-0-6-0wwika.herokuapp.com/",
  // "https://backend-osf-release-0-4-zallyo.herokuapp.com",
  // "https://backend-osf-release-0-3-h28izb.herokuapp.com",
  // "https://backend-osf-release-0-2-i5xlpw.herokuapp.com",
  // "https://backend-osf-release-0-1-ifzzla.herokuapp.com",
  // "http://localhost:8000",


    
  // Endpoint - Login
  loginUrl: () => Api.baseUrl + "/auth/login",
  
  loginTestUrl: (pass) => Api.baseUrl + "/auth/test",
  
  
  // Endpoint - User
  createUserUrl: () => Api.baseUrl + "/user/new",

  readAllUserUrl: () => Api.baseUrl + "/user/all",  

  readUserUrl: () => Api.baseUrl + "/user/",
  
  readByIdUserUrl: (id) => Api.baseUrl + "/user/id/" + id,
  
  readByUsernameUserUrl: () => Api.baseUrl + "/user",
  
  updateUserUrl: (username) => Api.baseUrl + "/user/update",
  
  deleteSoftUserUrl: (username) => Api.baseUrl + "/user/softdelete/" + username,
  
  inativeUserUrl: (username) => Api.baseUrl + "/user/disable/",
  
  deleteUserUrl: (username) => Api.baseUrl + "/user/del/" + username,



  //cart  
  readAllUserShoppingHistoryUrl: () => Api.baseUrl + "/shopping-history/all/", 
  
  
  
  //CEP
  cepUrl: () => Api.baseUrl + "/cep/find",
  




  // Endpoint - Products - Books

  createBookUrl: () => Api.baseUrl + "/books/new",

  readAllBookUrl: () => Api.baseUrl + "/books/all",

  readBookByIdUrl: (id) => Api.baseUrl + "/books/id/" + id,

  readBookByTitle: (title) => Api.baseUrl + `/books/title/${title}`,
  
  readBooksByCategoryUrl: (category) => Api.baseUrl + `/books/category/${category}`,
  
  readBooksByAuthorUrl: (author) => Api.baseUrl + `/books/author/${author}`,
  
  readBooksByPublisherUrl: (publisher) => Api.baseUrl + `/books/publisher/${publisher}`,

  // Endpoint - Categories

  readAllCategoryUrl: () => Api.baseUrl + "/category/all",

  // Endpoint - Authors

  readAllAuthorUrl: () => Api.baseUrl + "/author/all",

  // Endpoint - Publishers

  readAllPublisherUrl: () => Api.baseUrl + "/publisher/all",

  //jwt

  authHeader: () => ({
    Authorization: "Bearer " + localStorage.getItem("JWT"),
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
