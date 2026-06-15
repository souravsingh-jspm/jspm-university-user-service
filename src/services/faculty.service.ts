import { ApiError } from "common-microservices-utils";

import FacultyRepository from "../repositories/faculty.repository";
import { createFacultyType, updateFacultyType } from "../types/faculty.type";
import { API_ERRORS } from "../constants/app.constant";

class FacultyService {
  facultyRepository: FacultyRepository;
  constructor() {
    this.facultyRepository = new FacultyRepository();
  }

  create = async (data: createFacultyType) => {
    const result = await this.facultyRepository.create(data);
    return result;
  };

  update = async (data: updateFacultyType, id: string) => {
    const checkExits = await this.facultyRepository.getById(id);
    if (!checkExits) throw new ApiError(404, API_ERRORS.FACULTY_NOT_FOUND);

    const result = await this.facultyRepository.update(id, data);
    return result;
  };

  getById = async (id: string) => {
    const data = await this.facultyRepository.getById(id);
    if (!data) throw new ApiError(404, API_ERRORS.FACULTY_NOT_FOUND);
    return data;
  };

  delete = async (id: string) => {
    const checkExits = await this.facultyRepository.getById(id);
    if (!checkExits) throw new ApiError(404, API_ERRORS.FACULTY_NOT_FOUND);

    const data = await this.facultyRepository.delete(id);
    return data;
  };

  getAll = async (skip: number, limit: number) => {
    const data = await this.facultyRepository.getAll(skip, limit);
    return data;
  };
}

export default FacultyService;
