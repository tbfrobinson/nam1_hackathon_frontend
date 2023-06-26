import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import {useState, useEffect} from 'react';
import jwt_decode from 'jwt-decode';

import Home from './components/pages/Home';
import NavBar from './components/partials/NavBar';
import Register from './components/pages/Users/Register';
import NotFound from './components/pages/NotFound';
import Profile from "./screens/Profile/Profile"



function App() {
  
  // logged in user will be stored in state
  const [currentUser, setCurrentUser] = useState(null);

  // here we check if the user ever created a jwt token (created accound and stayed logged in)
  useEffect(() => {
    // get token
    const token = localStorage.getItem('token');
    // if yes
    if (token) {
      setCurrentUser(jwt_decode(token))
    } else {
      setCurrentUser(null)
    }
  }, [])

  const handleLogout = () => {
    // see if logged in
    if (localStorage.getItem('token')){
      // remove
      localStorage.removeItem('token');
      setCurrentUser(null)
    }
  }

  return (
    <div>
      <Router>
        <header>
          <NavBar 
            currentUser={currentUser} 
            handleLogout={handleLogout} 
            />

        </header>

        <div className='App'>
          <Routes>
            <Route 
              path='/' 
              element={<Home 
                currentUser={currentUser} 
                />} 
              />

            <Route 
              path='/register' 
              element={<Register 
                currentUser={currentUser} 
                setCurrentUser={setCurrentUser}
              />} 
            />

            <Route 
              path='/profile' 
              element={<Profile 
                currentUser={currentUser} 
                setCurrentUser={setCurrentUser}
              />} 
            />  

            <Route 
              path='*'
              element={<NotFound />}
              />

          </Routes>
        </div>

      </Router>
    </div>
  );
}

export default App;
