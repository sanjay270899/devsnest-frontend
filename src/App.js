import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';
import { ToastContainer, toast } from 'react-toastify';
import PrivateRoute from './components/PrivateRoute';
import ConditionalRoute from './components/ConditionalRoute';

import 'react-multi-carousel/lib/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/index.scss';
import './assets/css/landing.scss';
import 'react-calendar-heatmap/dist/styles.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Faq from './pages/Faqs';
import NotFound from './pages/NotFound';
import Login from './pages/login';
import LoginCallback from './pages/login/Callback';
import Dashboard from './pages/Dashboard';
import Challenges from './pages/Challanges';
import Leaderboard from './pages/Leaderboard';
import Groups from './pages/Groups';
import UserProfile from './pages/dashboard/index';

toast.configure({
  bodyStyle: {
    color: 'white',
  },
});

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
    <Router>
      <Navbar />

      <main>
        <Switch>
          <ConditionalRoute
            exact
            path="/"
            loggedInComponent={Dashboard}
            loggedOutComponent={Landing}
          />
          <Route exact path="/faqs" component={Faq} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/login/callback" component={LoginCallback} />
          <PrivateRoute exact path="/me" component={UserProfile} />
          <PrivateRoute exact path="/challenges" component={Challenges} />
          <PrivateRoute exact path="/leaderboard" component={Leaderboard} />
          <PrivateRoute exact path="/groups" component={Groups} />
          <Route component={NotFound} />
        </Switch>
      </main>

      <Footer />
      <ToastContainer />
    </Router>
  );
}

export default App;
