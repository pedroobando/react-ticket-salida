import React from 'react';
import { NavBar } from '../components/ui/NavBar';
import { Switch, Redirect, Route } from 'react-router-dom';

// import { DashboardPage } from '../components/dashboard/DashboardPage';
import { SalidaScreen } from '../components/salidas/SalidaScreen';

import { PeopleScreen } from '../components/datas/PeopleScreen';
import { PeopleEdit } from '../components/datas/PeopleEdit';
import { UserScreen } from '../components/datas/UserScreen';

export const MainRouter = () => {
  return (
    <>
      <NavBar />
      <div className="container mt-3">
        <Switch>
          <Route exact path="/salida" component={SalidaScreen} />

          <Route exact path="/datos/persona" component={PeopleScreen} />
          <Route path="/datos/persona/:id" component={PeopleEdit} />
          <Route exact path="/datos/usuario" component={UserScreen} />

          <Redirect to="/salida" />
        </Switch>
      </div>
    </>
  );
};
