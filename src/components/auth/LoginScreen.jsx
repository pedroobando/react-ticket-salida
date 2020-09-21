import React, { useContext } from 'react';
import { AppContext } from '../../reducers/AppContext';
import { typeAuth } from '../../types/types';
// import { Link } from 'react-router-dom';

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AppContext);

  const handleLogin = () => {
    dispatch({
      type: typeAuth.login,
      payload: 'Pedro',
    });
    // console.log('Acceso');
  };

  const handleRecovery = () => {
    // console.log(history);
    history.push('/auth/recovery');
  };

  return (
    <div>
      <h2>Login Screen</h2>
      <hr />
      <button className="btn btn-outline-primary mr-2" onClick={handleLogin}>
        Login
      </button>
      <button className="btn btn-link ml-2" onClick={handleRecovery}>
        Recovery Pass
      </button>
    </div>
  );
};
