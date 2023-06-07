import React, { useState } from "react";
import "./Carousel.css";
import { images } from "./CarouselData";
const r = ">";
const l = "<";

function Carousel() {
  const [currImg, setCurrImg] = useState(0);
  const [colour1, setColour1] = useState("grey");
  const [colour2, setColour2] = useState("white");
  const [count, setCount] = useState(0);

  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currImg].img})` }}
      >
        <div
          className="left"
          onClick={() => {
            if (currImg > 0) {
              setCurrImg(currImg - 1);

              setColour1("grey");
              setColour2("white");
            }
          }}
        >
          <p className="left_image" style={{ color: colour1 }}>
            {l}
          </p>
        </div>

        <div
          className="right"
          onClick={() => {
            if (currImg < images.length - 1) {
              setCurrImg(currImg + 1);
              setColour1("white");
              setColour2("grey");
              setCount(1);
            }
          }}
        >
          <p className="right_image" style={{ color: colour2 }}>
            {r}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
