import React from 'react'
import Menu from './Menu'
import WritePost from './WritePost'

const PostPage = () =>{
    return(
        <section>
           <h1>post page</h1>
           <WritePost />
           <Menu/>   
        </section>
        
    )
}

export default PostPage