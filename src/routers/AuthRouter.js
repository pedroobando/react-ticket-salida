import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RecoveryScreen } from '../components/auth/RecoveryScreen';

export const AuthRouter = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/auth/login" component={LoginScreen} />
        <Route exact path="/auth/recovery" component={RecoveryScreen} />
        <Redirect to="/auth/login" />
      </Switch>
    </div>
  );
};
