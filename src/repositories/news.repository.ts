import prisma from "../configs/prisma.config";
import { queryHandler } from "../utils/helper";
import { createNewsType, updateNewsType } from "../types/news.type";

class NewsRepository {
  async create(data: createNewsType) {
    return await queryHandler(() => prisma.nEWS.create({ data }));
  }

  async getById(news_id: string) {
    return await queryHandler(() =>
      prisma.nEWS.findUnique({ where: { news_id } }),
    );
  }

  async update(news_id: string, data: updateNewsType) {
    return await queryHandler(() =>
      prisma.nEWS.update({ where: { news_id }, data }),
    );
  }

  async delete(news_id: string) {
    return await queryHandler(() => prisma.nEWS.delete({ where: { news_id } }));
  }

  async getAll(page: number, limit: number) {
    return await queryHandler(async () => {
      const [data, count] = await Promise.all([
        prisma.nEWS.findMany({
          skip: (page - 1) * limit,
          take: limit,
        }),

        prisma.nEWS.count(),
      ]);
      return {
        data,
        count,
      };
    });
  }
}

export default NewsRepository;
