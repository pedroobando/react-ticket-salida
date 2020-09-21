import React, { useContext } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AppContext } from '../../reducers/AppContext';
import { typeAuth } from '../../types/types';

export const NavBar = ({ history }) => {
  const {
    user: { username },
    dispatch,
  } = useContext(AppContext);

  const handleLogout = () => {
    dispatch({
      type: typeAuth.logout,
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
          <Nav.Link as={Link} to="/salidas">
            Salidas
          </Nav.Link>
          <NavDropdown title="Datos" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/datos/personas">
              Personas
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/datos/usuarios">
              Usuarios
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">{username}</Nav.Link>
          {/* <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
