import { ApiResponse, asyncHandler } from "common-microservices-utils";
import { API_RESPONSES } from "../constants/app.constant";
import EventService from "../services/event.service";
import { StatusCodes } from "http-status-codes";
import { getPagination } from "../utils/pagination";
class EventController {
  eventService: EventService;
  constructor() {
    this.eventService = new EventService();
  }

  create = asyncHandler(async (req, res) => {
    const data = req.body;
    const result = await this.eventService.create(data);
    return res
      .status(StatusCodes.CREATED)
      .json(
        new ApiResponse(
          StatusCodes.CREATED,
          result,
          API_RESPONSES.EVENT_CREATED,
        ),
      );
  });
  update = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const result = await this.eventService.update(id as string, data);
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(StatusCodes.OK, result, API_RESPONSES.EVENT_UPDATED),
      );
  });
  getById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const result = await this.eventService.getById(id as string);
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(StatusCodes.OK, result, API_RESPONSES.EVENT_FETCHED),
      );
  });
  delete = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const result = await this.eventService.delete(id as string);
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(StatusCodes.OK, result, API_RESPONSES.EVENT_DELETED),
      );
  });
  getAll = asyncHandler(async (req, res) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const result = await this.eventService.getAll(Number(page), Number(limit));
    return res.status(StatusCodes.OK).json(
      new ApiResponse(
        StatusCodes.OK,
        {
          data: result.data,
          pagination: getPagination(page, limit, result.count),
        },
        API_RESPONSES.EVENTS_FETCHED,
      ),
    );
  });
}

export default EventController;
