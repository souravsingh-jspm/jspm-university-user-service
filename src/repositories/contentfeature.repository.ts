import prisma from "../configs/prisma.config";
import { queryHandler } from "../utils/helper";

class ContentFeatureRepository {
  async create(data: any) {
    return await queryHandler(() => prisma.pageContentFeature.create({ data }));
  }

  async createMany(data: any) {
    return await queryHandler(() =>
      prisma.pageContentFeature.createMany({
        data,
      }),
    );
  }

  async getById(page_content_feature_id: string) {
    return await queryHandler(() =>
      prisma.pageContentFeature.findUnique({
        where: { page_content_feature_id },
      }),
    );
  }

  async update(page_content_feature_id: string, data: any) {
    return await queryHandler(() =>
      prisma.pageContentFeature.update({
        where: { page_content_feature_id },
        data,
      }),
    );
  }

  async delete(page_content_feature_id: string) {
    return await queryHandler(() =>
      prisma.pageContentFeature.delete({ where: { page_content_feature_id } }),
    );
  }

  async deleteByContentBlockId(content_block_id: string) {
    return await queryHandler(() =>
      prisma.pageContentFeature.deleteMany({ where: { content_block_id } }),
    );
  }

  async getAll(page: number, limit: number) {
    return await queryHandler(async () => {
      const [data, count] = await Promise.all([
        prisma.pageContentFeature.findMany({
          skip: (page - 1) * limit,
          take: limit,
        }),

        prisma.pageContentFeature.count(),
      ]);
      return {
        data,
        count,
      };
    });
  }
}

export default ContentFeatureRepository;
