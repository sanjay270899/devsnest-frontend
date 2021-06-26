import React from 'react';
import { Route } from 'react-router-dom';

import { useLoginState } from '../../redux';
import RouteLoading from './RouteLoading';

export default function ConditionalRoute({
  loggedInComponent,
  loggedOutComponent,
  ...props
}) {
  const loginState = useLoginState();

  if (loginState.isLoading) {
    return <Route {...props} component={RouteLoading} />;
  } else if (!loginState.loggedIn) {
    return <Route {...props} component={loggedOutComponent} />;
  } else {
    return <Route {...props} component={loggedInComponent} />;
  }
}
