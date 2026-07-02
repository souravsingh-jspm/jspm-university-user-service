import { ApiError } from "common-microservices-utils";
import { API_ERRORS } from "../constants/app.constant";
import { createContactType, updateContactType } from "../types/contact.type";
import ContactSevice from "../repositories/contact.repository";
import { ProgramType } from "@prisma/client";

class ContactService {
  contactSevice: ContactSevice;
  constructor() {
    this.contactSevice = new ContactSevice();
  }

  create = async (data: createContactType) => {
    const result = await this.contactSevice.create(data);
    return result;
  };
  update = async (id: string, data: updateContactType) => {
    const chechkEvent = await this.contactSevice.getById(id);
    if (!chechkEvent) {
      throw new ApiError(404, API_ERRORS.CONTACT_NOT_FOUND);
    }
    const result = await this.contactSevice.update(id, data);
    return result;
  };
  getById = async (id: string) => {
    const chechkEvent = await this.contactSevice.getById(id);
    if (!chechkEvent) {
      throw new ApiError(404, API_ERRORS.CONTACT_NOT_FOUND);
    }
    return chechkEvent;
  };
  getAllByLevel = async (
    page: number,
    limit: number,
    contact_level: string,
  ) => {
    const data = await this.contactSevice.getAllByLevel(
      page,
      limit,
      contact_level as ProgramType,
    );
    return data;
  };
  delete = async (id: string) => {
    const chechkEvent = await this.contactSevice.getById(id);
    if (!chechkEvent) {
      throw new ApiError(404, API_ERRORS.CONTACT_NOT_FOUND);
    }
    const result = await this.contactSevice.delete(id);
    return result;
  };
  getAll = async (page: number, limit: number) => {
    const events = await this.contactSevice.getAll(page, limit);
    return events;
  };
}

export default ContactService;
