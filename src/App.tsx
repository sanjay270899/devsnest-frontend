import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './romponents/Home'
import Login from './romponents/Login'
import SignUp from './romponents/SignUp'
import ListOfCurriculum from './romponents/ListOfCurriculum';
import Curriculum from './romponents/Curriculum'


const App: React.ElementType = () => {
  return (
    <div >
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" component={ListOfCurriculum} />
          <Route exact path="/curriculum/:id" component={Curriculum} />

        </Switch>
      </Router>
    </div>

  )
};

export default App;
