import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./navbar.css";

function CustomNavbar() {

  const handleScroll = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle-btn" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav-links">
            <Nav.Link onClick={() => handleScroll("#home")}>Home</Nav.Link>
            <Nav.Link onClick={() => handleScroll("#about")}>About</Nav.Link>
            <Nav.Link onClick={() => handleScroll("#projects")}>Projects</Nav.Link>
            <Nav.Link onClick={() => handleScroll("#contact")}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
