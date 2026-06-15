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

  getAll = async (page: number, skip: number) => {
    const take = (page - 1) * skip;

    return await queryHandler(async () => {
      const [data, count] = await Promise.all([
        prisma.contact.findMany({
          take,
          skip,
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
