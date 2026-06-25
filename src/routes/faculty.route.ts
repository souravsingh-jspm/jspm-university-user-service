import { Router } from "express";
import FacultyController from "../controllers/faculty.controller";
import { API_ENDPOINTS, ROLES } from "../constants/app.constant";
import { authorizeAll } from "../middlewares/auth.middleware";

const FacultyRouter = Router();
const facultyController = new FacultyController();

FacultyRouter.route(API_ENDPOINTS.FACULTY).post(
  authorizeAll([ROLES.USER, ROLES.ADMIN, ROLES.SUPER_ADMIN]),
  facultyController.create,
);

FacultyRouter.route(API_ENDPOINTS.FACULTY_BY_ID)
  .get(facultyController.getById)
  .put(facultyController.update)
  .delete(facultyController.delete);

FacultyRouter.route(API_ENDPOINTS.FACULTIES).get(facultyController.getAll);

export default FacultyRouter;
