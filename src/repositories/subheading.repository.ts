import prisma from "../configs/prisma.config";

import { queryHandler } from "../utils/helper";

class SubHeadingRepository {
  create = async (data: any) => {
    return await queryHandler(() => prisma.subHeading.create({ data }));
  };

  update = async (subheading_id: string, data: any) => {
    return await queryHandler(() =>
      prisma.subHeading.update({ where: { subheading_id }, data }),
    );
  };

  getById = async (subheading_id: string) => {
    return await queryHandler(() =>
      prisma.subHeading.findUnique({ where: { subheading_id } }),
    );
  };

  delete = async (subheading_id: string) => {
    return await queryHandler(() =>
      prisma.subHeading.delete({ where: { subheading_id } }),
    );
  };

  getAll = async (page: number, limit: number) => {
    const skip = (page - 1) * limit;

    return await queryHandler(async () => {
      const [pages, count] = await Promise.all([
        prisma.subHeading.findMany({
          skip,
          take: limit,
        }),
        prisma.subHeading.count(),
      ]);
      return { pages, count };
    });
  };
}

export default SubHeadingRepository;
