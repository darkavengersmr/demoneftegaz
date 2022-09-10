import { makeAutoObservable } from "mobx";
import { INews, INewsInstance } from "../interfaces/interfaces";
import { someNews } from "./mock-data/news-profsouz";


class News implements INewsInstance {
  news: INews[] = someNews;

  constructor() {
    makeAutoObservable(this);
  }

  getNews() {
    return this.news.filter((news) => news.typeOfNews === "news");
  }

  hasMainNews() {
    return this.news.some((news) => news.typeOfNews === "main");
  }
  getMainNews() {
    return this.news.filter((news) => news.typeOfNews === "main");
  }
}

export default new News();
