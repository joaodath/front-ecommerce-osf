export const Api = {
    baseUrl: "https://backend-osf-release-0-1-ifzzla.herokuapp.com",

    getAllBooksUrl: () => Api.baseUrl+"/books/all",

    getRequest: (url) => fetch(url),
    
}