import { ApiError } from "common-microservices-utils";
import { API_ERRORS } from "../constants/app.constant";
import { createEventType, updateEventType } from "../types/event.type";
import EventRepository from "../repositories/event.repository";

class EventService {
  eventRepository: EventRepository;
  constructor() {
    this.eventRepository = new EventRepository();
  }

  create = async (data: createEventType) => {
    const result = await this.eventRepository.create(data);
    return result;
  };
  update = async (id: string, data: updateEventType) => {
    const chechkEvent = await this.eventRepository.getById(id);
    if (!chechkEvent) {
      throw new ApiError(404, API_ERRORS.EVENT_NOT_FOUND);
    }
    const result = await this.eventRepository.update(id, data);
    return result;
  };
  getById = async (id: string) => {
    const chechkEvent = await this.eventRepository.getById(id);
    if (!chechkEvent) {
      throw new ApiError(404, API_ERRORS.EVENT_NOT_FOUND);
    }
    return chechkEvent;
  };
  delete = async (id: string) => {
    const chechkEvent = await this.eventRepository.getById(id);
    if (!chechkEvent) {
      throw new ApiError(404, API_ERRORS.EVENT_NOT_FOUND);
    }
    const result = await this.eventRepository.delete(id);
    return result;
  };
  getAll = async (page: number, limit: number) => {
    const events = await this.eventRepository.getAll(page, limit);
    return events;
  };
}

export default EventService;
