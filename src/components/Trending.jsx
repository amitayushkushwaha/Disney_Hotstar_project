// trending page for trending and latest section at home page
import React, { useState, useEffect } from "react";
import Movie_card from "./Movie_card";

function Trending() {
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
      <h2 style={{ color: "white" }}>Latest&Trending</h2>
      {movies.map(
        (movie) =>
          movie.type === "trending" && (
            <a href="static">
              <Movie_card
                cardImg={movie.cardImg}
                key={movie.id}
                title={movie.title}
              />
            </a>
          )
      )}
    </div>
  );
}
export default Trending;
