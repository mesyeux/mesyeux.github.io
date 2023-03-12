import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import dbsLogo from "../assets/images/dbs.png";
import { useState } from "react";
import { Modal } from "react-bootstrap";

function Experience() {
  const [show, setShow] = useState(false);

  const handleClick = (logo) => {
    // setShow("dbs");
  };

  const handleClose = () => {
    // setShow("");
  };

  return (
    <>
      <section className="experience" id="experience">
        <h2>Experience</h2>
        <Container className="experience-container">
          <Row>
            <Col>
              <Card
                style={{ width: "18rem" }}
                bg="secondary"
                onClick={handleClick("dbs")}
              >
                <Card.Img variant="top" src={dbsLogo} class="logo" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you're reading this text in a modal!
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>
        </Container>
      </section>
    </>
  );
}

export default Experience;
