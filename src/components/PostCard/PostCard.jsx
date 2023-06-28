import React from 'react'
import "./PostCard.css"

export default function HomePage({posts}) {
  console.log(posts.createdAt)
  return (
    <>
    
    <div className="postBox">
      {/* <h5>{posts.userId.username}</h5> */}
      <h6><strong>{posts.title}</strong></h6>
      <p>{posts.content}</p>
    </div>
    
    <hr/>
    </>
    
  )
}
