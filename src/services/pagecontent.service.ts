import { ApiError } from "common-microservices-utils";
import PageContentRepository from "../repositories/pagecontent.repository";
import {
  createSPageContentBlockType,
  updateSPageContentBlockType,
} from "../types/pagecontent.type";
import { API_ERRORS } from "../constants/app.constant";
import { StatusCodes } from "http-status-codes";

class PageContentService {
  pageContentRepository: PageContentRepository;
  constructor() {
    this.pageContentRepository = new PageContentRepository();
  }

  create = async (data: createSPageContentBlockType) => {
    return await this.pageContentRepository.create(data);
  };

  update = async (id: string, data: updateSPageContentBlockType) => {
    const checkExists = await this.pageContentRepository.getById(id);
    if (!checkExists) {
      throw new ApiError(404, API_ERRORS.PAGE_CONTENT_NOT_FOUND);
    }
    return await this.pageContentRepository.update(id, data);
  };

  delete = async (id: string) => {
    const checkExists = await this.pageContentRepository.getById(id);
    if (!checkExists) {
      throw new ApiError(404, API_ERRORS.PAGE_CONTENT_NOT_FOUND);
    }
    return await this.pageContentRepository.delete(id);
  };

  getById = async (id: string) => {
    const checkExists = await this.pageContentRepository.getById(id);
    if (!checkExists) {
      throw new ApiError(404, API_ERRORS.PAGE_CONTENT_NOT_FOUND);
    }
    return await this.pageContentRepository.getById(id);
  };

  getAll = async (page: number, limit: number) => {
    const data = await this.pageContentRepository.getAll(page, limit);
    return data;
  };
  getByPageId = async (id: string) => {
    return await this.pageContentRepository.getByPageId(id);
  };
}
export default PageContentService;
