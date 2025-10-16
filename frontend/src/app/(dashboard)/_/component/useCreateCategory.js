import { createCategoryApi } from "@/services/categoriesServices";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useCreateCategory() {
    const { isPending: isCreating, mutate: createCategory } = useMutation({
        mutationFn: createCategoryApi,
        onSuccess: ({ message }) => {
            toast.success(message)
        },
        onError: (err) => {
            toast.error(err?.response?.data?.message)
        }
    })

    return { isCreating, createCategory }
}