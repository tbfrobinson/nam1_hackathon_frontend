import React from "react"
import { Link } from 'react-router-dom';
//import CSS for the NavBar
import "./NavBar.css"
//import BootStrap
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.css';
//import images 
import Logo from "../../img/logo.jpeg"
import Profile from "../../img/user.png"
import Hamburger from "../../img/hamburger.png"

export default function NavBar({currentUser, handleLogout}) {

    const loggedIn = (
        <div>
            <button onClick={handleLogout}>Log Out</button>
        </div>
    )

    const loggedOut = (
        <div>
            <Link to='/'>Home</Link>           
            <span>      |     </span>    
            <Link to='/register'>Register</Link>
        </div>
    )

    return ( 
        <div className="Nav">
            <Dropdown>
                <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                    <img className="hamburger" src={Hamburger} alt="Dropdown" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item> <Link to="/">Home</Link> </Dropdown.Item>
                    <Dropdown.Item> <Link to="/profile">Profile</Link> </Dropdown.Item>
                    <Dropdown.Item> <Link to="/dog">Dog Community</Link> </Dropdown.Item>
                    <Dropdown.Item> <Link to="/cat">Cat Community </Link> </Dropdown.Item>
                    <Dropdown.Item> <Link to="/fish">Fish Community </Link> </Dropdown.Item>
                    <Dropdown.Item> <Link to="/bird">Bird Community </Link> </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Link to='/'> <img className = "logo" src = {Logo} alt = "Logo of a dog"/></Link>
            <Link to="/profile"><img className = "profile" src = {Profile} alt = "Profile"/> </Link>
            {/* {currentUser ? loggedIn : loggedOut} */}
        </div>
    )
}