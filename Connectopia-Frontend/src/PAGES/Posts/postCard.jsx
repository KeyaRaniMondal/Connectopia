import React from 'react';
import PostHeader from './postHeader';
import demo from '../../assets/demo.jpg'
import { MessageCircle, Share2Icon, ThumbsUp } from 'lucide-react';

const PostCard = () => {
    return (
        <div className='mt-20 '>
            <PostHeader></PostHeader>
            <div>
                <img src={demo} alt="" className=' flex mx-auto w-[700px] h-[600px]'/>

                {/* card footer */}
                <div className="bg-neutral text-neutral-content flex gap-2 mx-auto w-[700px] h-40">
                    <div className="flex w-full flex-col">
                        <div className="flex justify-between bg-base-300 rounded-box  h-20 place-items-center">
                            <p className='ml-5'>2 likes</p>
                            <div className='flex gap-2 mr-5'>
                                <p>3 comments</p>
                                <p>2 shares</p>
                            </div>
                            
                        </div>
                        <div className="divider"></div>
                        <div className="flex justify-around bg-base-300 rounded-box  h-20 place-items-center flex gap-2">
                            <div className='flex gap-2'><ThumbsUp /> Like</div> 
                            <div className='flex gap-2'><MessageCircle /> Comment</div> 
                            <div className='flex gap-2'><Share2Icon/> Like</div> 
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
}

export default PostCard;