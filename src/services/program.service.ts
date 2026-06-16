import { ApiError } from "common-microservices-utils";
import { API_ERRORS } from "../constants/app.constant";
import { createProgramType, updateProgramType } from "../types/program.type";
import ProgramRepository from "../repositories/program.repository";
import SchoolRepository from "../repositories/school.repository";
import { StatusCodes } from "http-status-codes";

class ProgramService {
  programRepository: ProgramRepository;
  schoolRepository: SchoolRepository;

  constructor() {
    this.programRepository = new ProgramRepository();
    this.schoolRepository = new SchoolRepository();
  }

  create = async (data: createProgramType) => {
    const checkSchool = await this.schoolRepository.getById(
      data.program_school_id!,
    );

    if (!checkSchool)
      throw new ApiError(StatusCodes.BAD_REQUEST, API_ERRORS.INVALID_SCHOOL_ID);

    const result = await this.programRepository.create(data);
    return result;
  };
  update = async (id: string, data: updateProgramType) => {
    const chechkEvent = await this.programRepository.getById(id);
    if (!chechkEvent) {
      throw new ApiError(404, API_ERRORS.PROGRAM_NOT_FOUND);
    }
    const result = await this.programRepository.update(id, data);
    return result;
  };
  getById = async (id: string) => {
    const chechkEvent = await this.programRepository.getById(id);
    if (!chechkEvent) {
      throw new ApiError(404, API_ERRORS.PROGRAM_NOT_FOUND);
    }
    return chechkEvent;
  };
  delete = async (id: string) => {
    const chechkEvent = await this.programRepository.getById(id);
    if (!chechkEvent) {
      throw new ApiError(404, API_ERRORS.PROGRAM_NOT_FOUND);
    }
    const result = await this.programRepository.delete(id);
    return result;
  };
  getAll = async (page: number, limit: number) => {
    const events = await this.programRepository.getAll(page, limit);
    console.log(events, " here is events");
    return events;
  };
}

export default ProgramService;
