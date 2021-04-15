//import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {default as App} from './App';
;
/*
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import {
    Login,
    LogOut,
    Register
    
    
  } from "./components"


function App() {
   
  const [authorized, setAuthorized] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  
  return (
    <Router>
      {/* <Header /> *//*}
            <div>
        <nav>
          <ul>
            {!authorized ? (
              <li>
                <Link to="/Register">Register</Link>
              </li>
            ) : null}
            {!authorized ? (
              <li>
                <Link to="/Login">Login</Link>
              </li>
            ) : null}
            {authorized ? (
              <li>
                <Link to="/LogOut">LogOut</Link>
              </li>
            ) : null}
          </ul>
        </nav>

        <Switch>
          
          <Route path="/Register">
            {!authorized ? <Register setAuthorized={setAuthorized} /> : null}
          </Route>
          <Route path="/Login">
            {!authorized ? (
              <Login
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                setAuthorized={setAuthorized}
                authorized={authorized}
              />
            ) : null}
          </Route>
          
          <Route path="/LogOut">
            <LogOut
              setCurrentUser={setCurrentUser}
              setAuthorized={setAuthorized}
              authorized={authorized}
            />
          </Route>
          
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;



 */
ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

