import express from "express";
import CMSPageController from "../controllers/cmspage.controller";
import { API_ENDPOINTS } from "../constants/app.constant";

const cmsPageController = new CMSPageController();
const cmsPageRouter = express.Router();

cmsPageRouter.route(API_ENDPOINTS.CMS_PAGE).post(cmsPageController.create);
