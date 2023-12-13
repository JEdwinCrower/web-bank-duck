import { Card, Col, Container, Row, Image } from "react-bootstrap";
import img from "../assets/images/img2.png";

export const Vision = () => {
  return (
    <Container className="content">
      <Row className="g-2">
        <Col
          sm="12"
          md="12"
        >
          <h1>Visión</h1>
        </Col>
        <Col sm="12">
          <Card className="h-100">
            <Card.Body>
              <Row className="g-2">
                <Col
                  xs="12"
                  md="6"
                >
                  <Image
                    width="100%"
                    src={img}
                    rounded
                  />
                </Col>
                <Col>
                  <p>
                    En Banco Patito, nuestra misión es proporcionar servicios
                    financieros de alta calidad que satisfagan las necesidades
                    de nuestros clientes y contribuyan al crecimiento económico
                    de nuestra comunidad. Nos esforzamos por mantener la
                    confianza de nuestros clientes a través de la integridad, la
                    innovación y un servicio excepcional.
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
