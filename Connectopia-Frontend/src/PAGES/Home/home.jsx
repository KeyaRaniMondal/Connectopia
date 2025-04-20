import React from 'react'
import PostCard from '../Posts/postCard'
import CreatePost from '../Posts/createPost'
import Feed from './Feed'

const Home=()=> {
  return (
    <div className='mt-20'>
<CreatePost></CreatePost>
{/* <PostCard></PostCard> */}
<Feed></Feed>
    </div>
  )
}
export default Home


