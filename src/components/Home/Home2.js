import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                ABOUT<span className="purple"> ME </span>
              </h1>
              <p className="home-about-body">
                I'm a CS Sophomore @ BITS Pilani & Scaler School of Technology.
                <br />
                <br />Programming Languages I know:
                <i>
                  <b className="purple"> Java, Python, SQL, Javascript, C/C++</b>
                </i>
                <br />
                <br />
                I'm also a Machine Learning Enthusiast!
                <br />
                <br />
                Frameworks I work with: <b className="purple"> Spring Boot,</b>
                <i>
                  <b className="purple">
                    {" "}
                    React.js, Node.js, Hibernate ORM's, etc.
                  </b>
                </i>
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>CONNECT WITH ME</h1>
              <p>
                Feel free to <span className="purple">react out </span> to me:
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                      href="https://github.com/harshit4311"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>

                <li className="social-icons">
                  <a
                      href="https://www.linkedin.com/in/harshit-shah16"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
  );
}

export default Home2;

