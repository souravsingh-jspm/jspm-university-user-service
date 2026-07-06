import { ApiError } from "common-microservices-utils";
import { API_ERRORS } from "../constants/app.constant";
import { createEventType, updateEventType } from "../types/event.type";
import BlogsRepository from "../repositories/blog.repository";

class BlogService {
  blogsRepository: BlogsRepository;
  constructor() {
    this.blogsRepository = new BlogsRepository();
  }

  create = async (data: createEventType) => {
    const result = await this.blogsRepository.create(data);
    return result;
  };
  update = async (id: string, data: updateEventType) => {
    const chechkBlog = await this.blogsRepository.getById(id);
    if (!chechkBlog) {
      throw new ApiError(404, API_ERRORS.BLOG_NOT_FOUND);
    }
    const result = await this.blogsRepository.update(id, data);
    return result;
  };
  getById = async (id: string) => {
    const chechkBlog = await this.blogsRepository.getById(id);
    if (!chechkBlog) {
      throw new ApiError(404, API_ERRORS.BLOG_NOT_FOUND);
    }
    return chechkBlog;
  };
  delete = async (id: string) => {
    const chechkBlog = await this.blogsRepository.getById(id);
    if (!chechkBlog) {
      throw new ApiError(404, API_ERRORS.BLOG_NOT_FOUND);
    }
    const result = await this.blogsRepository.delete(id);
    return result;
  };
  getAll = async (page: number, limit: number) => {
    const result = await this.blogsRepository.getAll(page, limit);
    return result;
  };
}

export default BlogService;
