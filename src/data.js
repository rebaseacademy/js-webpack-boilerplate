import DOMMovie from './domains/DOMMovie';

const state = {
  movies: [],
};

function getMovies() {
  return state.movies;
}

function setMovies(movies) {
  state.movies = movies.map(
    (movie) => new DOMMovie(
      movie.title,
      movie.overview,
      movie.poster_path,
      movie.backdrop_path,
      // eslint-disable-next-line no-alert
      () => alert(`${movie.title} clicked`),
    ),
  );
}

export default {
  getMovies,
  setMovies,
};
