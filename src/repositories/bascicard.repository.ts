import prisma from "../configs/prisma.config";
import { queryHandler } from "../utils/helper";

class BasicCardRepository {
  async create(data: any) {
    return await queryHandler(() => prisma.basicCard.create({ data }));
  }

  async createMany(data: any) {
    return await queryHandler(() =>
      prisma.basicCard.createMany({
        data,
      }),
    );
  }

  async getById(basic_card_id: string) {
    return await queryHandler(() =>
      prisma.basicCard.findUnique({ where: { basic_card_id } }),
    );
  }

  async update(basic_card_id: string, data: any) {
    return await queryHandler(() =>
      prisma.basicCard.update({ where: { basic_card_id }, data }),
    );
  }

  async delete(basic_card_id: string) {
    return await queryHandler(() =>
      prisma.basicCard.delete({ where: { basic_card_id } }),
    );
  }

  async deleteByContentBlockId(content_block_id: string) {
    return await queryHandler(() =>
      prisma.basicCard.deleteMany({ where: { content_block_id } }),
    );
  }

  async getAll(page: number, limit: number) {
    return await queryHandler(async () => {
      const [data, count] = await Promise.all([
        prisma.basicCard.findMany({
          skip: (page - 1) * limit,
          take: limit,
        }),

        prisma.basicCard.count(),
      ]);
      return {
        data,
        count,
      };
    });
  }
}

export default BasicCardRepository;
