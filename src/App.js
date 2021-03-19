import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Destination from './components/Destination/Destination';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/destination">
            <Destination></Destination>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
