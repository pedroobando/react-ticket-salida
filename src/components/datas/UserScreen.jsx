import React, { useEffect, useState, useContext } from 'react';
import { typeGState } from '../../types/types';
import { AppContext } from '../../reducers/AppContext';
import { getOneUser, listUser } from '../../actions/userAction';

export const UserScreen = ({ history }) => {
  const [lstUser, setLstUser] = useState([]);
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    loadTable();
  }, []);

  const loadTable = () => {
    const lista = listUser();
    setLstUser(lista);
  };

  const handleAddNew = () => {
    dispatch({
      type: typeGState.pplAddNew,
      payload: { _id: 0, username: '', email: '', password: '', password2: '' },
    });
    history.push(`/datos/usuario/nuevo`);
  };

  const handleSelect = (userID) => {
    const userSelect = getOneUser(userID);
    const userWPass2 = { ...userSelect, password2: userSelect.password };
    dispatch({
      type: typeGState.pplGetOne,
      payload: userWPass2,
    });
    history.push(`/datos/usuario/${userID}`);
  };

  const ListUsers = ({ _id, username, email }) => (
    <tr key={_id} onClick={(event) => handleSelect(_id)}>
      <th scope="row">{username}</th>
      <td>{email}</td>
    </tr>
  );

  return (
    <div>
      <div className="d-flex justify-content-between">
        <button
          className="align-self-baseline btn btn-outline-primary btn-sm"
          onClick={(event) => handleAddNew()}>
          Nuevo
        </button>

        <span className="h3">Usuarios</span>
      </div>

      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">username</th>
            <th scope="col">email</th>
          </tr>
        </thead>
        <tbody>{lstUser.map(ListUsers)}</tbody>
      </table>
    </div>
  );
};
