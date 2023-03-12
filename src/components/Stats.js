import React from "react";
import { useState } from "react";
import "./Stats.css";

function Stats() {
  const [metric, setMetric] = useState(true);
  return (
    <>
      <Container>
        <Row>
          <Col></Col>
        </Row>
      </Container>
      <div className="stats_wrapper">
        <div className="row-wrapper">
          <div className="stat">Height:</div>
          <div className="stat">Bust:</div>
          <div className="stat">Waist:</div>
          <div className="stat">Hips:</div>
          <div className="stat">Shoes:</div>
          <div className="stat">Hair:</div>
          <div className="stat">Eyes:</div>
        </div>
        <div className="col-wrapper">
          {metric ? (
            <div className="value">175cm</div>
          ) : (
            <div className="value">5"9</div>
          )}
          {metric ? (
            <div className="value">70cm</div>
          ) : (
            <div className="value">idk</div>
          )}
          {metric ? (
            <div className="value">57cm</div>
          ) : (
            <div className="value">idk</div>
          )}
          {metric ? (
            <div className="value">88cm</div>
          ) : (
            <div className="value">idk</div>
          )}
          {metric ? (
            <div className="value">EU 40</div>
          ) : (
            <div className="value">US 9</div>
          )}
          <div className="value">Black</div>
          <div className="value">Brown</div>
        </div>
      </div>
      <div className="switch">
        <i
          class="fa-solid fa-arrows-left-right"
          onClick={() => setMetric(!metric)}
        ></i>
        &nbsp;{metric ? "Imperial" : "Metric"}
      </div>
    </>
  );
}

export default Stats;
