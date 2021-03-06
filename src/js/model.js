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

  /**
   *
   * @param {type string default "" } category
   * @param {type string default "" default "" } search
   * @param {type string default 'gb' } country
   * @param {type string default API KEY VALUE } apikey
   */
  _getData = async (
    category = "",
    search = "",
    country = "gb",
    apikey = key
  ) => {
    //   console.log(apikey, country);
    const data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}${
        category == "" ? "" : "&category=" + category
      }${search == "" ? "" : "&q=" + search}&apiKey=${apikey}`
    );

    const res = await data.json();
    this.state.articles = res.articles;

    this.onStateChange(this.state.articles);
    return true;
  };

  // handle controler calls
  handleChangeCountry(country) {
    this._getData("", "", country);
    this.onStateChange(this.state.articles);
  }

  handleChangeCategory = async (category) => {
    await this._getData(category, "");
    this.onStateChange(this.state.articles);
  };

  handleChangeSearch = async (search) => {
    await this._getData("", search);
    this.onStateChange(this.state.articles);
  };
}
