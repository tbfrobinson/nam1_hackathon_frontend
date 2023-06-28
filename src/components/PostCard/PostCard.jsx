import React from 'react'
import "./PostCard.css"
import Thumb from "../../img/Vector.png"
import Message from "../../img/Vector (1).png"

export default function HomePage({posts}) {
  // &#9825;    empty heart
  // &#9829;    black heart



  //console.log(posts.createdAt)
  //convert date to yr-mn-day
  const date = posts.createdAt.split("T")[0]
  console.log(date + "    date")

  //convert time to hr:min  as 24hr display
  const time = posts.createdAt.split("T")[1].slice(0,5)
  //console.log(time + "     time")


  //convert 24hr time to 12 and add PM or AM
  function timeConversion(time) {
    let hours = time[0] + time[1]
    let hoursNum = Number(hours)
    //convert 24 to 12Am
    if (hoursNum === 24) {
      hoursNum = hoursNum -12;
      return(time.replace(hours, hoursNum.toString()) + "AM")
    }
    //convert for PM
    if (hoursNum > 12) {
      hoursNum = hoursNum - 12;
      return (time.replace(hours, hoursNum.toString()) + "PM")
    }
    //convert below 10 to Am and take away the first 0
    if (hoursNum < 10 ) {
      return(time.replace(hours,time[1]) + "AM")
    }
    //convert bellow 13 to am
    if (hoursNum < 13) {
      return(time + "AM")
    }
  }
  const fixedTime = timeConversion(time)
  

  function dateConversion(date) {
    let year = date.slice(0,4)
    let month = date.slice(5,7)
    let day = date.slice(8,10)
    //convert month number to  word
    if(month === "01") {
      month = "Jan"
    }
    if(month === "02") {
      month = "Feb"
    }
    if(month === "03") {
      month = "Mar"
    }
    if(month === "04") {
      month = "Apr"
    }
    if(month === "05") {
      month = "May"
    }
    if(month === "06") {
      month = "Jun"
    }
    if(month === "07") {
      month = "Jul"
    }
    if(month === "08") {
      month = "Aug"
    }
    if(month === "09") {
      month = "Sept"
    }
    if(month === "10") {
      month = "Oct"
    }
    if(month === "11") {
      month = "Nov"
    }
    if(month === "12") {
      month = "Dec"
    }

    console.log(day)
    return (month + " " + day + ", " + year)
  }
  const fixedDate = dateConversion(date)
  console.log(fixedDate)
  

  return (
    <>
    
    <div className="postBox">
      <div className="favorite">
        &#9825;
      </div>
      {/* <h5>{posts.userId.username}</h5> */}
      <h6><strong>{posts.title}</strong></h6>
      <p className="postContent">{posts.content}</p>
      <div className="bottomBox">

        <span className="likes"> 
        
          <img src={Thumb} alt="Thumbs Up"/> 
          <img className="messageIcon" src={Message} alt="Message Box"/> 

        </span>
        <span className="timeAndDate">{fixedTime} - {fixedDate}</span>


      </div>
    </div>
    
    <hr/>
    </>
    
  )
}
