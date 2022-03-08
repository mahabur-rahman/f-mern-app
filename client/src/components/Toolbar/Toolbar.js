import React from "react";
// style
import "./toolbar.scss";
// react bootstrap
import { Container, Navbar, Nav } from "react-bootstrap";
// react router
import { Link } from "react-router-dom";

const Toolbar = () => {
  return (
    <>
      <header id="header">
        <Navbar bg="light" expand="lg">
          <Container>
            <Link to="/">
              <Navbar.Brand>MernApp</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <Link to="/about" className="nav-link">
                  About
                </Link>
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
                <Link to="/signin" className="nav-link">
                  Login
                </Link>
                <Link to="/register" className="nav-link">
                  Registration
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Toolbar;
