import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Link, Switch, Route} from "react-router-dom"
import {default as MakeRoutine} from "./components/routines/MakeRoutine"
import {getToken, cleartoken} from "./auth"

import {
  Login,
  LogOut,
  Register
} from "./components"

function App() {
  const [authorized, setAuthorized] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const [loggedIn, setLoggedIn] = useState(getToken());
  const [userData, setUserData] = useState()
  
  useEffect(async () => {
    if (loggedIn) {
        try {
            //const data = await fetchUserData();
            //setCurrentUser(data.username);

        } catch (error) {
            console.error(error);
        }
    }
  }, [loggedIn])

  return (
    <Router>
      <nav className="navBar">
        <h1>FitnessTrackr</h1>
        <div>
          <Link className="Link" to= '/'>Home</Link>
          <Link className="Link" to= '/routines'>Routines</Link>
          <Link className="Link" to= '/myRoutines'>My Routines</Link>
          <Link className="Link" to= '/activites'>Activites</Link>
          {!authorized ? (<Link className="Link" to= '/Login'>Login</Link>) : null}
          {!authorized ? (<Link className="Link" to= '/Register'>Sign Up</Link>) : null}
          {authorized ? (<Link className="Link" to= '/Logout'>Sign Up</Link>) : null}
          <Link className="Link" to= '/createRoutine'>Create Routine</Link>
          {/* Link for log out which returns home '/' */}
        </div>
      </nav>
      <main>
        <Switch>
          <Route exact path= '/'>
            {/* HomePage component  */}
          </Route>
          <Route path='/Login'>
          {!authorized ? (
              <Login
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                setAuthorized={setAuthorized}
                authorized={authorized}
              />
            ) : null}
          </Route>
          <Route path='/Register'>
            {!authorized ? <Register setAuthorized={setAuthorized} /> : null}
          </Route>
          <Route path="/LogOut">
            <LogOut
              setCurrentUser={setCurrentUser}
              setAuthorized={setAuthorized}
              authorized={authorized}
            />
          </Route>
          <Route path='/routines'>
            {/* Routines component */}
          </Route>
          <Route path='/myRoutines'>
            {/* MyRoutines component */}
          </Route>
          <Route path='/activities'>
            {/* Activities component */}
          </Route>
          <Route path='/createRoutine'>
            <MakeRoutine />
          </Route> 
        </Switch>  
      </main>
    </Router>
  );
}

export default App;
