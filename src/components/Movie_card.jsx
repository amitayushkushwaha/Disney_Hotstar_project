//  Movie_Card for each movie
import React from "react";

function Movie_card(props) {
  return <img src={props.cardImg} alt={props.title} />;
}
export default Movie_card;
