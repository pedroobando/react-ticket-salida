import React from 'react';
import { NavBar } from '../components/ui/NavBar';
import { Switch, Redirect, Route } from 'react-router-dom';

// import { DashboardPage } from '../components/dashboard/DashboardPage';
import { SalidaPage } from '../components/pagesalida/SalidaPage';

import { PersonaPage } from '../components/pagedata/PersonaPage';
import { UsuarioPage } from '../components/pagedata/UsuarioPage';

export const MainRouter = () => {
  return (
    <>
      <NavBar />
      <div className="container-fluid mt-3">
        <Switch>
          {/* <Route exact path="/" component={DashboardPage} /> */}
          <Route exact path="/salidas" component={SalidaPage} />

          <Route exact path="/datos/persona" component={PersonaPage} />
          <Route exact path="/datos/usuario" component={UsuarioPage} />

          <Redirect to="/salidas" />
        </Switch>
      </div>
    </>
  );
};
