import React from 'react';
// import { useForm } from '../../hooks/useForm';

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

// { people, handleUpdate, handleDelete }
export const PeopleEdit = ({ history, location }) => {
  console.log(history, location);
  // const [formValues, handleInputChange, reset] = useForm(initialForm);

  return (
    <>
      <div className="d-flex justify-content-end mr-2">
        <span className="h3">Nuevo</span>
      </div>
    </>
  );
};
