import React, { useState, useEffect } from "react";
// style
import "./contact.scss";
// react bootstrap
import { Container, Row, Col, Form } from "react-bootstrap";

const Contact = () => {
  const [userData, setUserData] = useState({});

  const callContactPage = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      // main data
      const data = await res.json();
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callContactPage();
  }, []);

  return (
    <>
      <section id="contact" className="py-5">
        <Container>
          <Row className="mb-3">
            <Col xl={4} className="border border-1">
              <h5>Phone</h5>
              <p>254252542</p>
            </Col>
            <Col xl={4} className="border border-1">
              <h5>Email</h5>
              <p>annur@gmail.com</p>
            </Col>
            <Col xl={4} className="border border-1">
              <h5>Address</h5>
              <p>Dhaka, Bangladesh</p>
            </Col>
          </Row>

          <Row>
            <Col xl={10} className="mx-auto">
              <Row>
                <h2 className="text-dark my-4">Get In Touch</h2>
                <Col xl={6}>
                  <Form method="GET">
                    <Form.Group className="mb-3" controlId="name">
                      <Form.Control
                        type="name"
                        name="name"
                        id="name"
                        placeholder="name"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                      <Form.Control
                        type="email"
                        name="email"
                        id="email"
                        placeholder="email"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="phone">
                      <Form.Control
                        type="number"
                        name="phone"
                        id="phone"
                        placeholder="phone"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="phone">
                      <textarea
                        name="message"
                        rows="5"
                        placeholder="message...."
                        className="form-control"
                      ></textarea>
                    </Form.Group>

                    {/* submit btn */}
                    <div>
                      <button className="btn btn-primary" type="submit">
                        Contact Now
                      </button>
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

export default Contact;
