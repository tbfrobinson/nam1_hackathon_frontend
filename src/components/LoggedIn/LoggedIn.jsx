export default function LoggedIn({ currentUser, handleLogout }) {

    console.log(currentUser)

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