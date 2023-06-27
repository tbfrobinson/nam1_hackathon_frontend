export default function LoggedIn({ currentUser, handleLogout }) {

    return ( 
        <>
        <div className="username">
            Username: {currentUser.username}
        </div>
        <div className="email">
            Email: {currentUser.email}
        </div>
        <button onClick={handleLogout}> 
            Log Out
        </button>
        </>
    )
}