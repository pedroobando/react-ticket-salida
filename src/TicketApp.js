import React, { useReducer } from 'react';
import { AppContext } from './reducers/AppContext';
import { globReducer } from './reducers/globReducer';

import { AppRouter } from './routers/AppRouter';

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false };
};
const initialState = {};

export const TicketApp = () => {
  const [globalState, dispatch] = useReducer(globReducer, initialState, init);

  return (
    <AppContext.Provider value={{ globalState, dispatch }}>
      <AppRouter />
    </AppContext.Provider>
  );
};
