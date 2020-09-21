import React, { useContext } from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AppContext } from '../../reducers/AppContext';
import { typeGState } from '../../types/types';

export const NavBar = ({ history }) => {
  const {
    user: { username },
    dispatch,
  } = useContext(AppContext);

  const handleLogout = () => {
    dispatch({
      type: typeGState.logout,
    });
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">
        React-Bootstrap
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/salida">
            Salidas
          </Nav.Link>
          <NavDropdown title="Datos" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/datos/persona">
              Personas
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/datos/usuario">
              Usuarios
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">{username}</Nav.Link>
          <Button variant="link" onClick={handleLogout}>
            Logout
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
