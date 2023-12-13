import logo from "../assets/logo.png";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar
      expand="md"
      bg="dark"
      variant="dark"
      className="px-3 px-md-4"
    >
      <Navbar.Brand
        as={Link}
        to="/web-bank-duck/"
      >
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="logo"
        />{" "}
        Banco patito
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        className="d-md-flex justify-content-end"
        id="basic-navbar-nav"
      >
        <Nav className="mr-auto header">
          <Nav.Link
            as={Link}
            to="/web-bank-duck/inicio"
          >
            Inicio
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/web-bank-duck/mision"
          >
            Misión
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/web-bank-duck/vision"
          >
            Visión
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/web-bank-duck/contacto"
          >
            Contacto
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/web-bank-duck/acerca"
          >
            Acerca de
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/web-bank-duck/creditos"
          >
            Creditos
          </Nav.Link>
          <NavDropdown 
            title="Más" 
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item
              as={Link}
              to="/web-bank-duck/comunicados"
            >
              Comunicados
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/web-bank-duck/login"
            >
              Iniciar Sesión
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
