import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
function Footer() {
  const year = new Date().getFullYear();
  return (

      <Container fluid className="footer">
        <Row className="footer-row">

          <Col md="4" className="footer-copywright">
            <h3>@ 2024 All rights reserved</h3>
          </Col>
          <Col md="4" className="footer-copywright">
            <h3>∞</h3>
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                    href="https://github.com/harshit4311"
                    style={{ color: "white" }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                    href="https://www.linkedin.com/in/harshit-shah16/"
                    style={{ color: "white" }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
  );
}

export default Footer;

