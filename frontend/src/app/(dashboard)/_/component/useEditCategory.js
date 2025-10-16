import { editCategoryApi } from "@/services/categoriesServices";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useEditCategory() {
    const { isPending: isEditing, mutate: editCategory } = useMutation({
        mutationFn: editCategoryApi,
        onSuccess: ({ message }) => {
            toast.success(message)
        },
        onError: (err) => {
            toast.error(err?.response?.data?.message)
        }
    })

    return { isEditing, editCategory }
}