import SchoolRepository from "../repositories/school.repository";
import { API_ERRORS } from "../constants/app.constant";
import { StatusCodes } from "http-status-codes";
import { ApiError } from "common-microservices-utils";
import { createSchoolType, updateSchoolType } from "../types/school.type";

class SchoolService {
  schoolRepository: SchoolRepository;

  constructor() {
    this.schoolRepository = new SchoolRepository();
  }

  create = async (data: createSchoolType) => {
    const checkSlugExits = await this.schoolRepository.getBySlug(
      data.school_slug,
    );
    const checkNameExits = await this.schoolRepository.getByName(
      data.school_name,
    );

    if (checkSlugExits && checkNameExits)
      throw new ApiError(
        StatusCodes.BAD_REQUEST,
        API_ERRORS.SCHOOL_SLUG_NAME_ERROR,
      );

    if (checkSlugExits)
      throw new ApiError(StatusCodes.BAD_REQUEST, API_ERRORS.SlUG_ERROR);

    if (checkNameExits)
      throw new ApiError(StatusCodes.BAD_REQUEST, API_ERRORS.NAME_ERROR);

    const result = await this.schoolRepository.create(data);
    return { data: result };
  };

  update = async (data: updateSchoolType, id: string) => {
    const checkSchoolExists = await this.schoolRepository.getById(id);

    if (checkSchoolExists)
      throw new ApiError(StatusCodes.BAD_REQUEST, API_ERRORS.INVAID_SCHOOL_ID);

    const result = await this.schoolRepository.update(data, id);
    return result;
  };

  delete = async (id: string) => {
    const checkSchoolExists = await this.schoolRepository.getById(id);

    if (checkSchoolExists)
      throw new ApiError(StatusCodes.BAD_REQUEST, API_ERRORS.INVAID_SCHOOL_ID);

    const data = await this.schoolRepository.delete(id);
    return data;
  };

  getById = async (id: string) => {
    const data = await this.schoolRepository.getById(id);
    return data;
  };

  getAll = async (page: number, limit: number) => {
    const data = await this.schoolRepository.getAll(page, limit);
    return data;
  };
}

export default SchoolService;
