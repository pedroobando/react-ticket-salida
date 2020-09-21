import React, { useReducer } from 'react';
import { AppContext } from './reducers/AppContext';
import { authReducer } from './reducers/authReducer';

import { AppRouter } from './routers/AppRouter';

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false };
};
const initialState = {};

export const TicketApp = () => {
  const [user, dispatch] = useReducer(authReducer, initialState, init);

  return (
    <AppContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AppContext.Provider>
  );
};
