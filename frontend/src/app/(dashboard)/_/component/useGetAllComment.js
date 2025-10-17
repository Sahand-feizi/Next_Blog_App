import { getAllCommentApi } from "@/services/commentServices";
import toLocalDateShort from "@/utils/dateFormatter";
import { useQuery } from "@tanstack/react-query";

export function useGetAllComment() {
    const { data, isPending: isLoading } = useQuery({
        queryFn: getAllCommentApi,
        queryKey: ['comments']
    })

    const labels = [
        "فروردین",
        "اردیبهشت",
        "خرداد",
        "تیر",
        "مرداد",
        "شهریور",
        "مهر",
        "آبان",
        "آذر",
        "دی",
        "بهمن",
        "اسفند",
    ];

    const ChartYearComment = labels.map(label => {
        const count = data?.comments?.filter(comment => {
            const dateStr = toLocalDateShort(comment.updatedAt, {
                month: "long",
            });
            return dateStr.includes(label);
        }).length;

        return count;
    });

    const { comments = [] } = data || {};
    const numOfAcceptedComments = comments?.filter(comment => comment.status == 2).length;
    const numOfRejectedComments = comments?.filter(comment => comment.status == 0).length;
    const numOfReviewComments = comments?.filter(comment => comment.status == 1).length;

    return { comments, numOfAcceptedComments, numOfRejectedComments, numOfReviewComments, ChartYearComment }
}