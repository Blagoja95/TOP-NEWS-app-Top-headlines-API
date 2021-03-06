import * as tags from "../tags.js";

export class View {
  constructor() {}

  _removeElement = (element) => {
    while (element.firstChild) element.removeChild(element.firstChild);
  };

  _renderHtml = (data, element) => {
    let html = ``;
    if (Object.keys(data).length !== 0)
      html = `
      <div class="press" >
        <h2 class="title">${data.title}</h2>
        <img src="${
          data.urlToImage ? data.urlToImage : "src/images/press.jpg"
        }" alt="press ${data.autor}" class="img-press">
        <div class="desc">
          <p class="description">${data.description}</p>
          <a href="${data.url}"  class="link-more" target="_blank">More ></a>
        </div>
      </div>
    `;
    else html = `<h1 class="no-news">There is no news ...</h1>`;

    this._insertHTML(element, html);
  };

  _insertHTML(element, html, position = "beforeend") {
    element.insertAdjacentHTML(position, html);
  }

  displatArticles = (articles) => {
    this._removeElement(tags.news);

    if (Object.keys(articles).length === 0) {
      this._renderHtml([], tags.news);
      return;
    }

    let i = 0;
    while (i < 6) {
      this._renderHtml(articles[i], tags.news);
      i++;
    }
  };

  bindChangeCountry = (handler) => {
    tags.countries.forEach((countrie, index) => {
      countrie.addEventListener("click", (e) => {
        e.preventDefault();
        handler(e.target.innerHTML.toLowerCase());

        // clear then add active class
        tags.countries.forEach((countrie) =>
          countrie.classList.remove("active")
        );
        countrie.classList.add("active");

        // title
        if (tags.topNewsTitleOrigin)
          tags.topNewsTitleOrigin.innerHTML = `${
            index == 1 ? "United States" : "Great Britain"
          }`;
      });
    });
  };

  bindChangeCategory = (handler) => {
    if (!tags.formCategories) return;
    tags.formCategories.addEventListener("submit", (e) => {
      e.preventDefault();
      handler(document.forms["categories"]["news"].value);
    });
  };

  bindSearch = (handler) => {
    if (!tags.formSearch) return;
    tags.formSearch.addEventListener("submit", (e) => {
      e.preventDefault();
      if (document.forms["form"]["search"].value !== "")
        handler(document.forms["form"]["search"].value);
    });
  };
}
