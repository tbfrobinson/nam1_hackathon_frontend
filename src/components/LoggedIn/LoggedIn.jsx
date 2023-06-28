import React, {useEffect, useState} from 'react'
import axios from "axios"
import PostCard from "../PostCard/PostCard"
import "./LoggedIn.css"

export default function LoggedIn({ currentUser, handleLogout }) {

    //console.log(currentUser)

    const [post, setPosts] = useState([])
    
    //gets all posts
    useEffect(function () {
        async function getPosts() {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/posts`)
            console.log(response.data)
            setPosts(response.data)
        }
        getPosts()
    }, [])  //run on 1st render only

// maps all posts
//const postList = post ?  post.map((posts, index) => <PostCard posts={posts} key={index} />) : ""

//maps post based on current users posts
const postCategory = post ? post.filter(posts => posts.userId.username === currentUser.username).map((posts, index) => <PostCard posts={posts} key={index} />) : ""


// const currentUserName = currentUser.decoded.username  || currentUser.username + "regular"
// console.log(currentUserName)


    return ( 
        <>
        <div className="username">
            Username: {currentUser.username}  
        </div>
        <div className="email">
            Email: {currentUser.email}
        </div>
        <button className="LogOutBtn" onClick={handleLogout}> 
            Log Out
        </button>


        <div className="myPostTitle"><h5>My Posts</h5></div>

        {post && postCategory}
      

        </>
    )
}