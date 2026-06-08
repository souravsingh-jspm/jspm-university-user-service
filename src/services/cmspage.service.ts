import { StatusCodes } from "http-status-codes";
import CMSPageRepository from "../repositories/cmspage.repository";
import { createCMSPagelType, updateCMSPagelType } from "../types/page.type";
import { API_ERRORS } from "../constants/app.constant";
import { ApiError } from "common-microservices-utils";
import SchoolRepository from "../repositories/school.repository";

class CMSPageService {
  cMSPageRepository: CMSPageRepository;
  schoolRepository: SchoolRepository;

  constructor() {
    this.cMSPageRepository = new CMSPageRepository();
    this.schoolRepository = new SchoolRepository();
  }

  create = async (data: createCMSPagelType) => {
    const checkSlugExits = await this.cMSPageRepository.getBySlug(
      data.cms_slug,
    );

    if (data.cms_section === "SCHOOL") {
      if (data.cms_school_id === null)
        throw new ApiError(
          StatusCodes.BAD_REQUEST,
          API_ERRORS.MANDATORY_SCHOOL_ID,
        );

      const checkVaildSchoolId = await this.schoolRepository.getById(
        data.cms_school_id!,
      );

      if (!checkVaildSchoolId)
        throw new ApiError(
          StatusCodes.BAD_REQUEST,
          API_ERRORS.INVALID_SCHOOL_ID,
        );
    }

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
