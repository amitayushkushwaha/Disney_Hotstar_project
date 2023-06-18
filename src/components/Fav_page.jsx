// favourite movie_page
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { del_Movie } from "../redux/actions";
function Fav_page() {
  const state = useSelector((state) => state.addMovie);
  const dispatch = useDispatch();
  const clickHandler=(movie)=>()=>{
    dispatch(del_Movie(movie));
  }
  return (
    <div className="f_container">
         <a href="home" style={{color: "black"}}>
        <p className="f_home"> Go Home</p>
        <br/>
      </a>
    
      {state.map((movie) => (
        <div
        key={movie.id}
          style={{
            display: "inline-grid",
            margin: "10px",
            position: "relative",
          }}
          className="f_movie_container"
        >
          <img src={movie.cardImg} alt={movie.title} 
          style={{borderRadius: "10px"}}

          />
          <p className="f_page" style={{display: "inline"}}
          onClick={clickHandler(movie)}
          >
            Remove from favourite
          </p>
        </div>
      ))}
    </div>
  );
}
export default Fav_page;
