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
            <span onClick={handleLogout}>Log Out</span>
        </div>
    )

    const loggedOut = (
        <div>
            <Link to='/register' className="dpLink">Register</Link>
        </div>
    )

    return ( 
        <div className="Nav">
            <Dropdown>
                <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                    <img className="hamburger" src={Hamburger} alt="Dropdown" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item> <Link to="/" className="dpLink">Home</Link> </Dropdown.Item>
                    <Dropdown.Item> <Link to="/profile" className="dpLink">Profile</Link> </Dropdown.Item>
                    <Dropdown.Item> <Link to="/dog" className="dpLink">Dog Community</Link> </Dropdown.Item>
                    <Dropdown.Item> <Link to="/cat" className="dpLink">Cat Community </Link> </Dropdown.Item>
                    <Dropdown.Item> <Link to="/fish" className="dpLink">Fish Community </Link> </Dropdown.Item>
                    <Dropdown.Item> <Link to="/bird" className="dpLink">Bird Community </Link> </Dropdown.Item>
                    <Dropdown.Item> {currentUser ? loggedIn : loggedOut } </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Link to='/' className="title"> Pet Parents </Link>
            <Link to="/profile"><img className = "profile" src = {Profile} alt = "Profile"/> </Link>
            {/* {currentUser ? loggedIn : loggedOut} */}
        </div>
    )
}

{/* <img className = "logo" src = {Logo} alt = "Logo of a dog"/> */}