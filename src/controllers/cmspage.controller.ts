import { ApiResponse, asyncHandler } from "common-microservices-utils";
import CMSPageService from "../services/cmspage.service";
import { StatusCodes } from "http-status-codes";
import { API_RESPONSES } from "../constants/app.constant";
import { getPagination } from "../utils/pagination";

class CmsPageController {
  cMSPageService: CMSPageService;

  constructor() {
    this.cMSPageService = new CMSPageService();
  }

  create = asyncHandler(async (req, res) => {
    const data = req.body;
    const result = await this.cMSPageService.create(data);

    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(StatusCodes.OK, result, API_RESPONSES.PAGE_CREATED),
      );
  });

  update = asyncHandler(async (req, res) => {
    const data = req.body;
    const { id } = req.params;
    const result = await this.cMSPageService.update(data, id as string);

    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(StatusCodes.OK, result, API_RESPONSES.PAGE_UPDATED),
      );
  });

  getById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const result = await this.cMSPageService.getById(id as string);
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(StatusCodes.OK, result, API_RESPONSES.PAGE_FETCHED),
      );
  });

  delete = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const result = await this.cMSPageService.delete(id as string);

    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(StatusCodes.OK, result, API_RESPONSES.PAGE_DELETED),
      );
  });

  getAll = asyncHandler(async (req, res) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const search = req.query.search?.toString() || "";
    const result = await this.cMSPageService.getAll(page, limit, search);

    return res.status(StatusCodes.OK).json(
      new ApiResponse(
        StatusCodes.OK,
        {
          data: result.pages,
          pagination: getPagination(page, limit, result.count),
        },
        API_RESPONSES.PAGES_FETCHED,
      ),
    );
  });

  getHomePages = asyncHandler(async (req, res) => {
    const CMS_Section = "HOME"; // Both the cms constent are not required as of now
    const CMS_Page_Type = "TOP";
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const result = await this.cMSPageService.getHomePages(
      CMS_Section,
      CMS_Page_Type,
    );
    return res.status(StatusCodes.OK).json(
      new ApiResponse(
        StatusCodes.OK,
        {
          data: result.pages,
          pagination: getPagination(page, limit, result.count),
        },
        API_RESPONSES.HOME_PAGE_FETCHED,
      ),
    );
  });

  getSchoolPages = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const CMS_Section = "SCHOOL"; // Both the cms constent are not required as of now
    const CMS_Page_Type = "TOP";
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.page) || 10;

    const result = await this.cMSPageService.getSchoolPages(
      id as string,
      CMS_Section,
      CMS_Page_Type,
    );
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(
          StatusCodes.OK,
          result,
          API_RESPONSES.SCHOOL_PAGES_FETCHED,
        ),
      );
  });
}

export default CmsPageController;
