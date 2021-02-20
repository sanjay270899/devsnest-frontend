import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';

import 'react-multi-carousel/lib/styles.css';
import './assets/css/index.scss';
import './assets/css/landing.scss';

import Home from './pages/index';
import Faq from './pages/faqs';
import Navbar from './components/Navbar';
import Dashboard from './pages/dashboard/dashboard';

function App() {
  useEffect(() => {
    let code =
      process.env.NODE_ENV === 'production'
        ? process.env.REACT_APP_GA_TRACKING_ID_PROD
        : process.env.REACT_APP_GA_TRACKING_ID_DEV;
    ReactGA.initialize(code);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Navbar />

      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/faqs" component={Faq} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
