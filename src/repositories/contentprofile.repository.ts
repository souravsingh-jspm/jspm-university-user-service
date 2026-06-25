import prisma from "../configs/prisma.config";
import { queryHandler } from "../utils/helper";

class ContentProfileRepository {
  async create(data: any) {
    return await queryHandler(() => prisma.pageContentProfile.create({ data }));
  }

  async createMany(data: any) {
    return await queryHandler(() =>
      prisma.pageContentProfile.createMany({
        data,
      }),
    );
  }

  async getById(page_content_profile_id: string) {
    return await queryHandler(() =>
      prisma.pageContentProfile.findUnique({
        where: { page_content_profile_id },
      }),
    );
  }

  async update(page_content_profile_id: string, data: any) {
    return await queryHandler(() =>
      prisma.pageContentProfile.update({
        where: { page_content_profile_id },
        data,
      }),
    );
  }

  async delete(page_content_profile_id: string) {
    return await queryHandler(() =>
      prisma.pageContentProfile.delete({ where: { page_content_profile_id } }),
    );
  }

  async deleteByContentBlockId(content_block_id: string) {
    return await queryHandler(() =>
      prisma.pageContentProfile.deleteMany({ where: { content_block_id } }),
    );
  }

  async getAll(page: number, limit: number) {
    return await queryHandler(async () => {
      const [data, count] = await Promise.all([
        prisma.pageContentProfile.findMany({
          skip: (page - 1) * limit,
          take: limit,
        }),

        prisma.pageContentProfile.count(),
      ]);
      return {
        data,
        count,
      };
    });
  }
}

export default ContentProfileRepository;
