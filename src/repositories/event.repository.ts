import prisma from "../configs/prisma.config";
import { createEventType, updateEventType } from "../types/event.type";
import { queryHandler } from "../utils/helper";
class EventRepository {
  create = async (data: createEventType) => {
    return await queryHandler(() => prisma.eVENTS.create({ data }));
  };
  update = async (event_id: string, data: updateEventType) => {
    return await queryHandler(() =>
      prisma.eVENTS.update({ where: { event_id }, data }),
    );
  };
  delete = async (event_id: string) => {
    return await queryHandler(() =>
      prisma.eVENTS.delete({ where: { event_id } }),
    );
  };
  getById = async (event_id: string) => {
    return await queryHandler(() =>
      prisma.eVENTS.findUnique({ where: { event_id } }),
    );
  };
  getAll = async (page: number, limit: number) => {
    return await queryHandler(async () => {
      const [events, count] = await Promise.all([
        prisma.eVENTS.findMany({
          skip: (page - 1) * limit,
          take: limit,
        }),

        prisma.eVENTS.count(),
      ]);
      return {
        events,
        count,
      };
    });
  };
}

export default EventRepository;
