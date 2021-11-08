export const Api = {
    baseUrl: "http://localhost:8000",

    getAllBooksUrl: () => Api.baseUrl+"/books/all",

    getRequest: (url) => fetch(url),
    
}