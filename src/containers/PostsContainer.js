import React from 'react'
import PostList from '../components/PostsList'
import PostsProvider from '../contexts/posts/providers/PostsProvider'


const PostsContainer = () => {

  return (
      <>
        <div>PostsContainer</div>
        <PostsProvider>
            
            <PostList/>

        </PostsProvider>
      </>
  )
}

export default PostsContainer