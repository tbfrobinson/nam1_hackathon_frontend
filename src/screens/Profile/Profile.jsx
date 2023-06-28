import React from 'react'
import "./Profile.css"
//register form page
import Register from "../../components/pages/Users/Register"
import LoggedIn from "../../components/LoggedIn/LoggedIn"

export default function Profile({ currentUser, setCurrentUser, handleLogout }) {


    const loggedIn = 
    (
        <>
        <div className="username">
            Username: 
        </div>
        <div className="email">
            Email: 
        </div>
        <button onClick={handleLogout}> 
            Log Out
        </button>
        </>
    )


    const loggedOut = (
        <Register currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    )



  return (
    <>
    <div className="profileContainer"> 
        {currentUser ? <LoggedIn currentUser={currentUser} handleLogout={handleLogout}/> : loggedOut}
    </div>
    </>
  )
}