export default class Movie {
  constructor(title, description, poster, backdrop) {
    this.title = title;
    this.description = description;
    this.poster = poster;
    this.backdrop = backdrop;
  }

  innterHtml() {
    return this.description;
  }
}
