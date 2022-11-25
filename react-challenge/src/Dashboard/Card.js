import React from "react";
import { CardStyles, CardImage, TextImg } from "./Card.styles";

const Card = (props) => {
  console.log(props);
  return (
    <CardStyles>
      <CardImage className="card" src={`${props?.values.images.sm}`}>
        <TextImg>
          <span className="card-title">
            <p>{props.values.name}</p>
          </span>
          <p>Height: {`${props.values.appearance.height[1]}`}</p>
          <p>Height: {`${props.values.appearance.weight[1]}`}</p>
        </TextImg>
      </CardImage>
    </CardStyles>
  );
};

export default Card;
