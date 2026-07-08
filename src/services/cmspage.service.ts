import { StatusCodes } from "http-status-codes";
import CMSPageRepository from "../repositories/cmspage.repository";
import { createCMSPagelType, updateCMSPagelType } from "../types/page.type";
import { API_ERRORS, CMS_SECTION } from "../constants/app.constant";
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

    if (data.cms_section === CMS_SECTION.SCHOOL) {
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
    return result;
  };

  update = async (data: updateCMSPagelType, id: string) => {
    const checkPageExits = await this.cMSPageRepository.getByIdBasic(id);
    const checkSlugExits = await this.cMSPageRepository.getBySlug(
      data.cms_slug as string,
    );

    if (!checkPageExits)
      throw new ApiError(StatusCodes.BAD_REQUEST, API_ERRORS.PAGE_NOT_EXITS);
    const checkBothSame = checkPageExits.cms_slug === data.cms_slug;
    if (checkBothSame) {
      const result = await this.cMSPageRepository.update(data, id);
      return { data: result };
    } else
      throw new ApiError(StatusCodes.BAD_REQUEST, API_ERRORS.PAGE_SLUG_ERROR);
  };
  getById = async (id: string) => {
    const result = await this.cMSPageRepository.getById(id);
    if (!result)
      throw new ApiError(StatusCodes.BAD_REQUEST, API_ERRORS.PAGE_NOT_EXITS);
    return result;
  };

  delete = async (id: string) => {
    const isIdValid = await this.cMSPageRepository.getByIdBasic(id);
    if (!isIdValid)
      throw new ApiError(StatusCodes.BAD_REQUEST, API_ERRORS.PAGE_NOT_EXITS);
    const result = await this.cMSPageRepository.delete(id);
  };

  getAll = async (page: number, limit: number, search?: string) => {
    const data = await this.cMSPageRepository.getAll(page, limit, search);
    return data;
  };

  getHomePages = async (cms_section: string, cms_page_type: string) => {
    const data = await this.cMSPageRepository.getHomePages(
      cms_section,
      cms_page_type,
    );
    return data;
  };

  getSchoolPages = async (
    school_id: string,
    cms_section: string,
    cms_page_type: string,
  ) => {
    const data = await this.cMSPageRepository.getSchoolPages(
      school_id,
      cms_section,
      cms_page_type,
    );
    return data;
  };
}

export default CMSPageService;
