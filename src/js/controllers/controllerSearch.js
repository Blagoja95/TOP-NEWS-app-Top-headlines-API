import { Model } from "../model.js";
import { View } from "../view/view.js";

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.render = false;

    this.model.bindGetArticles(this.onStateChange);
    // init top articles
    this.onStateChange(this.model.state.articles);

    // handle views
    this.view.bindChangeCountry(this.handleCountry);
    this.view.bindSearch(this.handleSearch);
  }

  onStateChange = (articles) => {
    if (this.render) this.view.displatArticles(articles);
  };

  handleCountry = (input) => {
    this.model.handleChangeCountry(input);
  };

  handleSearch = async (input) => {
    this.model.handleChangeSearch(input);
    this.render = true;
  };
}

const app = new Controller(new Model(), new View());
