import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
import validator from 'validator';
import { AppContext } from '../../reducers/AppContext';
import { useForm } from '../../hooks/useForm';
import { typeGState } from '../../types/types';
import {
  createUser,
  deleteUser,
  getOneByUsername,
  updateUser,
} from '../../actions/userAction';

export const UserCard = ({ history }) => {
  const {
    globalState: { active },
    dispatch,
  } = useContext(AppContext);

  const [formValues, handleInputChange] = useForm(active);

  const { username, email, password, password2 } = formValues;

  const takeUsername = (usernameSeek = '', update = false) => {
    let retVal = false;
    const existUsername = getOneByUsername(usernameSeek);
    if (existUsername !== undefined && existUsername._id !== active._id) retVal = true;
    // console.log(existUsername._id, active._id);
    return retVal;
  };

  const isFormValid = () => {
    let alertForm = [];
    // console.log(active._id);
    const isUpdate = active._id !== 0;

    if (username === undefined || username.trim().length <= 4) {
      alertForm = [...alertForm, 'Username 5 o mas caracteres'];
    }
    if (takeUsername(username)) {
      alertForm = [...alertForm, `Username ${username} ya existe`];
    }
    if (email === undefined || !validator.isEmail(email.trim())) {
      alertForm = [...alertForm, 'E-mail no valido.'];
    }
    if (password === undefined || password.trim().length <= 3) {
      alertForm = [...alertForm, 'Password mas de 3 caracteres'];
    }
    if (password2 === undefined || password !== password2) {
      alertForm = [...alertForm, 'Password diferente, favor verifique.'];
    }
    return alertForm;
  };

  const htmlAlertMessage = (lstVerifcar) => {
    const retlistAlert = '<ul>' + lstVerifcar.map((item) => `<li>${item}</li>`) + '</ul>';
    return retlistAlert.replaceAll(',', '');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValidData = isFormValid();
    if (isValidData.length >= 1) {
      Swal.fire({
        title: 'Verificar',
        html: htmlAlertMessage(isValidData),
        icon: 'warning',
      });
      return;
    }

    if (active._id === 0) {
      const listPeople = createUser(formValues);
      dispatch({
        type: typeGState.pplCreate,
        payload: listPeople,
      });
    } else {
      const listPeople = updateUser(formValues);
      dispatch({
        type: typeGState.pplUpdate,
        payload: listPeople,
      });
    }
    history.goBack();
  };

  const handleVolver = () => {
    history.goBack();
  };

  const handleDelete = () => {
    const listPeople = deleteUser(active._id);
    dispatch({
      type: typeGState.pplDelete,
      payload: listPeople,
    });
    history.goBack();
  };

  return (
    <>
      <div className="d-flex justify-content-end mr-2">
        <span className="h3">Usuario</span>
      </div>
      <Form className="my-2" onSubmit={handleSubmit}>
        <section className="border p-3 mb-5 rounded bg-white">
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={username}
              autoComplete="off"
              placeholder="Indique el username o nombre del usuario"
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              placeholder="Indique el correo electronico"
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              placeholder="**************"
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassWVerificacion">
            <Form.Label>Verificacion Password</Form.Label>
            <Form.Control
              type="password"
              name="password2"
              value={password2}
              placeholder="**************"
              onChange={handleInputChange}
            />
          </Form.Group>
        </section>

        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-success px-4">
            Enviar
          </button>

          <div>
            <button
              type="button"
              className="ml-4 btn btn-outline-secondary"
              onClick={(event) => handleVolver()}>
              Cancelar
            </button>
            {active._id !== '0' && (
              <button
                type="button"
                className="btn btn-outline-danger ml-2 px-4"
                onClick={(event) => handleDelete()}>
                Borrar
              </button>
            )}
          </div>
        </div>
      </Form>
    </>
  );
};
