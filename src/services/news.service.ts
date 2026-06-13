import { ApiError } from "common-microservices-utils";
import { API_ERRORS } from "../constants/app.constant";
import NewsRepository from "../repositories/news.repository";
import { createNewsType, updateNewsType } from "../types/news.type";

class NewsService {
  newsRepository: NewsRepository;
  constructor() {
    this.newsRepository = new NewsRepository();
  }

  create = async (data: createNewsType) => {
    const result = await this.newsRepository.create(data);
    return result;
  };
  update = async (id: string, data: updateNewsType) => {
    const chechkNes = await this.newsRepository.getById(id);
    if (!chechkNes) {
      throw new ApiError(404, API_ERRORS.NEWS_NOT_FOUND);
    }
    const result = await this.newsRepository.update(id, data);
    return result;
  };
  getById = async (id: string) => {
    const chechkNes = await this.newsRepository.getById(id);
    if (!chechkNes) {
      throw new ApiError(404, API_ERRORS.NEWS_NOT_FOUND);
    }
    return chechkNes;
  };
  delete = async (id: string) => {
    const chechkNes = await this.newsRepository.getById(id);
    if (!chechkNes) {
      throw new ApiError(404, API_ERRORS.NEWS_NOT_FOUND);
    }
    const result = await this.newsRepository.delete(id);
    return result;
  };
  getAll = async (page: number, limit: number) => {
    const result = await this.newsRepository.getAll(page, limit);
    return result;
  };
}

export default NewsService;
