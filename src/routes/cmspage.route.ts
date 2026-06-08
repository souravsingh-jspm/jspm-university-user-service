import express from "express";
import CMSPageController from "../controllers/cmspage.controller";
import { API_ENDPOINTS } from "../constants/app.constant";

const cmsPageController = new CMSPageController();
const cmsPageRouter = express.Router();

cmsPageRouter.route(API_ENDPOINTS.CMS_PAGE).post(cmsPageController.create);

cmsPageRouter
  .route(API_ENDPOINTS.CMS_PAGE_BY_ID)
  .put(cmsPageController.update)
  .get(cmsPageController.getById)
  .delete(cmsPageController.delete);

cmsPageRouter.route(API_ENDPOINTS.CMS_PAGES).get(cmsPageController.getAll);
