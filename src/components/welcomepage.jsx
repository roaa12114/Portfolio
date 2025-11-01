import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import welcomeImage from "../assests/images/image2.jpg";
import "./welcomepage.css";
import CustomNavbar from "./navbar";

function Welcomepage() {
  return (
    <div id="home"
      className="welcome-container d-flex flex-column justify-content-center align-items-center text-center"
      style={{
        backgroundImage: `url(${welcomeImage})`,
      }}
    >
      <CustomNavbar />
      <Container fluid className="text-light welcome-content">
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <h1 className="welcome-title">ROAA'S PORTFOLIO</h1>
            <p className="welcome-subtitles">
              Welcome to my creative space — where design meets code
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Welcomepage;
