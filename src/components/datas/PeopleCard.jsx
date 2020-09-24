import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import { AppContext } from '../../reducers/AppContext';
import { useForm } from '../../hooks/useForm';
import { typeGState } from '../../types/types';
import { createPeople, deletePeople, updatePeople } from '../../actions/peopleAction';

export const PeopleCard = ({ history }) => {
  const [tabSelect, setTabSelect] = useState(1);

  const {
    globalState: { active },
    dispatch,
  } = useContext(AppContext);

  const [formValues, handleInputChange] = useForm(active);

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

    if (active._id === 0) {
      const listPeople = createPeople(formValues);
      dispatch({
        type: typeGState.pplCreate,
        payload: listPeople,
      });
    } else {
      const listPeople = updatePeople(formValues);
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
    const listPeople = deletePeople(active._id);
    dispatch({
      type: typeGState.pplDelete,
      payload: listPeople,
    });
    history.goBack();
  };

  const tabPersona = () => (
    <section className="border-bottom border-left border-right p-3 mb-5 bg-white rounded-bottom">
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
  );

  const tabVehiculo = () => (
    <section className="border-bottom border-left border-right p-3 mb-5 bg-white rounded-bottom">
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
  );

  const tabComents = () => (
    <section className="border-bottom border-left border-right p-3 mb-5 bg-white rounded-bottom">
      <Form.Group controlId="formBasicComents">
        <Form.Label>Comentario</Form.Label>
        <Form.Control
          rows={5}
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
  );

  const handleTabPeople = (tabs) => {
    setTabSelect(tabs);
  };

  return (
    <>
      <div className="d-flex justify-content-end mr-2">
        <span className="h3">Persona</span>
      </div>
      <Form className="my-2" onSubmit={handleSubmit}>
        <ul className="nav nav-tabs">
          <li onClick={(event) => handleTabPeople(1)} className="nav-item">
            <button
              type="button"
              className={tabSelect === 1 ? 'nav-link active' : 'nav-link '}>
              Datos Personales
            </button>
          </li>
          <li onClick={(event) => handleTabPeople(2)} className="nav-item">
            <button
              type="button"
              className={tabSelect === 2 ? 'nav-link active' : 'nav-link'}>
              Datos Vehiculo
            </button>
          </li>
          <li onClick={(event) => handleTabPeople(3)} className="nav-item">
            <button
              type="button"
              className={tabSelect === 3 ? 'nav-link active' : 'nav-link'}>
              Otros Datos
            </button>
          </li>
        </ul>

        {tabSelect === 1 && tabPersona()}
        {tabSelect === 2 && tabVehiculo()}
        {tabSelect === 3 && tabComents()}

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
