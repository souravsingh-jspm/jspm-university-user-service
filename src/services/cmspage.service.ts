import { StatusCodes } from "http-status-codes";
import CMSPageRepository from "../repositories/cmspage.repository";
import { createCMSPagelType, updateCMSPagelType } from "../types/page.type";
import { API_ERRORS } from "../constants/app.constant";
import { ApiError } from "common-microservices-utils";

class CMSPageService {
  cMSPageRepository: CMSPageRepository;

  constructor() {
    this.cMSPageRepository = new CMSPageRepository();
  }

  create = async (data: createCMSPagelType) => {
    const checkSlugExits = await this.cMSPageRepository.getBySlug(
      data.cms_slug,
    );

    if (checkSlugExits)
      throw new ApiError(StatusCodes.BAD_REQUEST, API_ERRORS.PAGE_SLUG_ERROR);

    const result = await this.cMSPageRepository.create(data);
    return { data: result };
  };

  update = async (data: updateCMSPagelType, id: string) => {
    const checkPageExits = await this.cMSPageRepository.getById(id);

    if (!checkPageExits)
      throw new ApiError(StatusCodes.BAD_REQUEST, API_ERRORS.PAGE_NOT_EXITS);

    const result = await this.cMSPageRepository.update(data, id);
    return { data: result };
  };
  getById = async (id: string) => {
    const result = await this.cMSPageRepository.getById(id);
  };

  delete = async (id: string) => {
    const result = await this.cMSPageRepository.delete(id);
  };

  getAll = async (page: number, limit: number) => {
    const data = await this.cMSPageRepository.getAll(page, limit);
    return data;
  };
}

export default CMSPageService;
