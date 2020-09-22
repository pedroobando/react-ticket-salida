import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { getStorage } from '../../data/dataStorage';
import { AppContext } from '../../reducers/AppContext';
import { typeGState } from '../../types/types';

// const peopleData = [
//   {
//     _id: 23232323,
//     name: 'Juan Carlos',
//     dni: '3232323',
//     phone: '032-323232',
//     approver: true,
//     coments: 'Algun comentario',
//     transBrand: 'Toyota',
//     transColor: 'Plata',
//     transModel: 'Meru',
//     transPlaca: 'NAU-39K',
//   },
//   {
//     _id: 244323,
//     name: 'Luis Martinez',
//     dni: '3232323',
//     phone: '032-323232',
//     approver: false,
//     coments: 'tario',
//     transBrand: 'Chevroolet',
//     transColor: 'Azul',
//     transModel: 'Monza',
//     transPlaca: 'GTE-39K',
//   },
//   {
//     _id: 24432223,
//     name: 'Francisco Perez',
//     dni: '3232323',
//     phone: '032-323232',
//     approver: true,
//     coments: 'Comentario true',
//     transBrand: 'Toyota',
//     transColor: 'Gris',
//     transModel: 'Starlet',
//     transPlaca: 'BAH-12P',
//   },
// ];

export const PeopleScreen = ({ history }) => {
  const { dispatch } = useContext(AppContext);

  const [lstPeople, setLstPeople] = useState([]);

  useEffect(() => {
    loadTable();
  }, []);

  const loadTable = () => {
    setLstPeople(getStorage('people'));
  };

  const handleAddNew = () => {
    // const peopleItem = {
    //   _id: 0,
    //   name: '',
    //   dni: '',
    //   phone: '',
    //   approver: false,
    //   coments: '',
    //   transBrand: '',
    //   transColor: '',
    //   transModel: '',
    //   transPlaca: '',
    // };
    dispatch({
      type: typeGState.pplAddNew,
      payload: lstPeople,
    });
    history.push(`/datos/persona/nuevo`);
  };

  const handleSelect = (peopleID) => {
    const peopleItem = lstPeople.find((item) => item._id === peopleID);
    dispatch({
      type: typeGState.pplGetOne,
      payload: { active: peopleItem, list: lstPeople },
    });
    history.push(`/datos/persona/${peopleID}`);
  };

  const ListPeoples = ({ _id, name, dni, phone, transPlaca }) => (
    <tr key={_id}>
      <th scope="row">{dni}</th>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{transPlaca}</td>
      <td colSpan="2">
        <Button onClick={(e) => handleSelect(_id)}>Edit</Button>
      </td>
    </tr>
  );

  return (
    <div>
      <div className="d-flex justify-content-between mx-2 mb-2">
        <button
          className="btn btn-outline-primary btn-sm"
          onClick={(event) => handleAddNew()}>
          Nuevo
        </button>
        <span className="h3">Personas / Aprobadores</span>
      </div>

      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">CI / RIF</th>
            <th scope="col">Nombre</th>
            <th scope="col">Telefono</th>
            <th scope="col">Transporte (placa)</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{lstPeople.map(ListPeoples)}</tbody>
      </table>
    </div>
  );
};
