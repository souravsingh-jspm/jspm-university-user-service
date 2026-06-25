import prisma from "../configs/prisma.config";
import { queryHandler } from "../utils/helper";

class ContentFacultyRepository {
  async create(data: any) {
    return await queryHandler(() =>
      prisma.pageContentFacultyMember.create({ data }),
    );
  }

  async createMany(data: any) {
    return await queryHandler(() =>
      prisma.pageContentFacultyMember.createMany({
        data,
      }),
    );
  }

  async getById(page_content_faculty_member_id: string) {
    return await queryHandler(() =>
      prisma.pageContentFacultyMember.findUnique({
        where: { page_content_faculty_member_id },
      }),
    );
  }

  async update(page_content_faculty_member_id: string, data: any) {
    return await queryHandler(() =>
      prisma.pageContentFacultyMember.update({
        where: { page_content_faculty_member_id },
        data,
      }),
    );
  }

  async delete(page_content_faculty_member_id: string) {
    return await queryHandler(() =>
      prisma.pageContentFacultyMember.delete({
        where: { page_content_faculty_member_id },
      }),
    );
  }

  async deleteByContentBlockId(content_block_id: string) {
    return await queryHandler(() =>
      prisma.pageContentFacultyMember.deleteMany({
        where: { content_block_id },
      }),
    );
  }

  async getAll(page: number, limit: number) {
    return await queryHandler(async () => {
      const [data, count] = await Promise.all([
        prisma.pageContentFacultyMember.findMany({
          skip: (page - 1) * limit,
          take: limit,
        }),

        prisma.pageContentFacultyMember.count(),
      ]);
      return {
        data,
        count,
      };
    });
  }
}

export default ContentFacultyRepository;
