import { ApiResponse, asyncHandler } from "common-microservices-utils";
import { StatusCodes } from "http-status-codes";
import SchoolService from "../services/school.service";
import { API_RESPONSES } from "../constants/app.constant";

class SchoolController {
  schoolService: SchoolService;

  constructor() {
    this.schoolService = new SchoolService();
  }
  create = asyncHandler(async (req, res) => {
    const data = req.body;
    const result = await this.schoolService.create(data);

    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(StatusCodes.OK, result, API_RESPONSES.PAGE_CREATED),
      );
  });
  update = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const result = await this.schoolService.update(data, id as string);
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(StatusCodes.OK, result, API_RESPONSES.SCHOOL_UPDATE),
      );
  });
  getById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const result = await this.schoolService.getById(id as string);
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(StatusCodes.OK, result, API_RESPONSES.SCHOOL_UPDATE),
      );
  });
  delete = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const result = await this.schoolService.delete(id as string);
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(StatusCodes.OK, result, API_RESPONSES.SCHOOL_UPDATE),
      );
  });
  getAll = asyncHandler(async (req, res) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const result = await this.schoolService.getAll(page, limit);
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(StatusCodes.OK, result, API_RESPONSES.SCHOOL_UPDATE),
      );
  });
}

export default SchoolController;
