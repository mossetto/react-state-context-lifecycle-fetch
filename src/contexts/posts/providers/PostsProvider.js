import React from 'react'
import PostContext from '../PostContext'

function PostsProvider(props){
    const [posts, setPosts] = React.useState([])

    const toProvide = {posts, setPosts}

    return(
        <PostContext.Provider value = { toProvide }>
    
            { props.children }
    
        </PostContext.Provider>
    )

}

export default PostsProvider