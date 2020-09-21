import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { AppContext } from '../../reducers/AppContext';
import { useForm } from '../../hooks/useForm';
// import { globReducer } from '../../reducers/globReducer';
import { typeGState } from '../../types/types';

export const PeopleEdit = ({ history }) => {
  const {
    globalState: { active },
    dispatch,
  } = useContext(AppContext);

  const [formValues, handleInputChange, reset] = useForm(active);

  const {
    name,
    dni,
    phone,
    coments,
    approver,
    transBrand,
    transColor,
    transModel,
    transPlaca,
  } = formValues;

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: typeGState.pplUpdate,
      payload: formValues,
    });
    history.goBack();
    // console.log(formValues);
  };

  const handleVolver = () => {
    history.goBack();
  };

  const handleClear = () => {
    reset({
      name: '',
      dni: '',
      phone: '',
      coments: '',
      approver: false,
      transBrand: '',
      transColor: '',
      transModel: '',
      transPlaca: '',
    });
  };

  return (
    <>
      <div className="d-flex justify-content-end mr-2">
        <span className="h3">Persona</span>
      </div>
      <Form className="my-2" onSubmit={handleSubmit}>
        <section className="shadow-sm p-3 mb-5 bg-white rounded">
          <Form.Group controlId="formBasicDni">
            <Form.Label>Cedula / Rif</Form.Label>
            <Form.Control
              type="text"
              name="dni"
              value={dni}
              autoComplete="off"
              placeholder="indique cedula o rif"
              onChange={handleInputChange}
            />
            <Form.Text className="text-muted">
              El dato es requerido por favor no lo olvide.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={name}
              placeholder="Nombre completo"
              onChange={handleInputChange}
              // autoComplete="off"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPhone">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              value={phone}
              placeholder="Telefono fijo / telefono movil"
              onChange={handleInputChange}
              // autoComplete="off"
            />
          </Form.Group>
        </section>
        <section className="shadow-sm p-3 mb-5 bg-white rounded">
          <Form.Group controlId="formBasicPlaca">
            <Form.Label>Vehiculo Placa</Form.Label>
            <Form.Control
              type="text"
              name="transPlaca"
              value={transPlaca}
              placeholder="Placa del vehiculo que transporta"
              onChange={handleInputChange}
              autoComplete="off"
            />
          </Form.Group>

          <Form.Group controlId="formBasicBrand">
            <Form.Label>Marca Vehiculo</Form.Label>
            <Form.Control
              type="text"
              name="transBrand"
              value={transBrand}
              placeholder="Marca del vehiculo que transporta"
              onChange={handleInputChange}
              // autoComplete="off"
            />
          </Form.Group>

          <Form.Group controlId="formBasicModel">
            <Form.Label>Modelo Vehiculo</Form.Label>
            <Form.Control
              type="text"
              name="transModel"
              value={transModel}
              placeholder="Modelo del vehiculo que transporta"
              onChange={handleInputChange}
              // autoComplete="off"
            />
          </Form.Group>

          <Form.Group controlId="formBasicColor">
            <Form.Label>Color Vehiculo</Form.Label>
            <Form.Control
              type="text"
              name="transColor"
              value={transColor}
              placeholder="Color del vehiculo que transporta"
              onChange={handleInputChange}
              // autoComplete="off"
            />
          </Form.Group>
        </section>
        <section className="shadow-sm p-3 mb-5 bg-white rounded">
          <Form.Group controlId="formBasicComents">
            <Form.Label>Comentario</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              name="coments"
              value={coments}
              placeholder="Algun comentario sobre la persona."
              onChange={handleInputChange}
              // autoComplete="off"
            />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Aprobador"
              name="approver"
              // value={approver}
              checked={approver}
              onChange={handleInputChange}
            />
          </Form.Group>
        </section>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
        <button
          type="button"
          className="ml-4 btn btn-outline-secondary"
          onClick={(event) => handleVolver()}>
          Cancelar
        </button>
        <button
          type="reset"
          className="ml-4 btn btn-outline-secondary"
          onClick={(event) => handleClear()}>
          Limpiar
        </button>
      </Form>
    </>
  );
};
