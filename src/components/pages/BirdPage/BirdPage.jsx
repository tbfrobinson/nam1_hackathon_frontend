import React, {useEffect, useState} from 'react'
import axios from "axios"
import PostCard from "../../PostCard/PostCard"
import "./BirdPage.css"

export default function BirdPage() {


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
const postCategory = post ? post.filter(posts => posts.petId.category === "Bird").map((posts, index) => <PostCard posts={posts} key={index} />) : ""
//console.log(postCategory)


const [searchInput, setSearchInput] = useState("")

//update the value of searchInput 
const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value)
}




  return (
    <>

<div className="searchContainer">
            <input
                className="searchBar"
                type="search"
                placeholder="Search here"
                onChange={handleChange}
                value={searchInput} />
      </div> 


      <div className='communityTitle'> Bird </div>
     <div className='outerPostBox'>
        <div className="birdPostBox">
          {post && postCategory}
        </div>
     </div>
    </>
  )
}
