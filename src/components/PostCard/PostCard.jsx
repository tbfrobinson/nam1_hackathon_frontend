import React from 'react'
import "./PostCard.css"

export default function HomePage({posts}) {
  console.log(posts)
  return (
    <>
    
    <div className="postBox">
      {/* <h5>{posts.userId.username}</h5> */}
      <h6>{posts.title}</h6>
      <p>{posts.content}</p>
    </div>
    
    <hr/>
    </>
    
  )
}
