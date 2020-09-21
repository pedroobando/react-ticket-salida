import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { AppContext } from '../../reducers/AppContext';
import { typeGState } from '../../types/types';

const peopleData = [
  {
    _id: 23232323,
    name: 'Juan Carlos',
    dni: '3232323',
    phone: '032-323232',
    coments: '',
    approver: true,
    transport: {
      placa: '222222',
      brand: '23232323',
      model: '23232323',
      color: '323223',
    },
  },
  {
    _id: 244323,
    name: 'Luis Martinez',
    dni: '3232323',
    phone: '032-323232',
    coments: '',
    approver: true,
    transport: {
      placa: '222222',
      brand: '23232323',
      model: '23232323',
      color: '323223',
    },
  },
  {
    _id: 24432223,
    name: 'Francisco Perez',
    dni: '3232323',
    phone: '032-323232',
    coments: '',
    approver: true,
    transport: {
      placa: '222222',
      brand: '23232323',
      model: '23232323',
      color: '323223',
    },
  },
];

// const initialForm = {
//   _id: 0,
//   name: '',
//   dni: '',
//   phone: '',
//   coments: '',
//   approver: false,
//   transPlaca: '',
//   transBrand: '',
//   transModel: '',
//   transColor: '',
// };

export const PeopleScreen = ({ history }) => {
  const { dispatch } = useContext(AppContext);

  const handleSelect = (peopleID) => {
    const peopleItem = peopleData.find((item) => item._id === peopleID);
    dispatch({
      type: typeGState.pplGetOne,
      payload: peopleItem,
    });
    history.push(`/datos/persona/${peopleID}`);

    // return <PeopleEdit />;

    // console.log(peopleItem);
  };

  // const handleUpdate = () => {
  //   console.log('Actualizado');
  // };

  // const handleDeleted = () => {
  //   console.log('Eliminado');
  // };

  const ListPeoples = ({ _id, name, dni, phone, transport }) => (
    <tr key={_id}>
      <th scope="row">{dni}</th>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{transport.placa}</td>
      <td colSpan="2">
        <Button onClick={(e) => handleSelect(_id)}>Edit</Button>
      </td>
    </tr>
  );

  return (
    <div>
      <div className="d-flex justify-content-end mr-2">
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
        <tbody>{peopleData.map(ListPeoples)}</tbody>
      </table>
    </div>
  );
};
