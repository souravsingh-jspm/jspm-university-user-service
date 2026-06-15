import { ApiResponse, asyncHandler } from "common-microservices-utils";
import { API_RESPONSES } from "../constants/app.constant";
import ContactSerivce from "../services/contact.service";
import { StatusCodes } from "http-status-codes";
import { getPagination } from "../utils/pagination";
class ContactController {
  contactSerivce: ContactSerivce;
  constructor() {
    this.contactSerivce = new ContactSerivce();
  }

  create = asyncHandler(async (req, res) => {
    const data = req.body;
    const result = await this.contactSerivce.create(data);
    return res
      .status(StatusCodes.CREATED)
      .json(
        new ApiResponse(
          StatusCodes.CREATED,
          result,
          API_RESPONSES.CONTACT_CREATED,
        ),
      );
  });
  update = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const result = await this.contactSerivce.update(id as string, data);
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(StatusCodes.OK, result, API_RESPONSES.CONTACT_UPDATED),
      );
  });
  getById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const result = await this.contactSerivce.getById(id as string);
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(StatusCodes.OK, result, API_RESPONSES.CONTACT_FETCHED),
      );
  });
  delete = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const result = await this.contactSerivce.delete(id as string);
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(StatusCodes.OK, result, API_RESPONSES.CONTACT_DELETED),
      );
  });
  getAll = asyncHandler(async (req, res) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const result = await this.contactSerivce.getAll(
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
        API_RESPONSES.ALL_CONTACT_FETCHED,
      ),
    );
  });
}

export default ContactController;
