import prisma from "../configs/prisma.config";
import { queryHandler } from "../utils/helper";
import { createBlogType, updateBlogType } from "../types/blog.type";

class BlogRepository {
  async create(data: createBlogType) {
    console.log(data, " in repository");
    return await queryHandler(() => prisma.bLOGS.create({ data }));
  }

  async getById(blog_id: string) {
    return await queryHandler(() =>
      prisma.bLOGS.findUnique({ where: { blog_id } }),
    );
  }

  async update(blog_id: string, data: updateBlogType) {
    return await queryHandler(() =>
      prisma.bLOGS.update({ where: { blog_id }, data }),
    );
  }

  async delete(blog_id: string) {
    return await queryHandler(() =>
      prisma.bLOGS.delete({ where: { blog_id } }),
    );
  }

  async getAll(page: number, limit: number) {
    return await queryHandler(async () => {
      const [data, count] = await Promise.all([
        prisma.bLOGS.findMany({
          skip: (page - 1) * limit,
          take: limit,
        }),

        prisma.bLOGS.count(),
      ]);
      return {
        data,
        count,
      };
    });
  }
}

export default BlogRepository;
