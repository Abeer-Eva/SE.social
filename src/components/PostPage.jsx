import React from 'react'
import Menu from './Menu'
import Post from './Post'
import WritePost from './WritePost'

const PostPage = () =>{
    return(
        <section>
           <WritePost />
           <Post />
           <Menu/>   
        </section>
        
    )
}

export default PostPage