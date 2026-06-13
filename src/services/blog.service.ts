import { ApiError } from "common-microservices-utils";
import { API_ERRORS } from "../constants/app.constant";
import { createEventType, updateEventType } from "../types/event.type";
import EventRepository from "../repositories/event.repository";
import BlogRepository from "../repositories/blog.repository";

class BlogService {
  blogRepository: BlogRepository;
  constructor() {
    this.blogRepository = new BlogRepository();
  }

  create = async (data: createEventType) => {
    const result = await this.blogRepository.create(data);
    return result;
  };
  update = async (id: string, data: updateEventType) => {
    const chechkBlog = await this.blogRepository.getById(id);
    if (!chechkBlog) {
      throw new ApiError(404, API_ERRORS.BLOG_NOT_FOUND);
    }
    const result = await this.blogRepository.update(id, data);
    return result;
  };
  getById = async (id: string) => {
    const chechkBlog = await this.blogRepository.getById(id);
    if (!chechkBlog) {
      throw new ApiError(404, API_ERRORS.BLOG_NOT_FOUND);
    }
    return chechkBlog;
  };
  delete = async (id: string) => {
    const chechkBlog = await this.blogRepository.getById(id);
    if (!chechkBlog) {
      throw new ApiError(404, API_ERRORS.BLOG_NOT_FOUND);
    }
    const result = await this.blogRepository.delete(id);
    return result;
  };
  getAll = async (page: number, limit: number) => {
    const result = await this.blogRepository.getAll(page, limit);
    return result;
  };
}

export default BlogService;
