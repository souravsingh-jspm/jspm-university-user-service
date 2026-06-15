import { Router } from "express";

import { API_ENDPOINTS } from "../constants/app.constant";
import NewsController from "../controllers/news.controller";

const NewsRouter = Router();
const newsController = new NewsController();

NewsRouter.route(API_ENDPOINTS.NEWS).post(newsController.create);

NewsRouter.route(API_ENDPOINTS.NEWS_BY_ID)
  .get(newsController.getById)
  .delete(newsController.delete)
  .put(newsController.update);

NewsRouter.route(API_ENDPOINTS.ALL_NEWS).get(newsController.getAll);

export default NewsRouter;
