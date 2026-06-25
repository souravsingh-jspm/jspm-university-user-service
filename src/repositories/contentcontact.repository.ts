import prisma from "../configs/prisma.config";
import { queryHandler } from "../utils/helper";

class ContentContactRepository {
  async create(data: any) {
    return await queryHandler(() => prisma.pageContentContact.create({ data }));
  }

  async createMany(data: any) {
    return await queryHandler(() =>
      prisma.pageContentContact.createMany({
        data,
      }),
    );
  }

  async getById(page_content_contact_id: string) {
    return await queryHandler(() =>
      prisma.pageContentContact.findUnique({
        where: { page_content_contact_id },
      }),
    );
  }

  async update(page_content_contact_id: string, data: any) {
    return await queryHandler(() =>
      prisma.pageContentContact.update({
        where: { page_content_contact_id },
        data,
      }),
    );
  }

  async delete(page_content_contact_id: string) {
    return await queryHandler(() =>
      prisma.pageContentContact.delete({ where: { page_content_contact_id } }),
    );
  }

  async deleteByContentBlockId(content_block_id: string) {
    return await queryHandler(() =>
      prisma.pageContentContact.deleteMany({ where: { content_block_id } }),
    );
  }

  async getAll(page: number, limit: number) {
    return await queryHandler(async () => {
      const [data, count] = await Promise.all([
        prisma.pageContentContact.findMany({
          skip: (page - 1) * limit,
          take: limit,
        }),

        prisma.pageContentContact.count(),
      ]);
      return {
        data,
        count,
      };
    });
  }
}

export default ContentContactRepository;
