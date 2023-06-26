import React from 'react'
//register form page
import Register from "../../components/pages/Users/Register"

export default function Profile({currentUser}) {

    const loggedIn = (
        <div>
            You are Logged In
        </div>
    )

    const loggedOut = (
        <div>
            You are Logged Out
            <Register />
        </div>
    )
  return (
    <>
    <div>Profile Page</div>
    {currentUser ? loggedIn : loggedOut}
    </>
  )
}