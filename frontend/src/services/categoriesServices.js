import http from "./httpServices";

export async function getAllCategoriesApi() {
    return await http.get('/category/list').then(({ data }) => data.data)
}

export async function createCategoryApi(data) {
    return await http.post('/category/add', data).then(({ data }) => data.data)
}

export async function getCategoryByIdApi(id) {
    const { categories } = await http.get('/category/list').then(({ data }) => data.data)
    const category = categories.find(category => category._id == id);

    return { category }
}

export async function editCategoryApi({ categoryId, data }) {
    return await http.patch(`/category/update/${categoryId}`, data).then(({ data }) => data.data)
}

export async function deleteCategoryApi(categoryId) {
    return await http.delete(`/category/remove/${categoryId}`).then(({ data }) => data.data)
}