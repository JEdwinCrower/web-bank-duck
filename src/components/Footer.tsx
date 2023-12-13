import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-dark text-white py-4 footer">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Banco Patito</h5>
            <p>Tu confianza es nuestro compromiso.</p>
          </Col>
          <Col md={4}>
            <h5>Enlaces útiles</h5>
            <ul>
              <li>
                <Link to="/inicio">Inicio</Link>
              </li>
              <li>
                <Link to="/acerca">Acerca de</Link>
              </li>
              <li>
                <Link to="/contacto">Contacto</Link>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contáctenos</h5>
            <p>
              Calle 123, El Alto, Bolivia
              <br />
              +591 76525055
              <br />
              +591 69887096
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <hr />
            <p className="pt-2 fw-bold">
              ©{year} Banco Patito - Jose Edwin Quispe Apaza
              <br />
              Paralelo <em>'A'</em> INF-122
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
