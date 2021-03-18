import './App.css';

import { BrowserRouter as Router, Link } from "react-router-dom"
import {Switch, Route} from "react-router"
import {default as MakeRoutine} from "./components/routines/MakeRoutine"

function App() {
  return (
    <Router>
      <nav className="navBar">
        <h1>FitnessTrackr</h1>
        <div>
          <Link className="Link" to= '/'>Home</Link>
          <Link className="Link" to= '/routines'>Routines</Link>
          <Link className="Link" to= '/myRoutines'>My Routines</Link>
          <Link className="Link" to= '/activites'>Activites</Link>
          <Link className="Link" to= '/login'>Login</Link>
          <Link className="Link" to= '/register'>Sign Up</Link>
          <Link className="Link" to= '/createRoutine'>Create Routine</Link>
          {/* Link for log out which returns home '/' */}
        </div>
      </nav>
      <main>
        <Switch>
          <Route exact path= '/'>
            {/* HomePage component  */}
          </Route>
          <Route path='/login'>
            {/* Login component */}
          </Route>
          <Route path='/register'>
            {/* Register component */}
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
