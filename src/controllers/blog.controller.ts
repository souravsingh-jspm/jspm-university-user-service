import { ApiResponse, asyncHandler } from "common-microservices-utils";
import { API_RESPONSES } from "../constants/app.constant";
import BlogService from "../services/blog.service";
import { StatusCodes } from "http-status-codes";
class BlogController {
  blogService: BlogService;
  constructor() {
    this.blogService = new BlogService();
  }

  create = asyncHandler(async (req, res) => {
    const { data } = req.body;
    const result = await this.blogService.create(data);
    return res
      .status(StatusCodes.CREATED)
      .json(
        new ApiResponse(
          StatusCodes.CREATED,
          result,
          API_RESPONSES.BLOG_CREATED,
        ),
      );
  });
  update = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { data } = req.body;
    const result = await this.blogService.update(id as string, data);
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(StatusCodes.OK, result, API_RESPONSES.BLOG_UPDATED),
      );
  });
  getById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const result = await this.blogService.getById(id as string);
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(StatusCodes.OK, result, API_RESPONSES.BLOG_FETCHED),
      );
  });
  delete = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const result = await this.blogService.delete(id as string);
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(StatusCodes.OK, result, API_RESPONSES.BLOG_DELETED),
      );
  });
  getAll = asyncHandler(async (req, res) => {
    const { page, limit } = req.query;
    const result = await this.blogService.getAll(Number(page), Number(limit));
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(StatusCodes.OK, result, API_RESPONSES.BLOGS_FETCHED),
      );
  });
}

export default BlogController;
