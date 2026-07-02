import { ProgramType } from "@prisma/client";
import prisma from "../configs/prisma.config";
import { createContactType, updateContactType } from "../types/contact.type";
import { queryHandler } from "../utils/helper";

class ContactRepository {
  create = async (data: createContactType) => {
    return await queryHandler(() => prisma.contact.create({ data }));
  };

  update = async (contact_id: string, data: updateContactType) => {
    return await queryHandler(() =>
      prisma.contact.update({ where: { contact_id }, data }),
    );
  };

  getById = async (contact_id: string) => {
    return await queryHandler(() =>
      prisma.contact.findUnique({ where: { contact_id } }),
    );
  };

  delete = async (contact_id: string) => {
    return await queryHandler(() =>
      prisma.contact.delete({ where: { contact_id } }),
    );
  };

  getAllByLevel = async (page: number, limit: number, contact_level: any) => {
    const skip = (page - 1) * limit;

    return await queryHandler(async () => {
      const [data, count] = await Promise.all([
        prisma.contact.findMany({
          where: {
            contact_level,
          },
          skip,
          take: limit,
          orderBy: {},
        }),
        prisma.contact.count(),
      ]);
      return {
        data,
        count,
      };
    });
  };

  getAll = async (page: number, limit: number) => {
    const skip = (page - 1) * limit;

    return await queryHandler(async () => {
      const [data, count] = await Promise.all([
        prisma.contact.findMany({
          skip,
          take: limit,
        }),
        prisma.contact.count(),
      ]);
      return {
        data,
        count,
      };
    });
  };
}

export default ContactRepository;
