import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { BsFillUnlockFill } from "react-icons/bs";
// import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Por favor, rellena todos los campos!",
      });
    } else {
      Swal.fire("Iniciado!", "Has iniciado sesión.", "success");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <Container className="content">
      <Row className="g-2">
        <Col
          sm="12"
          md="12"
        >
          <h1>Inicio de Sesión</h1>
        </Col>
        <Col
          sm="12"
          md="12"
        >
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Introduce tu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Introduce tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end my-2">
              <Button
                variant="success"
                type="submit"
              >
                <BsFillUnlockFill /> Iniciar Sesión
              </Button>
              {/* <NavLink
                className="btn btn-primary"
                to="/web-bank-duck/registrarse"
              >
                <BsPlusCircleFill /> Registrarse
              </NavLink> */}
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
