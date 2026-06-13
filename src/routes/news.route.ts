import { Router } from "express";

import { API_ENDPOINTS } from "../constants/app.constant";
import NewsController from "../controllers/news.controller";

const NewsRouter = Router();
const newsController = new NewsController();

NewsRouter.route(API_ENDPOINTS.BLOG).post(newsController.create);

NewsRouter.route(API_ENDPOINTS.BLOG_BY_ID)
  .get(newsController.getById)
  .delete(newsController.delete)
  .put(newsController.update);

NewsRouter.route(API_ENDPOINTS.BLOGS).get(newsController.getAll);

export default NewsRouter;
