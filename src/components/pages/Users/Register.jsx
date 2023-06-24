import axios from 'axios';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';


export default function Register({currentUser, setCurrentUser}) {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [msg, setMsg] = useState('')


    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const form = {
                username,
                email,
                password
            }
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/register`, form)
            console.log(response.data)
            const { token } = response.data
            localStorage.setItem('token', token)

            const decoded = jwt_decode(token)
            console.log(decoded)

            setCurrentUser(decoded)

        } catch (error) {
            console.log(error)
            if(error.response){
                setMsg(error.response.data.msg)
            }
        }
    }

    if (currentUser) {
        return <Navigate to='/' />
    }

    return ( 
        <div>
            <h3>{msg}</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    id='username'
                    placeholder="Username" 
                    onChange={e => setUsername(e.target.value)} 
                    required
                />
                <input 
                    type="email"
                    id='email' 
                    placeholder="Email" 
                    onChange={e => setEmail(e.target.value)} 
                    required
                />
                <input 
                    type="password" 
                    id='password'
                    placeholder="Password" 
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <button>Submit</button>
            </form>
        </div>
    )
}