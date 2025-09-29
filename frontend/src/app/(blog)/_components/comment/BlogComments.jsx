'use client'
import { useState } from "react";
import Comment from "./Comment";
import Button from "@/ui/Button";
import Modal from "@/ui/Modal";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import CreateCommentForm from "./CreateCommentForm";

function BlogComments({ blog: { comments, _id: blogId } }) {
    const [isOpen, setIsOpen] = useState(false)
    const [parent, setParent] = useState(null)
    const { user } = useAuth()
    const router = useRouter()

    const addNewCommentHandler = (value) => {
        if (!user) {
            router.push('/signin')
        }
        setParent(value)
        setIsOpen(true)
    }

    return (
        <>
            <div className="mb-10">
                <div className="mb-2 flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-secondary-0">نظرات</h2>
                    <Button
                        onClick={() => addNewCommentHandler(null)}
                        variant={'white'}
                        className={'font-normal'}
                    >
                        ثبت نظر جدید
                    </Button>
                </div>
                <Modal
                    title={parent ? "پاسخ به نظر" : "نظر جدید"}
                    description={parent ? parent.user.name : "نظر خود را وارد کنید"}
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                >
                    <CreateCommentForm
                        blogId={blogId}
                        parentId={parent?._id || null}
                        onClose={() => setIsOpen(false)}
                    />
                </Modal>
                <div className="space-y-8 post-comments bg-secondary-950 rounded-xl py-6 px-3 lg:px-6 ">
                    {comments.length > 0 ? (
                        comments.map((comment) => {
                            return (
                                <div key={comment._id}>
                                    <div className="border border-secondary-700 rounded-xl p-2 sm:p-4 mb-3">
                                        <Comment
                                            comment={comment}
                                            addNewCommentHandler={addNewCommentHandler}
                                        />
                                    </div>
                                    <div className="post-comments__answer mr-2 sm:mr-8 space-y-3">
                                        {comment.answers.map((item, index) => {
                                            return (
                                                <div key={item._id} className="relative">
                                                    <div
                                                        className={"answer-item border border-secondary-800 bg-secondary-800/80 rounded-xl p-2 sm:p-4"}
                                                    >
                                                        <Comment comment={item} key={item._id} />
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <p className="text-secondary-400">برای این پست نظری ثبت نشده است</p>
                    )}
                </div>
            </div>
        </>
    );
}
export default BlogComments;
