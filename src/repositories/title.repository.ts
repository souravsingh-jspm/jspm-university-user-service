import prisma from "../configs/prisma.config";
import { queryHandler } from "../utils/helper";

class TitleRepository {
  create = async (data: any) => {
    return await queryHandler(() => prisma.title.create({ data }));
  };

  update = async (title_id: string, data: any) => {
    return await queryHandler(() =>
      prisma.title.update({ where: { title_id }, data }),
    );
  };

  getById = async (title_id: string) => {
    return await queryHandler(() =>
      prisma.title.findUnique({ where: { title_id } }),
    );
  };

  delete = async (title_id: string) => {
    return await queryHandler(() =>
      prisma.title.delete({ where: { title_id } }),
    );
  };

  getAll = async (page: number, limit: number) => {
    const skip = (page - 1) * limit;

    return await queryHandler(async () => {
      const [pages, count] = await Promise.all([
        prisma.title.findMany({
          skip,
          take: limit,
        }),
        prisma.title.count(),
      ]);
      return { pages, count };
    });
  };
}

export default TitleRepository;
