import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import logo from "../assets/logo.png";

interface Comunicado {
  titulo: string;
  contenido: string;
  archivo: string;
}

interface ComunicadosProps {
  comunicados: Comunicado[];
}

export const Comunicados: React.FC<ComunicadosProps> = ({ comunicados }) => {
  return (
    <Container className="content">
      <h1>Créditos</h1>
      <Row>
        {comunicados.map((comunicado, index) => (
          <Col
            sm="12"
            md="6"
            key={index + "-" + index}
          >
            <Card
              key={index}
              className="mb-2"
            >
              <Card.Header>
                <strong>{comunicado.titulo}</strong>
              </Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    <Image
                      src={logo}
                      width="30"
                    ></Image>{" "}
                    {comunicado.contenido}{" "}
                  </p>
                  <br />
                  <footer className="blockquote-footer">
                    Informa <cite title="Source Title">Banco Patito</cite>
                  </footer>
                </blockquote>
              </Card.Body>
              <Card.Footer>
                <a
                  className="btn btn-outline-danger"
                  href={comunicado.archivo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsFileEarmarkPdfFill /> Descargar archivo
                </a>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
