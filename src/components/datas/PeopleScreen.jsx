import React, { useEffect, useState, useContext } from 'react';
import { typeGState } from '../../types/types';
import { AppContext } from '../../reducers/AppContext';
import { getOnePeople, listPeople } from '../../actions/peopleAction';

export const PeopleScreen = ({ history }) => {
  const [lstPeople, setLstPeople] = useState([]);
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    loadTable();
  }, []);

  const loadTable = () => {
    const lista = listPeople();
    setLstPeople(lista);
  };

  const handleAddNew = () => {
    dispatch({
      type: typeGState.pplAddNew,
    });
    history.push(`/datos/persona/nuevo`);
  };

  const handleSelect = (peopleID) => {
    dispatch({
      type: typeGState.pplGetOne,
      payload: getOnePeople(peopleID),
    });
    history.push(`/datos/persona/${peopleID}`);
  };

  const ListPeoples = ({ _id, name, dni, phone, transPlaca }) => (
    <tr key={_id} onClick={(event) => handleSelect(_id)}>
      <th scope="row">{dni}</th>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{transPlaca}</td>
      {/* <td colSpan="2">
        <button
          className="btn btn-outline-secondary btn-sm px-2"
          onClick={(event) => handleSelect(_id)}>
          Datos
        </button>
      </td> */}
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

        <span className="h3">Personas / Aprobadores</span>
      </div>
      <div className="row"></div>

      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">CI / RIF</th>
            <th scope="col">Nombre</th>
            <th scope="col">Telefono</th>
            <th scope="col-1">Tramp. /placa</th>
            {/* <th>
              <button
                className="btn btn-outline-primary btn-sm"
                onClick={(event) => handleAddNew()}>
                Nuevo
              </button>
            </th> */}
          </tr>
        </thead>
        <tbody>{lstPeople.map(ListPeoples)}</tbody>
      </table>
    </div>
  );
};
