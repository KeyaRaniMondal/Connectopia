// Feed.jsx
import React, { useEffect } from 'react';
import { usePostStore } from '../../Store/usePostStore';
import PostCard from '../Posts/postCard';
import { axiosInstance } from '../../lib/axios';


const Feed = () => {
    const { posts, isPostsLoading, getPosts } = usePostStore();
    axiosInstance.interceptors.request.use((config) => {
        const token = localStorage.getItem("token"); // or however you store it
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    });
    useEffect(() => {
        getPosts();
    }, []);

    if (isPostsLoading) return <div className='text-center mt-10'>Loading posts...</div>;
    if (posts.length === 0) return <div className='text-center mt-10'>No posts found</div>;

    return (
        <div className='flex flex-col items-center'>
            {posts.map((post) => (
                <PostCard key={post._id} post={post} />
            ))}
        </div>
    );
};

export default Feed;
