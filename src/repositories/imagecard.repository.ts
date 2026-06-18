import prisma from "../configs/prisma.config";
import { queryHandler } from "../utils/helper";

class ImageCardRepository {
  async create(data: any) {
    return await queryHandler(() => prisma.imageCard.create({ data }));
  }

  async getById(image_card_id: string) {
    return await queryHandler(() =>
      prisma.imageCard.findUnique({ where: { image_card_id } }),
    );
  }

  async update(image_card_id: string, data: any) {
    return await queryHandler(() =>
      prisma.imageCard.update({ where: { image_card_id }, data }),
    );
  }

  async delete(image_card_id: string) {
    return await queryHandler(() =>
      prisma.imageCard.delete({ where: { image_card_id } }),
    );
  }

  async getAll(page: number, limit: number) {
    return await queryHandler(async () => {
      const [data, count] = await Promise.all([
        prisma.imageCard.findMany({
          skip: (page - 1) * limit,
          take: limit,
        }),

        prisma.imageCard.count(),
      ]);
      return {
        data,
        count,
      };
    });
  }
}

export default ImageCardRepository;
