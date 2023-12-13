import { Card, Col, Container, Row } from "react-bootstrap";

export const About = () => {
  return (
    <Container className="content">
      <Row className="g-2">
        <Col
          sm="12"
          md="12"
        >
          <h1 className="title-page">Acerca de Nosotros</h1>
        </Col>
        <Col
          sm="12"
        >
          <Card className="h-100">
            <Card.Header as="h2">Historia de la Empresa</Card.Header>
            <Card.Body>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sequi, commodi dolore ducimus id beatae nostrum dolorum corrupti obcaecati eveniet ad vitae sapiente inventore culpa animi asperiores error, fugit exercitationem?.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col
          sm="12"
        >
          <Card className="h-100" >
            <Card.Header as="h2">Más información</Card.Header>
            <Card.Body>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis earum culpa, facere obcaecati eligendi consequuntur, tempora adipisci vitae non magnam esse voluptatibus. Id, vitae necessitatibus dolore dignissimos quo recusandae corrupti!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
