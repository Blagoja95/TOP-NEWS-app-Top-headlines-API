import { API_KEY as key } from "./general.js";

export class Model {
  constructor() {
    this.state = {
      articles: [],
    };
  }

  bindGetArticles = (callback) => {
    this._getData();
    this.onStateChange = callback;
  };

  _getData = async (
    category = "",
    search = "",
    country = "gb",
    apikey = key
  ) => {
    //   console.log(apikey, country);
    const data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apikey}`
    );

    const res = await data.json();
    this.state.articles = res.articles;

    this.onStateChange(this.state.articles);
  };
}
