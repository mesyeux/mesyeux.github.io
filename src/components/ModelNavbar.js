import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DropDownItem from "./DropDownItem";
import "./ModelNavbar.css";
import { CiInstagram } from "react-icons/ci";

function ModelNavbar(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const handleDropdown = () => setDropdown(!dropdown);

  const onClick = (filter, text) => {
    handleDropdown();

    props.filterImages(filter);
    props.setCoverText(text);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect((filter) => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton); //??

  return (
    <>
      <nav className="model-navbar">
        <div className="model-container">
          <Link to="/" className="model-navbar-logo" onClick={closeMobileMenu}>
            chloe lau
          </Link>
          <Link
            to="https://www.instagram.com/cloyeeee/?hl=en"
            className="links"
          >
            <CiInstagram className="instagram-model" />
            {/* <i class="bi bi-instagram" id="instagram-model"></i> */}
            {/* <i class="fa-brands fa-instagram fa-lg" id="instagram-model"></i> */}
          </Link>
          <div className="model-navbar-container">
            <div className="menu-icon" onClick={handleClick}>
              <i
                className={click ? "fa-solid fa-times" : "fa-solid fa-bars"}
              ></i>
            </div>
            <ul className={click ? "model-nav-menu active" : "model-nav-menu"}>
              <li className="model-nav-item">
                <Link
                  to="/profile"
                  className="model-nav-links"
                  onClick={closeMobileMenu}
                >
                  Profile
                </Link>
              </li>
              <li className="model-nav-item">
                <div className="menu-container">
                  <div className="model-nav-links" onClick={handleDropdown}>
                    Portfolio&nbsp;
                    <i
                      className="fa fa-caret-down fa-sm"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div
                    className={
                      dropdown
                        ? "model-dropdown-menu active"
                        : "model-dropdown-menu inactive"
                    }
                  >
                    <ul class="list-unstyled">
                      <DropDownItem
                        text="Editorials"
                        link="/portfolio/editorials"
                        onClick={() => onClick("editorial", "EDITORIAL")}
                      />
                      <DropDownItem
                        text="Ecommerce"
                        link="/portfolio/ecommerce"
                        onClick={() => onClick("ecommerce", "ECOMMERCE")}
                      />
                      <DropDownItem
                        text="Lookbooks"
                        link="/portfolio/lookbooks"
                        onClick={() => onClick("lookbook", "LOOKBOOK")}
                      />
                      <DropDownItem
                        text="Runway"
                        link="/portfolio/runway"
                        onClick={() => onClick("runway", "RUNWAY")}
                      />
                      <DropDownItem
                        text="Tests"
                        link="/portfolio/tests"
                        onClick={() => onClick("test", "TESTS")}
                      />
                      <DropDownItem
                        text="All"
                        link="/portfolio"
                        onClick={() => onClick("", "PORTFOLIO")}
                      />
                    </ul>
                  </div>
                </div>
              </li>
              <li className="model-nav-item">
                <Link
                  to="/digitals"
                  className="model-nav-links"
                  onClick={closeMobileMenu}
                >
                  Digitals
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default ModelNavbar;
