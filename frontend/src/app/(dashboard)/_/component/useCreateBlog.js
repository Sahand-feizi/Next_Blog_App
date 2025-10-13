import { createBlogApi } from "@/services/blogServices";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useCreateBlog() {
    const { isPending: isCreating, mutate: createNewBlog } = useMutation({
        mutationFn: createBlogApi,
        onSuccess: ({ message }) => {
            toast.success(message)
        },
        onError: (err) => {
            toast.error(err?.response?.data?.message)
        }
    })

    return { isCreating, createNewBlog }
}