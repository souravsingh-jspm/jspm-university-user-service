import express from "express";
import SchoolController from "../controllers/school.controller";
import { API_ENDPOINTS } from "../constants/app.constant";

const schoolController = new SchoolController();
const SchoolRouter = express.Router();

SchoolRouter.route(API_ENDPOINTS.SCHOOL).post(schoolController.create);

SchoolRouter.route(API_ENDPOINTS.SCHOOL_BY_ID)
  .put(schoolController.update)
  .get(schoolController.getById)
  .delete(schoolController.delete);

SchoolRouter.route(API_ENDPOINTS.SCHOOLS).get(schoolController.getAll);

export default SchoolRouter;
