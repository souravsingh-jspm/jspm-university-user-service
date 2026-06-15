import { Router } from "express";
import ContactController from "../controllers/contact.controller";
import { API_ENDPOINTS } from "../constants/app.constant";

const ContactRouter = Router();
const contactController = new ContactController();

ContactRouter.route(API_ENDPOINTS.CONTACT).post(contactController.create);

ContactRouter.route(API_ENDPOINTS.CONTACT_BY_ID)
  .post(contactController.getById)
  .put(contactController.update)
  .delete(contactController.delete);

ContactRouter.route(API_ENDPOINTS.CONTACTS).get(contactController.getAll);

export default ContactRouter;
