import { ApiResponse, asyncHandler } from "common-microservices-utils";
import { API_RESPONSES } from "../constants/app.constant";
import NewsService from "../services/blog.service";
import { StatusCodes } from "http-status-codes";
import { getPagination } from "../utils/pagination";
class NewsController {
  newsService: NewsService;
  constructor() {
    this.newsService = new NewsService();
  }

  create = asyncHandler(async (req, res) => {
    console.log(req.body);
    const data = req.body;
    const result = await this.newsService.create(data);
    return res
      .status(StatusCodes.CREATED)
      .json(
        new ApiResponse(
          StatusCodes.CREATED,
          result,
          API_RESPONSES.NEWS_CREATED,
        ),
      );
  });
  update = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const result = await this.newsService.update(id as string, data);
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(StatusCodes.OK, result, API_RESPONSES.NEWS_UPDATED),
      );
  });
  getById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const result = await this.newsService.getById(id as string);
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(StatusCodes.OK, result, API_RESPONSES.NEWS_FETCHED),
      );
  });
  delete = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const result = await this.newsService.delete(id as string);
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(StatusCodes.OK, result, API_RESPONSES.NEWS_DELETED),
      );
  });
  getAll = asyncHandler(async (req, res) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const result = await this.newsService.getAll(Number(page), Number(limit));
    return res.status(StatusCodes.OK).json(
      new ApiResponse(
        StatusCodes.OK,
        {
          data: result.data,
          pagination: getPagination(page, limit, result.count),
        },
        API_RESPONSES.ALL_NEWS_FETCHED,
      ),
    );
  });
}

export default NewsController;
