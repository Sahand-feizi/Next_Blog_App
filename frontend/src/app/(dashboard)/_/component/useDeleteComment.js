import { deleteCommentApi } from "@/services/commentServices";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export default function useDeleteComment() {
  const { isPending: isDeleting, mutate: deleteComment } = useMutation({
    mutationFn: (commentId) => deleteCommentApi(commentId),
    onSuccess: ({ message }) => {
      toast.success(message);
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message || "خطا در حذف نظر");
    },
  });

  return { isDeleting, deleteComment };
}
