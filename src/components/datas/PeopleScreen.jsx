import React from 'react';

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

export const PeopleScreen = () => {
  return (
    <div>
      <div className="d-flex justify-content-end mr-2">
        <span className="h3">Personas / Aprobadores</span>
      </div>

      <table class="table table-hover">
        <thead class="thead-dark">
          <tr>
            <th scope="col">CI / RIF</th>
            <th scope="col">Nombre</th>
            <th scope="col">Telefono</th>
            <th scope="col">Transporte (placa)</th>
          </tr>
        </thead>
        <tbody>
          {peopleData.map(({ _id, name, dni, phone, transport }) => {
            return (
              <tr key={_id}>
                <th scope="row">{dni}</th>
                <td>{name}</td>
                <td>{phone}</td>
                <td>{transport.placa}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
