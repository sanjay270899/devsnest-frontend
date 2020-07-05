import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './Components/Home'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Curriculum from './Components/Curriculum';
import Task from './Components/Task'


const App: React.ElementType = () => {
  return (
    <div >
    <Router>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={SignUp} />
    <Route exact path="/curriculum" component={Curriculum} />
    <Route exact path="/task/:id" component={Task} />

  </Switch>
  </Router>
  </div>

)};

export default App;
