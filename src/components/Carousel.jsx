// slider at home Page component
import React, { useState } from "react";
import "./Carousel.css";
import { images } from "./CarouselData";
const r = ">";
const l = "<";

function Carousel() {
  const [currImg, setCurrImg] = useState(0);
  // changing color on click
  const [colour1, setColour1] = useState("grey");
  const [colour2, setColour2] = useState("white");


  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currImg].backgroundImg})` }}
      >
        <div
          className="left"
          onClick={() => {
            if (currImg > 0) {
              setCurrImg(currImg - 1);
             if(currImg==2){
              setColour2("grey");
              setColour1("white")
             }else if(currImg==1){
              setColour2("white")
              setColour1("grey");
             }else{
              setColour2("white")
              setColour1("white");
             }
             console.log(currImg);
            }
          }}
        >
          <p className="left_image" style={{ color: colour1 }}>
            {l} 
          </p>
          <p className="genre">{images[currImg].genre}</p>
        </div>

        <div
          className="right"
          onClick={() => {
            if (currImg < images.length - 1) {
              setCurrImg(currImg + 1);
              if(currImg==2){
                setColour2("grey");
                setColour1("white")
               }else{
                setColour2("white")
                setColour1("white");
               }
               console.log(currImg);
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
