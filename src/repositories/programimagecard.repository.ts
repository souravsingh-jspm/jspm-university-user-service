import prisma from "../configs/prisma.config";
import { queryHandler } from "../utils/helper";

class ProgramImageCardRepository {
  async create(data: any) {
    return await queryHandler(() => prisma.programImageCard.create({ data }));
  }

  async createMany(data: any) {
    return await queryHandler(() =>
      prisma.programImageCard.createMany({
        data,
      }),
    );
  }

  async getById(program_image_card_id: string) {
    return await queryHandler(() =>
      prisma.programImageCard.findUnique({ where: { program_image_card_id } }),
    );
  }

  async update(program_image_card_id: string, data: any) {
    return await queryHandler(() =>
      prisma.programImageCard.update({
        where: { program_image_card_id },
        data,
      }),
    );
  }

  async delete(program_image_card_id: string) {
    return await queryHandler(() =>
      prisma.programImageCard.delete({ where: { program_image_card_id } }),
    );
  }

  async deleteByContentBlockId(content_block_id: string) {
    return await queryHandler(() =>
      prisma.programImageCard.deleteMany({ where: { content_block_id } }),
    );
  }

  async getAll(page: number, limit: number) {
    return await queryHandler(async () => {
      const [data, count] = await Promise.all([
        prisma.programImageCard.findMany({
          skip: (page - 1) * limit,
          take: limit,
        }),

        prisma.programImageCard.count(),
      ]);
      return {
        data,
        count,
      };
    });
  }
}

export default ProgramImageCardRepository;
