export const Api = {
    baseUrl: "https://backend-osf-release-0-4-zallyo.herokuapp.com",

    getAllBooksUrl: () => Api.baseUrl+"/books/all",
    
    getCategoriesUrl: () => Api.baseUrl+"/category/all",

    getRequest: (url) => fetch(url),
    
}