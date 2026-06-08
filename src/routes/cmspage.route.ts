import express from "express";
import CMSPageController from "../controllers/cmspage.controller";
import { API_ENDPOINTS } from "../constants/app.constant";

const cmsPageController = new CMSPageController();
const CMSPageRouter = express.Router();

CMSPageRouter.route(API_ENDPOINTS.CMS_PAGE).post(cmsPageController.create);

CMSPageRouter.route(API_ENDPOINTS.CMS_PAGE_BY_ID)
  .put(cmsPageController.update)
  .get(cmsPageController.getById)
  .delete(cmsPageController.delete);

CMSPageRouter.route(API_ENDPOINTS.CMS_PAGES).get(cmsPageController.getAll);

CMSPageRouter.route(API_ENDPOINTS.CMS_HOME_PAGES).get(
  cmsPageController.getHomePages,
);

export default CMSPageRouter;
