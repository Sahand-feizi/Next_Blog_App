import http from "./httpServices";

export async function getAllCategoriesApi(){
    return await http.get('/category/list').then(({data}) => data.data)
}