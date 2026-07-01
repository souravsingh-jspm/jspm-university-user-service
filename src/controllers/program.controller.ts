import { ApiResponse, asyncHandler } from "common-microservices-utils";
import { API_RESPONSES } from "../constants/app.constant";
import ProgramService from "../services/program.service";
import { StatusCodes } from "http-status-codes";
import { getPagination } from "../utils/pagination";
import { ProgramType } from "@prisma/client";

class ProgramController {
  programService: ProgramService;
  constructor() {
    this.programService = new ProgramService();
  }

  create = asyncHandler(async (req, res) => {
    const data = req.body;
    const result = await this.programService.create(data);
    return res
      .status(StatusCodes.CREATED)
      .json(
        new ApiResponse(
          StatusCodes.CREATED,
          result,
          API_RESPONSES.PROGRAMS_CREATED,
        ),
      );
  });
  update = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const result = await this.programService.update(id as string, data);
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(StatusCodes.OK, result, API_RESPONSES.PROGRAMS_UPDATED),
      );
  });
  getById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const result = await this.programService.getById(id as string);
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(StatusCodes.OK, result, API_RESPONSES.PROGRAMS_FETCHED),
      );
  });
  delete = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const result = await this.programService.delete(id as string);
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(StatusCodes.OK, result, API_RESPONSES.PROGRAMS_DELETED),
      );
  });
  getAll = asyncHandler(async (req, res) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const result = await this.programService.getAll(
      Number(page),
      Number(limit),
    );
    return res.status(StatusCodes.OK).json(
      new ApiResponse(
        StatusCodes.OK,
        {
          data: result.data,
          pagination: getPagination(page, limit, result.count),
        },
        API_RESPONSES.ALL_PROGRAMS_FETCHED,
      ),
    );
  });
  getProgramByType = asyncHandler(async (req, res) => {
    const type = req.query.type as ProgramType;
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const search = req.query.search as string | undefined;

    const result = await this.programService.getProgramByType(
      type as ProgramType,
      page,
      limit,
      search,
    );
    return res.status(StatusCodes.OK).json(
      new ApiResponse(
        StatusCodes.OK,
        {
          data: result.data,
          pagination: getPagination(page, limit, result.count),
        },
        API_RESPONSES.PROGRAMS_FETCHED,
      ),
    );
  });
}

export default ProgramController;
