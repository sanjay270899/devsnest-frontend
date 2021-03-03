import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import PrivateRoute from './components/PrivateRoute';
import ReactGA from 'react-ga';
import useAuth from './hooks/useAuth';

import 'react-multi-carousel/lib/styles.css';
import './assets/css/index.scss';
import './assets/css/landing.scss';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Faq from './pages/Faqs';
import NotFound from './pages/NotFound';
import Login from './pages/login';
import LoginCallback from './pages/login/Callback';
import Dashboard from './pages/Dashboard';
import CommingSoon from './pages/CommingSoon';
import Challenges from './pages/challenges';

function App() {
  useAuth();

  useEffect(() => {
    let code =
      process.env.NODE_ENV === 'production'
        ? process.env.REACT_APP_GA_TRACKING_ID_PROD
        : process.env.REACT_APP_GA_TRACKING_ID_DEV;
    ReactGA.initialize(code);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router>
      <Navbar />

      <main>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/faqs" component={Faq} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/login/callback" component={LoginCallback} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/leaderboard" component={CommingSoon} />
          <PrivateRoute exact path="/groups" component={CommingSoon} />
          <PrivateRoute exact path="/challenges" component={Challenges} />
          <Route component={NotFound} />
        </Switch>
      </main>

      <Footer />
      <ToastContainer />
    </Router>
  );
}

export default App;
