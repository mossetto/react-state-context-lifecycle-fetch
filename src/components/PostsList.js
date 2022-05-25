import React from "react"
import PostContext from "../contexts/posts/PostContext"

const PostList = () =>{

    const { posts, setPosts } = React.useContext(PostContext);

    React.useEffect(() =>{
        GetPostsList()

    }, [])

    const GetPostsList = async () =>{
        const data = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await data.json()
        setPosts(posts)
    }

    return(
        <>
            <h3>Post List</h3><br/>
            <ol>
                {
                    posts.map((post, index) =>(
                        <li key={index}> { post.title }</li>
                    ))
                }
            </ol>
        </>
    )
}

export default PostList