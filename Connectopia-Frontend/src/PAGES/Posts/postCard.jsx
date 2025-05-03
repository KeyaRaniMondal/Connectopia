import React, { useState } from 'react';
import PostHeader from './postHeader';
import { MessageCircle, Share2Icon, ThumbsUp } from 'lucide-react';
import { useAuthStore } from '../../Store/useAuthStore';
import toast from 'react-hot-toast';
import { usePostStore } from '../../Store/usePostStore';
import { axiosInstance } from '../../lib/axios';

const PostCard = ({ post }) => {
    if (!post) return null;

    const { authUser } = useAuthStore();
    const user = authUser;
    const { posts, setPosts } = usePostStore(); //update posts in usePostStore

    const [liked, setLiked] = useState(post.likes?.includes(user?._id));
    const [isLiking, setIsLiking] = useState(false);

    const handleLikeAndUnlike = async () => {
        if (!user) return toast.error("You must be logged in to like a post");
        if (isLiking) return;

        setIsLiking(true);
        try {
            const res = await axiosInstance.put(`/posts/likes/${post._id}`);
            const data = res.data;

            if (data.error) return toast.error(data.error);

            const updatedPosts = posts.map((p) => {
                if (p._id === post._id) {
                    const newLikes = liked
                        ? p.likes.filter((id) => id !== user._id)
                        : [...p.likes, user._id];
                    return { ...p, likes: newLikes };
                }
                return p;
            });

            setPosts(updatedPosts);
            setLiked(!liked);
        } catch (error) {
            toast.error(error.response?.data?.error || error.message);
        } finally {
            setIsLiking(false);
        }
    };

    return (
        <div className='mt-20'>
            <PostHeader userId={post.postedBy} />
            <div>
                <h2 className="text-lg">{post.text}</h2>
                {post.img && (
                    <img
                        src={post.img}
                        alt="Post"
                        className='flex mx-auto w-[700px] h-[600px] object-cover rounded'
                    />
                )}
                <div className="bg-neutral text-neutral-content flex gap-2 mx-auto w-[700px] h-40">
                    <div className="flex w-full flex-col">
                        <div className="flex justify-between bg-base-300 rounded-box h-20 place-items-center px-4">
                            <p>{post.likes?.length || 0} likes</p>
                            <div className='flex gap-2'>
                                <p>{post.replies?.length || 0} comments</p>
                                <p>0 shares</p>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="flex justify-around bg-base-300 rounded-box h-20 place-items-center">
                            <div className='flex gap-2 cursor-pointer' onClick={handleLikeAndUnlike}>
                                <ThumbsUp className={liked?"text-sky-600":"text-gray-600"}/> {liked ? "Unlike" : "Like"}
                            </div>
                            <div className='flex gap-2 cursor-pointer'><MessageCircle /> Comment</div>
                            <div className='flex gap-2 cursor-pointer'><Share2Icon /> Share</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
