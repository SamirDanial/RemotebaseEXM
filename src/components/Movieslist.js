import React from "react";
import { useSelector } from "react-redux";

function Movieslist() {
  const movies = useSelector((state) => state.movie.movies);
  const textInFilteredText = useSelector(
    (state) => state.movie.textInFilteredText
  );
  const filteredMovies = useSelector((state) => state.movie.filteredMovies);

  return (
    <section>
      <ul className="styled w-100 pl-0" data-testid="moviesList">
        {textInFilteredText &&
          filteredMovies &&
          filteredMovies.map((x) => (
            <li
              key={x.name}
              className="flex slide-up-fade-in justify-content-between"
              style={{ borderBottom: "2px solid var(--primary-color)" }}
            >
              <div className="layout-column w-40">
                {x.name !== null && x.name}
                <h3 className="my-3"></h3>
                {/* use this paragraph for movie ratings, for example: 'Ratings: 88/100' */}
                {x.rating !== null && x.rating}
                <p className="my-0"></p>
              </div>
              <div className="layout-row my-auto mr-20">
                {/* use this paragraph for movie duration, for example: '2.5 Hrs' */}
                {x.duration !== null && x.duration}
                <p className="justify-content-end"></p>
              </div>
            </li>
          ))}

        {!textInFilteredText &&
          movies &&
          movies.map((x) => (
            <li
              key={x.name}
              className="flex slide-up-fade-in justify-content-between"
              style={{ borderBottom: "2px solid var(--primary-color)" }}
            >
              <div className="layout-column w-40">
                {x.name !== null && x.name}
                <h3 className="my-3"></h3>
                {/* use this paragraph for movie ratings, for example: 'Ratings: 88/100' */}
                Ratings:{x.rating !== null && x.rating}
                <p className="my-0"></p>
              </div>
              <div className="layout-row my-auto mr-20">
                {/* use this paragraph for movie duration, for example: '2.5 Hrs' */}
                {x.duration !== null && x.duration}
                <p className="justify-content-end"></p>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
}

export default Movieslist;
