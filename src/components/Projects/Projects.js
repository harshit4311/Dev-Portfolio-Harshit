import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
  import Business from "../../Assets/Projects/Business_Website.png";
import form from "../../Assets/Projects/Form_validator.png";
import Quiz from "../../Assets/Projects/Quiz-app.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Business}
              isBlog={false}
              title="Event Management System"
              description="An end-to-end Event Management System using Spring Boot, MySQL, Hibernate ORMs, etc. for hosting + managing events."
              ghLink="https://github.com/harshit4311"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={Quiz}
                isBlog={false}
                title="Quiz App"
                description="A quiz app featuring 10 general knowledge questions, designed to test your knowledge. Built with React.js, the app tracks your score, provides instant feedback on each answer, and saves your progress. "
                ghLink="https://github.com/harshit4311"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={form}
              isBlog={false}
              title="Dog Breed Clasifier"
              description="A Deep Learning Model using Efficient Net & ConvNeXt architectures for classifying Dog Breeds"
              ghLink="https://github.com/harshit4311"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

