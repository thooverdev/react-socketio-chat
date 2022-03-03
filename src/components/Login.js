import React, { useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";

export default function Login(props) {
  const idRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onIdSubmit(idRef.current.value);
  };

  return (
    <Container
      className="align-items-center d-flex"
      style={{ height: "100vh" }}
    >
      <Form onSubmit={handleSubmit} className="w-100">
        <Form.Group className="mb-2">
          <Form.Label>Enter Your ID</Form.Label>
          <Form.Control type="text" ref={idRef}></Form.Control>
        </Form.Group>
        <Button type="submit" style={{ marginRight: 10 }}>
          Login
        </Button>
        <Button variant="secondary">Create A New ID</Button>
      </Form>
    </Container>
  );
}
