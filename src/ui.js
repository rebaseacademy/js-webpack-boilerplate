import './styles/styles.css';

const appContainer = document.getElementById('app');
let mainContainer;

function createSearchBar(options) {
  const searchBar = document.createElement('form');
  searchBar.classList.add('search');
  searchBar.innerHTML = "<input type='search' name='searchTerm'><button>Search</button>";

  searchBar.addEventListener('submit', (e) => {
    e.preventDefault();
    options.onSearch(e.target.searchTerm.value);
  });

  return searchBar;
}

function createHeader({ onSearch }) {
  const header = document.createElement('header');
  header.classList.add('hero');
  header.innerHTML = '<h1 class="title">The Movie DB Trial</h1>';
  header.appendChild(createSearchBar({ onSearch }));
  return header;
}

function createMovie(movie) {
  const movieElement = document.createElement('div');
  movieElement.classList.add('movie');
  movieElement.innerHTML = `<h2>${movie.title}</h2><p>${movie.overview}</p>`;
  const img = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
  movieElement.style.backgroundImage = `url(${img})`;
  return movieElement;
}

function createMain() {
  const main = document.createElement('main');
  main.classList.add('body');
  return main;
}

function renderPage({ onSearch }) {
  appContainer.innerHTML = '';
  appContainer.appendChild(createHeader({ onSearch }));
  mainContainer = createMain();
  appContainer.appendChild(mainContainer);
}

function renderMovies(movies) {
  mainContainer.innerHTML = '';
  movies.forEach((movie) => {
    mainContainer.appendChild(createMovie(movie));
  });
}

export default {
  renderPage,
  renderMovies,
};
