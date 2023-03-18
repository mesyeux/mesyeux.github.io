import React from "react";
import { Container, Row, Col, Tab } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";
import planitImg from "../assets/images/planit-image.png";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <>
      <section className="projects" id="projects">
        <Container>
          <Row>
            <Col>
              <h2>Projects</h2>
              <Tab.Container id="projects-tabs" defaultActiveKey="planit">
                <Nav variant="pills" defaultActiveKey="/home" fill justify>
                  <Nav.Item>
                    <Nav.Link eventKey="planit" href="#planit">
                      PlanIT
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="spa" href="#spa">
                      SPA
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="aws" href="#aws">
                      AWS Hackathon
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content className="project-container">
                  <Tab.Pane eventKey="planit">
                    <section id="planit">
                      <h1>PlanIT</h1>
                      <div className="badge-container">
                        <Badge pill bg="secondary">
                          Java
                        </Badge>
                        <Badge pill bg="secondary">
                          JavaFX
                        </Badge>
                        <Badge pill bg="secondary">
                          JUnit
                        </Badge>
                        <Badge pill bg="secondary">
                          Gradle
                        </Badge>
                        <Badge pill bg="secondary">
                          Git
                        </Badge>
                        <Badge pill bg="secondary">
                          SWE Design Principles
                        </Badge>
                      </div>

                      <p className="project-description">
                        A task planner for Computer Science students Designed
                        and developed a brown-field application for task
                        planning, incorporating object-oriented paradigms with
                        teammates
                      </p>
                      <div className="project-links">
                        <Link
                          to="https://ay2021s2-cs2103t-t10-2.github.io/tp/"
                          target="_blank"
                        >
                          Documentation
                        </Link>
                        <Link
                          to="https://github.com/mesyeux/tp"
                          target="_blank"
                        >
                          Source
                        </Link>
                      </div>
                      <img src={planitImg} className="project-image" />
                    </section>
                  </Tab.Pane>
                  <Tab.Pane eventKey="spa">
                    <section id="spa">
                      <h1>SPA: Static Program Analyser</h1>
                      <div className="badge-container">
                        <Badge pill bg="secondary">
                          C++
                        </Badge>
                        <Badge pill bg="secondary">
                          Git
                        </Badge>
                        <Badge pill bg="secondary">
                          SWE Design Principles
                        </Badge>
                      </div>
                      <p className="project-description">
                        Worked on query processing subunit (parsing & query
                        validation) to build static program analyser from
                        scratch - Planned and designed components and APIs,
                        coded, did unit and system testing - Utilized: C++, Git,
                        software engineering design principles
                      </p>
                    </section>
                  </Tab.Pane>
                  <Tab.Pane eventKey="aws">
                    <section id="aws">
                      <h1>AWS Hackathon: Build on, Singapore 2019</h1>

                      <p className="project-description">
                        Hackathon Finalist: Innovated and cooperated with 3
                        other teammates to come up with proposals to alleviate
                        problems regarding WIFI data using AWS services
                      </p>
                    </section>
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
