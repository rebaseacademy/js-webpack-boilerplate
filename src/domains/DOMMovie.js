import Movie from './Movie';

export default class DOMMovie extends Movie {
  constructor(title, description, poster, backdrop, onClick) {
    super(title, description, poster, backdrop);
    this.onClick = onClick;
  }

  get element() {
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');
    movieElement.innerHTML = `<h2>${this.title}</h2><p>${this.description}</p>`;
    const img = DOMMovie.formatImage(this.backdrop);
    movieElement.style.backgroundImage = `url(${img})`;
    movieElement.addEventListener('click', this.onClick);
    return movieElement;
  }

  static formatImage(image) {
    return `https://image.tmdb.org/t/p/original/${image}`;
  }
}
