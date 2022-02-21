import React, { useState } from 'react'
import Menu from './Menu'
import Post from './Post'
import WritePost from './WritePost'
import { collection, getDocs } from 'firebase/firestore'
import {db} from './firebase'

const PostPage = () =>{

    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        const postsSnapshot = await getDocs(collection(db, "postData"));
        const postsList = postsSnapshot.docs.map((doc) => doc.data());
        postsList.forEach((post, i) => post.id = i++)
        setPosts(postsList)
        return postsList;
    };
    getPosts();


    return(
        <section>
           <WritePost />
            {posts.map((post => (
               <Post
               
               key={post.id}
               message={post.message}
               timeStamp={post.timestamp}
               username={post.userName}
               image={post.image}
               /> 
            )))}
           <Menu/>   
        </section>
        
    )
}

export default PostPage