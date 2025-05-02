import React from 'react';
import PostHeader from './postHeader';
import { MessageCircle, Share2Icon, ThumbsUp } from 'lucide-react';

const PostCard = ({ post }) => {
    if (!post) return null;

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