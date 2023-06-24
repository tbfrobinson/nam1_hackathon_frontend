import { Link } from 'react-router-dom';

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
        <div>
            {currentUser ? loggedIn : loggedOut}
        </div>
    )
}