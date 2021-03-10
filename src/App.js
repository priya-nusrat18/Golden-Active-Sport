
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './COMPONENT/HOME/Home';
import TeamDetails from './COMPONENT/TEAMDEATILS/TeamDetails';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/home">
            <Home />
          </Route>
          <Route path="/team/:teamId">
              <TeamDetails></TeamDetails>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
