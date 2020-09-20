import React from 'react';

export const RecoveryScreen = ({ history }) => {
  const handleBackLogin = () => {
    history.goBack();
  };
  return (
    <div>
      <h2>Recovery Screen</h2>
      <hr />
      <button className="btn btn-link" onClick={handleBackLogin}>
        Volver al Login
      </button>
    </div>
  );
};
