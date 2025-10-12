import { getAllCategoriesApi } from "@/services/categoriesServices";
import { useQuery } from "@tanstack/react-query";

export default function useGetCategories() {
    const { isPending: isLoading, data } = useQuery({
        queryKey: ['categories'],
        queryFn: getAllCategoriesApi
    })

    const { categories = [] } = data || []

    const selectCategories = categories.map(item => {
        return {
            _id: item._id,
            value: item._id,
            title: item.title
        }
    })

    return { categories, selectCategories }
}