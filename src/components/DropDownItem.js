import React from "react";
import { Link } from "react-router-dom";
import "./DropDownItem.css";

function DropDownItem(props) {
  return (
    <>
      <li>
        <Link className="dropdown-item" to={props.link} onClick={props.onClick}>
          {props.text}
        </Link>
      </li>
    </>
  );
}

export default DropDownItem;
