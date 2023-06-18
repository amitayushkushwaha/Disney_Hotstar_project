//Popular movie component to show at home page
import React, { useState, useEffect } from "react";
import Movie_card from "./Movie_card";
import { Link } from "react-router-dom";
function New() {
  const [movies, setMovies] = useState([]);

  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:7900/movies", requestOptions)
      .then((response) => response.json())
      .then((result) => setMovies(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="movie_card">
      <h2 style={{ color: "white" }}>Popular Movies</h2>
      {movies.map(
        (movie) =>
          movie.type === "new" && (
            <Link to="../static" state={movie} relative="path">
            <Movie_card
              cardImg={movie.cardImg}
              key={movie.id}
              title={movie.title}
            />
          </Link>
          )
      )}
    </div>
  );
}
export default New;
