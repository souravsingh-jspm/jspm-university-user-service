import prisma from "../configs/prisma.config";
import { queryHandler } from "../utils/helper";

class MarqueeRepository {
  async create(data: any) {
    return await queryHandler(() => prisma.marquee.create({ data }));
  }

  async getById(marquee_id: string) {
    return await queryHandler(() =>
      prisma.marquee.findUnique({ where: { marquee_id } }),
    );
  }

  async update(marquee_id: string, data: any) {
    return await queryHandler(() =>
      prisma.marquee.update({ where: { marquee_id }, data }),
    );
  }

  async delete(marquee_id: string) {
    return await queryHandler(() =>
      prisma.marquee.delete({ where: { marquee_id } }),
    );
  }

  async getAll(page: number, limit: number) {
    return await queryHandler(async () => {
      const [data, count] = await Promise.all([
        prisma.marquee.findMany({
          skip: (page - 1) * limit,
          take: limit,
        }),

        prisma.marquee.count(),
      ]);
      return {
        data,
        count,
      };
    });
  }
}

export default MarqueeRepository;
