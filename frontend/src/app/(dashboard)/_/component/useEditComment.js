import { editCommentApi } from "@/services/commentServices";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useEditComment() {
    const { isPending: isEditing, mutate: editComment } = useMutation({
        mutationFn: ({ commentId, data }) => editCommentApi({ commentId, data }),
        onSuccess: ({ message }) => {
            toast.success(message)
        },
        onError: (err) => {
            toast.error(err?.response?.data?.message)
        }
    })

    return { isEditing, editComment }
}