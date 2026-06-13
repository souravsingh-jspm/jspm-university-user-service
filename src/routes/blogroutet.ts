import { Router } from "express";

import { API_ENDPOINTS } from "../constants/app.constant";
import BlogController from "../controllers/blog.controller";

const BlogRouter = Router();
const blogController = new BlogController();

BlogRouter.route(API_ENDPOINTS.BLOG).post(blogController.create);

BlogRouter.route(API_ENDPOINTS.BLOG_BY_ID)
  .get(blogController.getById)
  .delete(blogController.delete)
  .put(blogController.update);

BlogRouter.route(API_ENDPOINTS.BLOGS).get(blogController.getAll);

export default BlogRouter;
