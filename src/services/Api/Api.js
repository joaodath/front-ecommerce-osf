export const Api = {
    baseUrl: "https://backend-osf-release-0-2-i5xlpw.herokuapp.com",

    getAllBooksUrl: () => Api.baseUrl+"/books/all",
    
    getCategoriesUrl: () => Api.baseUrl+"/category/all",

    getRequest: (url) => fetch(url),
    
}