import { ApiResponse, asyncHandler } from "common-microservices-utils";
import FacultyService from "../services/faculty.service";
import { StatusCodes } from "http-status-codes";
import { API_RESPONSES } from "../constants/app.constant";
import { getPagination } from "../utils/pagination";

class FacultyController {
  facultyService: FacultyService;
  constructor() {
    this.facultyService = new FacultyService();
  }

  create = asyncHandler(async (req, res) => {
    const data = req.body;

    const result = await this.facultyService.create(data);
    return res
      .status(StatusCodes.CREATED)
      .json(
        new ApiResponse(
          StatusCodes.CREATED,
          result,
          API_RESPONSES.FACULTY_CREATED,
        ),
      );
  });

  update = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    const result = await this.facultyService.update(data, id as string);

    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(StatusCodes.OK, result, API_RESPONSES.FACULTY_UPDATED),
      );
  });

  delete = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const data = await this.facultyService.delete(id as string);

    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(StatusCodes.OK, data, API_RESPONSES.FACULTY_DELETED),
      );
  });

  getAll = asyncHandler(async (req, res) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const result = await this.facultyService.getAll(
      Number(page),
      Number(limit),
    );
    return res.status(StatusCodes.OK).json(
      new ApiResponse(
        StatusCodes.OK,
        {
          data: result.pages,
          count: getPagination(page, limit, result.count),
        },
        API_RESPONSES.ALL_FACULTIES_FETCHED,
      ),
    );
  });

  getById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const data = await this.facultyService.getById(id as string);
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(StatusCodes.OK, data, API_RESPONSES.FACULTY_FETCHED),
      );
  });
}

export default FacultyController;
