import React, {useEffect, useState} from 'react'
import axios from "axios"
import PostCard from "../../PostCard/PostCard"

export default function CatPage() {


    const [post, setPosts] = useState([])
    
    //gets all posts
    useEffect(function () {
        async function getPosts() {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/posts`)
            //console.log(response.data)
            setPosts(response.data)
        }
        getPosts()
    }, [])  //run on 1st render only

// maps all posts
//const postList = post ?  post.map((posts, index) => <PostCard posts={posts} key={index} />) : ""

//maps post based on Category
const postCategory = post ? post.filter(posts => posts.petId.category === "Cat").map((posts, index) => <PostCard posts={posts} key={index} />) : ""
//console.log(postCategory)

  return (
    <>
      <div> Cat Page </div>
     
      <div>
        {post && postCategory}
      </div>
    </>
  )
}