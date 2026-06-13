import prisma from "../configs/prisma.config";
import { queryHandler } from "../utils/helper";
import { createBlogType, updateBlogType } from "../types/blog.type";

class BlogRepository {
  async create(blogData: createBlogType) {
    return await queryHandler(() => prisma.bLOGS.create({ data: blogData }));
  }

  async getById(blog_id: string) {
    return await queryHandler(() =>
      prisma.bLOGS.findUnique({ where: { blog_id } }),
    );
  }

  async update(blog_id: string, blogData: updateBlogType) {
    return await queryHandler(() =>
      prisma.bLOGS.update({ where: { blog_id }, data: blogData }),
    );
  }

  async delete(blog_id: string) {
    return await queryHandler(() =>
      prisma.bLOGS.delete({ where: { blog_id } }),
    );
  }

  async getAll(page: number, limit: number) {
    return await queryHandler(async () => {
      const [events, count] = await Promise.all([
        prisma.bLOGS.findMany({
          skip: (page - 1) * limit,
          take: limit,
        }),

        prisma.bLOGS.count(),
      ]);
      return {
        events,
        count,
      };
    });
  }
}

export default BlogRepository;
