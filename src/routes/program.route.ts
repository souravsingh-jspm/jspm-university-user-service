import { Router } from "express";
import ProgramController from "../controllers/program.controller";
import { API_ENDPOINTS } from "../constants/app.constant";

const ProgramRouter = Router();
const programController = new ProgramController();

ProgramRouter.route(API_ENDPOINTS.PROGRAM).post(programController.create);

ProgramRouter.route(API_ENDPOINTS.PROGRAM_BY_ID)
  .post(programController.getById)
  .put(programController.update)
  .delete(programController.delete);

ProgramRouter.route(API_ENDPOINTS.PROGRAMS).get(programController.getAll);

export default ProgramRouter;
