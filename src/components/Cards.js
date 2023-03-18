import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import { useState } from "react";

function Cards(props) {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <div className="cards__items">
            {props.images.map((image) => {
              if (image.title === undefined) {
                return (
                  <CardItem
                    src={image.path}
                    displayModal={props.displayModal}
                  />
                );
              } else {
                return (
                  <CardItem
                    src={image.path}
                    text={image.title}
                    label={image.filter}
                    path={"/portfolio/" + image.folder}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
