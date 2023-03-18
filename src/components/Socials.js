import React from "react";
import { CiInstagram, CiLinkedin } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

function Socials() {
  return (
    <>
      <div className="side-socials">
        <ul>
          <li>
            <Nav.Link
              href="https://www.instagram.com/cloyeeee/?hl=en"
              target="_blank"
            >
              <CiInstagram className="side-socials-icon" />
            </Nav.Link>
          </li>
          <li>
            <Nav.Link
              href="https://www.linkedin.com/in/chloe-lau-cheuk-ying/"
              target="_blank"
            >
              <CiLinkedin className="side-socials-icon" />
            </Nav.Link>
          </li>
          <li>
            <Nav.Link href="https://github.com/mesyeux" target="_blank">
              <VscGithubAlt className="side-socials-icon" />
            </Nav.Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Socials;
