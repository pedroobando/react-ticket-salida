import React from 'react';
import { NavBar } from '../components/ui/NavBar';
import { Switch, Redirect, Route } from 'react-router-dom';

// import { DashboardPage } from '../components/dashboard/DashboardPage';
import { SalidaScreen } from '../components/salidas/SalidaScreen';

import { PeopleScreen } from '../components/datas/PeopleScreen';
import { UserScreen } from '../components/datas/UserScreen';

export const MainRouter = () => {
  return (
    <>
      <NavBar />
      <div className="container mt-3">
        <Switch>
          <Route exact path="/salidas" component={SalidaScreen} />

          <Route exact path="/datos/personas" component={PeopleScreen} />
          <Route exact path="/datos/usuarios" component={UserScreen} />

          <Redirect to="/salidas" />
        </Switch>
      </div>
    </>
  );
};
