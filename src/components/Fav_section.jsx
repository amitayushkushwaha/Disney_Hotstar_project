// favourite movie section on home page
import React from "react";
import { useSelector } from "react-redux";
import Movie_card from "./Movie_card";
import { Link } from "react-router-dom";
const g="-)))"
const Fav_section = () => {
  const state = useSelector((state) => state.addMovie);
  const fav_Movies = () => {
    return (
      <div>
        <h2 style={{ color: "white", paddingLeft: "100", marginLeft: "12%", display:"inline"}}>
          Favourite
        </h2>
       
        <br/>
      
        <div className="favourite_movie_card">
          {state.map((movie) => (
            <Link to="../static" state={movie} relative="path">
              <Movie_card
                cardImg={movie.cardImg}
                key={movie.id}
                title={movie.title}
              />
            </Link>
          ))}
          <a href="fav"
          style={{marginTop: "7rem"}}
          >
          <p style={{display: "inline", color:"white",marginTop:"6rem", marginLeft:"5px",fontSize:"2rem"}} className="show" title="Show_All">{g}</p>
          </a>
       
        </div>
       
      </div>
    );
  };

  return <>{state.length !== 0 && fav_Movies()}</>;
};

export default Fav_section;
