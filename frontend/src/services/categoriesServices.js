import http from "./httpServices";

export async function getAllCategoriesApi() {
    return await http.get('/category/list').then(({ data }) => data.data)
}

export async function createCategoryApi(data) {
    return await http.post('/category/add', data).then(({ data }) => data.data)
}