import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './Components/Home'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import ListOfTasks from './Components/ListOfTasks';
import Task from './Components/Task'


const App: React.ElementType = () => {
  return (
    <div >
    <Router>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={SignUp} />
    <Route exact path="/curriculum" component={ListOfTasks} />
    <Route exact path="/task/:id" component={Task} />

  </Switch>
  </Router>
  </div>

)};

export default App;
