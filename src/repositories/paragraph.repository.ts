import prisma from "../configs/prisma.config";
import { queryHandler } from "../utils/helper";

class ParagraphRepository {
  create = async (data: any) => {
    return await queryHandler(() => prisma.paragraph.create({ data }));
  };

  update = async (paragraph_id: string, data: any) => {
    return await queryHandler(() =>
      prisma.paragraph.update({ where: { paragraph_id }, data }),
    );
  };

  async deleteByContentBlockId(content_block_id: string) {
    return await queryHandler(() =>
      prisma.paragraph.deleteMany({ where: { content_block_id } }),
    );
  }

  getById = async (paragraph_id: string) => {
    return await queryHandler(() =>
      prisma.paragraph.findUnique({ where: { paragraph_id } }),
    );
  };

  delete = async (paragraph_id: string) => {
    return await queryHandler(() =>
      prisma.paragraph.delete({ where: { paragraph_id } }),
    );
  };

  getAll = async (page: number, limit: number) => {
    const skip = (page - 1) * limit;

    return await queryHandler(async () => {
      const [pages, count] = await Promise.all([
        prisma.paragraph.findMany({
          skip,
          take: limit,
        }),
        prisma.paragraph.count(),
      ]);
      return { pages, count };
    });
  };
}

export default ParagraphRepository;
