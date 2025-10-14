import { editBlogApi } from "@/services/blogServices";
import { useMutation } from "@tanstack/react-query";

export default function useEditBlog() {
    const {isPending: isEditing, mutate: editBlog} = useMutation({
        mutationFn: editBlogApi,
        onSuccess: ({ message }) => {
            toast.success(message)
        },
        onError: (err) => {
            toast.error(err?.response?.data?.message)
        }
    })

    return {isEditing, editBlog}
}