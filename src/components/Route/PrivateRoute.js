import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useLoginState } from '../../redux';
import RouteLoading from './RouteLoading';

export default function PrivateRoute({ ...props }) {
  const loginState = useLoginState();

  if (loginState.isLoading) {
    return <Route {...props} component={RouteLoading} />;
  } else if (!loginState.loggedIn) {
    return <Redirect to="/login" />;
  } else {
    return <Route {...props} />;
  }
}
