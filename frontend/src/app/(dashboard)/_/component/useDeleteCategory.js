import { deleteCategoryApi } from "@/services/categoriesServices";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useDeleteCategory() {
    const { isPending: isDeleting, mutate: deleteCategory } = useMutation({
        mutationFn: deleteCategoryApi,
        onSuccess: ({ message }) => {
            toast.success(message)
        },
        onError: (err) => {
            toast.error(err?.response?.data?.message)
        }
    })

    return { isDeleting, deleteCategory }
}