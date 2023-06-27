export default function LoggedIn({ currentUser, handleLogout }) {


    return ( 
        <>
        <div className="username">
            Username: {currentUser.decoded.username}
        </div>
        <div className="email">
            Email: {currentUser.decoded.email}
        </div>
        <button onClick={handleLogout}> 
            Log Out
        </button>
        </>
    )
}