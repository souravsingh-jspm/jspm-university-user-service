import express from "express";
import PageContentController from "../controllers/pagecontent.controller";
import { API_ENDPOINTS } from "../constants/app.constant";

const pageContentController = new PageContentController();
const PageContentRouter = express.Router();

PageContentRouter.route(API_ENDPOINTS.PAGE_CONTENT).post(
  pageContentController.create,
);

PageContentRouter.route(API_ENDPOINTS.PAGE_CONTENT).post(
  pageContentController.create,
);
PageContentRouter.route(API_ENDPOINTS.PAGE_CONTENTS).get(
  pageContentController.getAll,
);
PageContentRouter.route(API_ENDPOINTS.PAGE_CONTENT_BY_ID)
  .put(pageContentController.update)
  .get(pageContentController.getById)
  .delete(pageContentController.delete);

PageContentRouter.route(API_ENDPOINTS.PAGE_CONTENT_BY_PAGE_ID).get(
  pageContentController.getByPageId,
);

PageContentRouter.route(API_ENDPOINTS.PAGE_CONTENT_BY_CMS_ID).get(
  pageContentController.getContentByPageId,
);

export default PageContentRouter;
