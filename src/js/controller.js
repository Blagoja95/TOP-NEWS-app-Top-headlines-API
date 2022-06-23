import { Model } from "./model.js";
import { View } from "./view/view.js";

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.bindGetArticles(this.onStateChange);
    // init top articles
    this.onStateChange(this.model.state.articles);
  }

  onStateChange = (articles) => {
    this.view.displatArticles(articles);
  };
}

const app = new Controller(new Model(), new View());
