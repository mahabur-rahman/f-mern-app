import React, { useState } from "react";
// style
import "./login.scss";
// react bootstrap
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    // main data
    const data = await res.json();

    if (res.status === 400 || !data) {
      window.alert("Invalid credentials");
    } else {
      window.alert("Login Successful");
      history.push("/");
    }
  };

  return (
    <>
      <section id="login" className="py-5">
        <Container>
          <h3 className="text-center my-4 text-dark display-6 fw-bold">
            Login
          </h3>

          <Row>
            <Col xl={10} className="mx-auto">
              <Row>
                <Col xl={6}>
                  <Form method="POST">
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Control
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                      <Form.Control
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="password"
                      />
                    </Form.Group>

                    <div className="text-end">
                      <Link to="/register">Create an account</Link>
                    </div>

                    {/* submit btn */}
                    <div>
                      <input
                        type="submit"
                        value="Log In"
                        className="btn btn-success"
                        onClick={handleClick}
                      />
                    </div>
                  </Form>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Login;
