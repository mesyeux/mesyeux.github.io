import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <div className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <div className="img__wrap">
            <img
              src={props.src}
              alt="Portfolio Picture"
              className="cards__item__img"
            ></img>
            <p className="img__description"> {props.text} </p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default CardItem;
