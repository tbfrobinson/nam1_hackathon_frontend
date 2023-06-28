import React, {useEffect, useState} from "react"
import { Link } from 'react-router-dom';
import axios from "axios"
import PostCard from "../PostCard/PostCard"
//import css for the Home page
import "./Home.css"
//import images
import HomeImage from "../../img/baby-kittens.jpeg"
import Dog from "../../img/dog-face.jpeg"
import Cat from "../../img/cat-face.png"
import Fish from "../../img/fish-face.webp"
import Bird from "../../img/bird-face.jpeg"

export default function Home() {


    const [searchInput, setSearchInput] = useState("")

    //update the value of searchInput 
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value)
    }


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

// maps the last 2 post from newest to oldest
const postList = post ?  post.slice(-2).reverse().map((posts, index) => <PostCard posts={posts} key={index} />) : ""


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

            <div className="homeImage">
                <img className="cats" src={HomeImage} alt="Two kittens" /> 
            </div>

            
            <p className="chooseTitle">Choose Your Pet Community</p>
            <div className="categories">
                <div className="categoryDiv">
                    <Link to="/dog"> <img className="categoryImg" src={Dog} alt="Dog"/> </Link>
                    <span className="caption">Dog</span>
                </div>
                <div className="categoryDiv">
                    <Link to="/cat"> <img className="categoryImg" src={Cat} alt="Cat"/> </Link>
                    <span className="caption">Cat</span>
                </div>
                <div className="categoryDiv">
                    <Link to="/fish"> <img className="categoryImg" src={Fish} alt="Fish"/> </Link>
                    <span className="caption">Fish</span>
                </div>
                <div className="categoryDiv">
                    <Link to="/bird"> <img className="categoryImg" src={Bird} alt="Bird"/> </Link>
                    <span className="caption">Bird</span>
                </div>
            </div>

            <hr/>

            <div className="recentTitle"> <h5>Recent Community Posts</h5> </div>
            <div className="homePostBox">
                {post && postList}
            </div>

        </>
    )
}