import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards(props) {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <div className="cards__items">
            {props.images.map((image) => {
              if (image.text == "") {
                return <CardItem src={image.path} />;
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
