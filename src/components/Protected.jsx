import React from 'react';
import { Route, Redirect, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) => isAuthenticated ? <Component {...props} /> : <Navigate to="/Account" />}
  />
);

export default ProtectedRoute;