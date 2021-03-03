import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

export const RouteLoading = () => {
  return (
    <div style={{ height: '80vh', display: 'flex' }}>
      <div class="spinner-border text-primary m-auto" role="status" />
    </div>
  );
};

export default function PrivateRoute({ ...props }) {
  const loginState = useSelector((state) => state.loginState);

  if (loginState.isLoading) {
    return <Route {...props} component={RouteLoading} />;
  }

  if (!loginState.loggedIn) {
    return <Redirect to="/login" />;
  }

  return <Route {...props} />;
}
