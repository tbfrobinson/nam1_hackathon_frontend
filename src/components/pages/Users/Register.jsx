import axios from 'axios';
import { useState } from 'react';
import { Navigate, redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import "./Register.css"


export default function Register({ currentUser, setCurrentUser }) {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checkPassword, setCheckPassword] = useState('')
    const [msg, setMsg] = useState('')
    const [loginRegister, setLoginRegister] = useState(false)

    if(currentUser) {
        return <Navigate to='/' />
    }

    const handleRegister = async e => {
        e.preventDefault()
        try {
            const form = {
                username,
                email,
                password,
                checkPassword
            }
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/register`, form)
            const { token } = response.data
            localStorage.setItem('token', token)

            const decoded = jwt_decode(token)

            setCurrentUser(decoded)

            return redirect('/')
        } catch (error) {
            console.log(error)
            if(error.response){
                setMsg(error.response.data.msg)
            }
        }
    }

    const handleLogin = async e => {
        e.preventDefault()
        try {
            const form = {
                username,
                password
            }

            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/login`, form)

            const { token } = response.data
            localStorage.setItem('token', token)
            const decoded = jwt_decode(token)
            setCurrentUser(decoded)
            return redirect('/')
        } catch(err) {
            console.log(err)
            if(err.response) {
                setMsg(err.response.data.msg)
            }
        }
    }

    const changeLoginRegister = () => {
        setLoginRegister(!loginRegister)
        setMsg('')
        setPassword('')
        setCheckPassword('')
    }

    const register = (
        <div className="SignUp">
            <form className="formSignUp" onSubmit={handleRegister}>
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
                <input 
                    type="password" 
                    id='checkPassword'
                    placeholder="Please Re-enter password" 
                    onChange={e => setCheckPassword(e.target.value)}
                    required
                    />
                <button className="AuthSubmitBtn">Sign Up</button>
            </form>
            <button className="changeLogIn" onClick={changeLoginRegister}>Already have an account? <span className="LogInSpan">LogIn</span> </button>
        </div>
    )

    const login = (
        <div className="LogIn">
            <form className="formLogIn" onSubmit={handleLogin}>
                <input 
                    type="text"
                    id='username'
                    placeholder="Username" 
                    onChange={e => setUsername(e.target.value)} 
                    required
                    />
                <input 
                    type="password" 
                    id='password'
                    placeholder="Password" 
                    onChange={e => setPassword(e.target.value)}
                    required
                    />
                <button className="AuthSubmitBtn">Log In</button>
            </form>
            <button className="changeSignUp" onClick={changeLoginRegister}>Need to make an account? <span className="SignUpSpan">Sign Up </span></button>
        </div>
    )


    if (currentUser) {
        return <Navigate to='/' />
    }

    return ( 
        <div>
            <div className='msgDiv'>
                <h3 className='msg'>{msg}</h3>
            </div>
            {loginRegister ? login : register}
        </div>
    )
}