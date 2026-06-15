import prisma from "../configs/prisma.config";
import { createFacultyType, updateFacultyType } from "../types/faculty.type";
import { queryHandler } from "../utils/helper";

class FacultyRepository {
  create = async (data: createFacultyType) => {
    return await queryHandler(() => prisma.faculty.create({ data }));
  };

  update = async (faculty_id: string, data: updateFacultyType) => {
    return await queryHandler(() =>
      prisma.faculty.update({ where: { faculty_id }, data }),
    );
  };

  getById = async (faculty_id: string) => {
    return await queryHandler(() =>
      prisma.faculty.findUnique({ where: { faculty_id } }),
    );
  };

  delete = async (faculty_id: string) => {
    return await queryHandler(() =>
      prisma.faculty.delete({ where: { faculty_id } }),
    );
  };

  getAll = async (page: number, limit: number) => {
    const skip = (page - 1) * limit;

    return await queryHandler(async () => {
      const [pages, count] = await Promise.all([
        prisma.faculty.findMany({
          skip,
          take: limit,
          orderBy: {
            faculty_sequance: "asc",
          },
        }),
        prisma.faculty.count(),
      ]);
      return { pages, count };
    });
  };
}

export default FacultyRepository;
