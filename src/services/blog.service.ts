import { ApiError } from "common-microservices-utils";
import { API_ERRORS } from "../constants/app.constant";
import { createEventType, updateEventType } from "../types/event.type";
import NewsRepository from "../repositories/news.repository";

class BlogService {
  newsRepository: NewsRepository;
  constructor() {
    this.newsRepository = new NewsRepository();
  }

  create = async (data: createEventType) => {
    const result = await this.newsRepository.create(data);
    return result;
  };
  update = async (id: string, data: updateEventType) => {
    const chechkBlog = await this.newsRepository.getById(id);
    if (!chechkBlog) {
      throw new ApiError(404, API_ERRORS.BLOG_NOT_FOUND);
    }
    const result = await this.newsRepository.update(id, data);
    return result;
  };
  getById = async (id: string) => {
    const chechkBlog = await this.newsRepository.getById(id);
    if (!chechkBlog) {
      throw new ApiError(404, API_ERRORS.BLOG_NOT_FOUND);
    }
    return chechkBlog;
  };
  delete = async (id: string) => {
    const chechkBlog = await this.newsRepository.getById(id);
    if (!chechkBlog) {
      throw new ApiError(404, API_ERRORS.BLOG_NOT_FOUND);
    }
    const result = await this.newsRepository.delete(id);
    return result;
  };
  getAll = async (page: number, limit: number) => {
    const result = await this.newsRepository.getAll(page, limit);
    return result;
  };
}

export default BlogService;
