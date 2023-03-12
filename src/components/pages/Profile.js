import React from "react";
import ModelNavbar from "../ModelNavbar";
import CardItem from "../CardItem";
import { DIGITALS } from "../images";
import { TabContainer, Tab, Row, Col, Nav, Container } from "react-bootstrap";
import { useState } from "react";

function Profile() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <>
      <ModelNavbar />
      <div className="profile-container">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              {activeTab === "about" ? (
                <img src={DIGITALS[7]["path"]} className="profile-pic" />
              ) : activeTab === "stats" ? (
                <img src={DIGITALS[8]["path"]} className="profile-pic" />
              ) : (
                <img src={DIGITALS[9]["path"]} className="profile-pic" />
              )}
            </Col>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column profile-nav">
                <Nav.Item
                  className={
                    activeTab === "about"
                      ? "profile-nav-item active"
                      : "profile-nav-item inactive"
                  }
                >
                  <Nav.Link
                    eventKey="first"
                    onClick={() => setActiveTab("about")}
                  >
                    About
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item
                  className={
                    activeTab === "stats"
                      ? "profile-nav-item active"
                      : "profile-nav-item inactive"
                  }
                >
                  <Nav.Link
                    eventKey="second"
                    onClick={() => setActiveTab("stats")}
                  >
                    Stats
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item
                  className={
                    activeTab === "agencies"
                      ? "profile-nav-item active"
                      : "profile-nav-item inactive"
                  }
                >
                  <Nav.Link
                    eventKey="third"
                    onClick={() => setActiveTab("agencies")}
                  >
                    Agencies
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={6} className="info-container">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <p>I am a model</p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Container className="agencies-container">
                    <Row>
                      <Col>
                        <p>Height</p>
                      </Col>
                      <Col>
                        <p>175cm</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p>Bust</p>
                      </Col>
                      <Col>
                        <p>88cm</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p>Waist</p>
                      </Col>
                      <Col>
                        <p>57cm</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p>Hips</p>
                      </Col>
                      <Col>
                        <p>88cm</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p>Shoes</p>
                      </Col>
                      <Col>
                        <p>EU 40</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p>Hair</p>
                      </Col>
                      <Col>
                        <p>Black</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p>Eyes</p>
                      </Col>
                      <Col>
                        <p>Brown</p>
                      </Col>
                    </Row>
                  </Container>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Container className="agencies-container">
                    <Row>
                      <Col>
                        <p>Singapore</p>
                      </Col>
                      <Col>
                        <p>Mannequin Studio</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p>Paris</p>
                      </Col>
                      <Col>
                        <p>Elite Paris</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p>Milan</p>
                      </Col>
                      <Col>
                        <Nav.Link
                          href="https://www.elitemodel.it/it/women/development/10597-chloe-yau.web"
                          target="_blank"
                        >
                          <p>Elite Milano</p>
                        </Nav.Link>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p>Amsterdam</p>
                      </Col>
                      <Col>
                        <Nav.Link
                          href="https://www.elitemodel.nl/en/women/image/10597-chloe.web"
                          target="_blank"
                        >
                          <p>Elite Amsterdam</p>
                        </Nav.Link>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p>London</p>
                      </Col>
                      <Col>
                        <Nav.Link
                          href="https://www.kultlondon.uk/sedcard/chloe-lau/3452"
                          target="_blank"
                        >
                          <p>Kult London</p>
                        </Nav.Link>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p>Germany</p>
                      </Col>
                      <Col>
                        <Nav.Link
                          href="https://www.kultmodels.com/sedcard/chloe-lau/3452"
                          target="_blank"
                        >
                          <p>Kult Germany</p>
                        </Nav.Link>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p>Stockholm</p>
                      </Col>
                      <Col>
                        <Nav.Link
                          href="https://www.thewonders.se/new-wonders/240-chloe/"
                          target="_blank"
                        >
                          <p>The Wonders</p>
                        </Nav.Link>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p>Norway</p>
                      </Col>
                      <Col>
                        <Nav.Link
                          href="https://www.idollooks.com/idstudio-models-1/chloe"
                          target="_blank"
                        >
                          <p>Idollooks</p>
                        </Nav.Link>
                      </Col>
                    </Row>
                  </Container>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </>
  );
}

export default Profile;
