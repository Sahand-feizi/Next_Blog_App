import { deleteBlogApi } from "@/services/blogServices";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useDeleteBlog() {
    const { isPending: isDeleting, mutate: deleteBlog } = useMutation({
        mutationFn: deleteBlogApi,
        onSuccess: ({ message }) => {
            toast.success(message)
        },
        onError: (err) => {
            toast.error(err?.response?.data?.message)
        }
    })

    return { isDeleting, deleteBlog }
}