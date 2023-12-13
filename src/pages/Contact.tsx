import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { BsChatDotsFill } from "react-icons/bs";
import Swal from "sweetalert2";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Por favor, rellena todos los campos!",
      });
    } else {
      Swal.fire("Enviado!", "Tu mensaje ha sido enviado.", "success");
      setName("");
      setEmail("");
      setMessage("");
    }
  };
  

  return (
    <Container className="content">
      <Row className="g-2">
        <Col md="12">
          <h1>Contáctenos</h1>
        </Col>
        <Col
          sm="12"
          md="12"
        >
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Introduce tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Introduce tu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>

            <Button
              variant="success"
              type="submit"
              className="my-2"
            >
              <BsChatDotsFill /> Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
