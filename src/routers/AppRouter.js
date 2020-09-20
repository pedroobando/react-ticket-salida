import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import { AppContext } from '../reducers/AppContext';

import { AuthRouter } from './AuthRouter';
import { MainRouter } from './MainRouter';
// import { login } from '../actions/auth';

import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

export const AppRouter = () => {
  const { user } = useContext(AppContext);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRouter
            path="/auth"
            isAuthenticated={user.logged}
            component={AuthRouter}
          />
          <PrivateRouter
            path="/"
            // exact
            isAuthenticated={user.logged}
            component={MainRouter}
          />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
