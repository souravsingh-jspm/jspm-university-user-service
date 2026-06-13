import { API_ENDPOINTS } from "../constants/app.constant";
import { Router } from "express";
import EventController from "../controllers/event.controller";

const EventRouter = Router();
const eventController = new EventController();

EventRouter.route(API_ENDPOINTS.EVENT).post(eventController.create);

EventRouter.route(API_ENDPOINTS.EVENT_BY_ID)
  .get(eventController.getById)
  .delete(eventController.delete)
  .put(eventController.update);

EventRouter.route(API_ENDPOINTS.EVENTS).get(eventController.getAll);

export default EventRouter;
