import { Card, Col, Container, Row, Image } from "react-bootstrap";
import img from "../assets/images/img1.png";
export const Mission = () => {
  return (
    <Container className="content">
      <Row className="g-2">
        <Col
          sm="12"
          md="12"
        >
          <h1>Misión</h1>
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
                    Nuestra visión en Banco Patito es ser el banco de elección
                    en nuestra comunidad, reconocido por nuestro compromiso con
                    la excelencia, la ética y el crecimiento sostenible.
                    Aspiramos a ser líderes en la industria financiera,
                    ofreciendo soluciones innovadoras que empoderen a nuestros
                    clientes y promuevan un futuro financiero seguro.
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
