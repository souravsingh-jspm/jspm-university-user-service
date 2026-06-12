import { ApiResponse, asyncHandler } from "common-microservices-utils";
import { StatusCodes } from "http-status-codes";
import { API_RESPONSES } from "../constants/app.constant";
import PageContentService from "../services/pagecontent.service";
import { getPagination } from "../utils/pagination";
class PageContentController {
  pageContentService: PageContentService;
  constructor() {
    this.pageContentService = new PageContentService();
  }

  create = asyncHandler(async (req, res) => {
    const data = req.body;
    const response = await this.pageContentService.create(data);
    res
      .status(StatusCodes.CREATED)
      .json(
        new ApiResponse(
          StatusCodes.CREATED,
          response,
          API_RESPONSES.PAGE_CONTENT_CREATED,
        ),
      );
  });

  update = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const response = await this.pageContentService.update(id as string, data);
    res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(
          StatusCodes.OK,
          response,
          API_RESPONSES.PAGE_CONTENT_UPDATED,
        ),
      );
  });

  delete = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const data = await this.pageContentService.delete(id as string);
    res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(
          StatusCodes.OK,
          data,
          API_RESPONSES.PAGE_CONTENT_DELETED,
        ),
      );
  });

  getById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const response = await this.pageContentService.getById(id as string);
    res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(
          StatusCodes.OK,
          response,
          API_RESPONSES.PAGE_CONTENT_FETCHED,
        ),
      );
  });
  getAll = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const result = await this.pageContentService.getAll(page, limit);
    res.status(StatusCodes.OK).json(
      new ApiResponse(
        StatusCodes.OK,
        {
          data: result.pages,
          pagination: getPagination(page, limit, result.count),
        },
        API_RESPONSES.PAGES_CONTENT_FETCHED,
      ),
    );
  });
  getByPageId = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const response = await this.pageContentService.getByPageId(id as string);
    res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(
          StatusCodes.OK,
          response,
          API_RESPONSES.PAGE_CONTENT_FETCHED,
        ),
      );
  });
}
export default PageContentController;
