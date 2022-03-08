import React, { useState } from "react";
// style
import "./register.scss";
// react bootstrap
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  // get user typing data

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // form submit

  const formSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });

    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration ");
      console.log(" Registration Successful");
      history.push("/signin");
    }
  };

  return (
    <>
      <section id="register" className="py-5">
        <Container>
          <h3 className="text-center my-4 text-dark display-6 fw-bold">
            Sign Up
          </h3>
          <Row>
            <Col xl={10} className="mx-auto">
              <Row>
                <Col xl={6}>
                  <Form method="POST">
                    <Form.Group className="mb-3" controlId="name">
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="name"
                        value={user.name}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="email"
                        value={user.email}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="phone">
                      <Form.Control
                        type="number"
                        name="phone"
                        placeholder="phone"
                        value={user.phone}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="work">
                      <Form.Control
                        type="text"
                        name="work"
                        placeholder="work"
                        value={user.work}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                      <Form.Control
                        type="password"
                        name="password"
                        placeholder="password"
                        value={user.password}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="cpassword">
                      <Form.Control
                        type="password"
                        name="cpassword"
                        placeholder="confirm password"
                        value={user.cpassword}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <div className="text-end">
                      <Link to="/signin">I am already register</Link>
                    </div>

                    {/* submit btn */}
                    <div>
                      <input
                        type="submit"
                        value="Register"
                        className="btn btn-success"
                        onClick={formSubmit}
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

export default Register;
