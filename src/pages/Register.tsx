import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { BsCheckCircleFill } from 'react-icons/bs';
import Swal from 'sweetalert2';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor, rellena todos los campos!',
      });
    } else {
      Swal.fire('Registrado!', 'Te has registrado exitosamente.', 'success');
      setName('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <Container className="content">
      <Row className="g-2">
        <Col sm="12" md="12">
          <h1>Registro</h1>
        </Col>
        <Col sm="12" md="12">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formNombre">
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

            <Form.Group controlId="formPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Introduce tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button
              variant="success"
              type="submit"
              className="my-2"
            >
              <BsCheckCircleFill /> Registrarse
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
