import React, { useState } from 'react';
import PostHeader from './postHeader';
import { MessageCircle, Share2Icon, ThumbsUp, X, Link, Mail } from 'lucide-react';
import {
    FacebookShareButton,
    WhatsappShareButton,
    TwitterShareButton,
    FacebookIcon,
    WhatsappIcon,
    TwitterIcon,
    EmailShareButton,
    TelegramShareButton,
    TelegramIcon
} from 'react-share';
import toast from 'react-hot-toast';
import { useAuthStore } from '../../Store/useAuthStore';
import { usePostStore } from '../../Store/usePostStore';
import { axiosInstance } from '../../lib/axios';

const PostCard = ({ post }) => {
    const { authUser } = useAuthStore();
    const user = authUser;
    const { posts, setPosts } = usePostStore();

    const [liked, setLiked] = useState(post.likes?.includes(user?._id));
    const [isLiking, setIsLiking] = useState(false);
    const [showShareMenu, setShowShareMenu] = useState(false);

    const postUrl = `${window.location.origin}/posts/${post._id}`;
    const shareTitle = `Check out this post by ${post.user?.username || 'a user'}`;

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

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(postUrl);
            toast.success("Link copied to clipboard");
            setShowShareMenu(false);
        } catch (err) {
            toast.error("Failed to copy link");
        }
    };

    const handleShareViaEmail = () => {
        window.location.href = `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(postUrl)}`;
        setShowShareMenu(false);
    };

    return (
        <div className='mt-20'>
            <PostHeader post={post} />
            <div>
                <h2 className="text-lg">{post.text}</h2>
                {post.img && (
                    <img
                        src={post.img}
                        alt="Post"
                        className='flex mx-auto w-[700px] h-[600px] object-cover rounded'
                    />
                )}
                <div className="bg-neutral text-neutral-content flex gap-2 mx-auto w-[700px]">
                    <div className="flex w-full flex-col">
                        <div className="flex justify-between bg-base-300 rounded-box h-20 place-items-center px-4">
                            <p>{post.likes?.length || 0} likes</p>
                            <div className='flex gap-2'>
                                <p>{post.replies?.length || 0} comments</p>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="flex justify-around bg-base-300 rounded-box h-20 place-items-center">
                            <div className='flex gap-2 cursor-pointer' onClick={handleLikeAndUnlike}>
                                <ThumbsUp className={liked ? "text-sky-600" : "text-gray-600"} /> {liked ? "Unlike" : "Like"}
                            </div>
                            <div className='flex gap-2 cursor-pointer'><MessageCircle /> Comment</div>
                            <div className='flex gap-2 cursor-pointer' onClick={() => setShowShareMenu(!showShareMenu)}>
                                <Share2Icon /> Share
                            </div>
                        </div>
                    </div>
                </div>

                {/* Enhanced Share menu */}
                {showShareMenu && (
                    <div className="bg-white rounded-lg shadow-xl p-4 mt-2 w-80 mx-auto flex flex-col gap-3 relative z-50 border border-gray-200">
                        <div className="flex justify-between items-center border-b pb-2">
                            <h3 className="font-semibold text-lg">Share this post</h3>
                            <button
                                onClick={() => setShowShareMenu(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="flex justify-center gap-4 py-3 border-b">
                            <div className="flex flex-col items-center">
                                <FacebookShareButton
                                    url={postUrl}
                                    quote={shareTitle}
                                    className="hover:opacity-80 transition-opacity"
                                >
                                    <FacebookIcon size={40} round />
                                </FacebookShareButton>
                                <span className="text-xs mt-1">Facebook</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <TwitterShareButton
                                    url={postUrl}
                                    title={shareTitle}
                                    className="hover:opacity-80 transition-opacity"
                                >
                                    <TwitterIcon size={40} round />
                                </TwitterShareButton>
                                <span className="text-xs mt-1">Twitter</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <WhatsappShareButton
                                    url={postUrl}
                                    title={shareTitle}
                                    className="hover:opacity-80 transition-opacity"
                                >
                                    <WhatsappIcon size={40} round />
                                </WhatsappShareButton>
                                <span className="text-xs mt-1">WhatsApp</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <TelegramShareButton
                                    url={postUrl}
                                    title={shareTitle}
                                    className="hover:opacity-80 transition-opacity"
                                >
                                    <TelegramIcon size={40} round />
                                </TelegramShareButton>
                                <span className="text-xs mt-1">Telegram</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div
                                className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded cursor-pointer"
                                onClick={handleCopyLink}
                            >
                                <Link size={18} className="text-gray-600" />
                                <span>Copy link</span>
                            </div>
                            <div
                                className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded cursor-pointer"
                                onClick={handleShareViaEmail}
                            >
                                <Mail size={18} className="text-gray-600" />
                                <span>Share via email</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PostCard;