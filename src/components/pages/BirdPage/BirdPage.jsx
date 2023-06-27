import React, {useEffect, useState} from 'react'
import axios from "axios"
export default function BirdPage() {

    const [post, setPosts] = useState([])
    
    //gets all posts
    useEffect(function () {
        async function getPosts() {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/posts`)
            console.log(response.data)
            setPosts(response)
        }
        getPosts()
    }, [])  //run on 1st render only

    

  return (
    <div>Bird Page</div>
  )
}
