import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostHeader from './postHeader';
import { MessageCircle, Share2Icon, ThumbsUp } from 'lucide-react';

const PostCard = ({ postId }) => {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await axios.get(`/api/posts/${postId}`);
                setPost(res.data);
            } catch (err) {
                console.error("Error fetching post:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [postId]);

    if (loading) return <div>Loading...</div>;
    if (!post) return <div>Post not found</div>;

    return (
        <div className='mt-20'>
            <PostHeader userId={post.postedBy} />
            <div>
                {post.img && <img src={post.img} alt="Post" className='flex mx-auto w-[700px] h-[600px]' />}
                <div className="bg-neutral text-neutral-content flex gap-2 mx-auto w-[700px] h-40">
                    <div className="flex w-full flex-col">
                        <div className="flex justify-between bg-base-300 rounded-box h-20 place-items-center">
                            {/* <p className='ml-5'>{post.likes.length} likes</p> */}
                            <div className='flex gap-2 mr-5'>
                                {/* <p>{post.replies.length} comments</p> */}
                                <p>0 shares</p> 
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="flex justify-around bg-base-300 rounded-box h-20 place-items-center">
                            <div className='flex gap-2 cursor-pointer'><ThumbsUp /> Like</div>
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
