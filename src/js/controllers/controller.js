import { Model } from "../model.js";
import { View } from "../view/view.js";

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.bindGetArticles(this.onStateChange);
    // init top articles
    this.onStateChange(this.model.state.articles);

    // handle views
    this.view.bindChangeCountry(this.handleCountry);
  }

  onStateChange = (articles) => {
    this.view.displatArticles(articles);
  };

  handleCountry = (input) => {
    this.model.handleChangeCountry(input);
  };
}

const app = new Controller(new Model(), new View());

// Hamburger menu
// const menuBtn = document.querySelector(".btn-menu");
const menuBtn = document.querySelector(".line");
const navigation = document.querySelector(".navigation-mobile");
menuBtn.addEventListener("click", function () {
  navigation.classList.toggle("hidden");
});
