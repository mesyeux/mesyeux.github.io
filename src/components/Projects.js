import React from "react";
import { Container, Row, Col, Tab } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

function Projects() {
  return (
    <>
      <section className="projects" id="projects">
        <Container>
          <Row>
            <Col>
              <h2>Projects</h2>
              <p>Lorem ipsum bitch</p>
              <Tab.Container id="projects-tabs" defaultActiveKey="planit">
                <Nav variant="pills" defaultActiveKey="/home" fill justify>
                  <Nav.Item>
                    <Nav.Link eventKey="planit">PlanIT</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="spa">SPA</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="aws">AWS Hackathon</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content className="project-container">
                  <Tab.Pane eventKey="planit">
                    <h1>
                      PlanIT: a task planner for Computer Science students
                    </h1>
                    <p className="project-description">
                      Designed and developed a brown-field application for task
                      planning, incorporating object-oriented paradigms with
                      teammates Utilized: Java, JavaFX, Junit, Gradle, Git,
                      software engineering design principles
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="spa">
                    <h1>SPA: Static Program Analyser</h1>
                    <p className="project-description">
                      Worked on query processing subunit (parsing & query
                      validation) to build static program analyser from scratch
                      - Planned and designed components and APIs, coded, did
                      unit and system testing - Utilized: C++, Git, software
                      engineering design principles
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="aws">
                    <h1>AWS Hackathon: Build on, Singapore 2019</h1>
                    <p className="project-description">
                      Hackathon Finalist: Innovated and cooperated with 3 other
                      teammates to come up with proposals to alleviate problems
                      regarding WIFI data using AWS services
                    </p>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Projects;
