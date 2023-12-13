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
        to="/"
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
            to="/inicio"
          >
            Inicio
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/mision"
          >
            Misión
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/vision"
          >
            Visión
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/contacto"
          >
            Contacto
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/acerca"
          >
            Acerca de
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/creditos"
          >
            Creditos
          </Nav.Link>
          <NavDropdown 
            title="Más" 
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item
              as={Link}
              to="/comunicados"
            >
              Comunicados
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/login"
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
