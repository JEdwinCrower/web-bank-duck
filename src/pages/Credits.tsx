import { Container, Row, Col, Card } from "react-bootstrap";

export const Credits = () => {
  return (
    <Container className="content">
      <Row className="g-2">
        <Col
          sm="12"
          md="12"
        >
          <h1>Créditos</h1>
        </Col>
        <Col>
          <Card className="px-2 text-bg-primary mb-3">
            <Card.Body>
              <strong>Desarrollado por: </strong>
              <p>José Edwin Quispe Apaza</p>
              <strong>Email: </strong>
              <p>joseedwinqa@gmail.com</p>
              <strong>Materia - Paralelo: </strong>
              <p>
                INF-122 <em>'A'</em>
              </p>
              <strong>Año: </strong>
              <p>2023</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
