import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import ListOfTasks from './components/ListOfTasks';
import Task from './components/Task'


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

  )
};

export default App;
