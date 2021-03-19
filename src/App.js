import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Destination from './components/Destination/Destination';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createContext, useState } from 'react';
import Navbar from './components/Navbar/Navbar';

export const userContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({})
  return (
    <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
      <Navbar></Navbar>
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
    </userContext.Provider>
  );
}

export default App;
