import React from 'react'
import PostCard from '../Posts/postCard'
import CreatePost from '../Posts/createPost'

const Home=()=> {
  return (
    <div className='mt-20'>
<CreatePost></CreatePost>
<PostCard></PostCard>
    </div>
  )
}
export default Home


