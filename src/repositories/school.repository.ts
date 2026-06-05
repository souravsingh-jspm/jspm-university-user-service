import { queryHandler } from "../utils/helper";
import prisma from "../configs/prisma.config";
import { createSchoolType, updateSchoolType } from "../types/school.type";

class SchoolRepository {
  create = async (data: createSchoolType) => {
    return await queryHandler(() => prisma.school.create({ data }));
  };

  update = async (data: updateSchoolType, school_id: any) => {
    return await queryHandler(() =>
      prisma.school.update({ where: { school_id }, data }),
    );
  };

  getAll = async (page: number, limit: number) => {
    const skip = (page - 1) * limit;
    return await queryHandler(() =>
      prisma.school.findMany({
        skip,
        take: limit,
      }),
    );
  };

  getById = async (school_id: string) => {
    return await queryHandler(() =>
      prisma.school.findUnique({ where: { school_id } }),
    );
  };

  delete = async (school_id: string) => {
    return await queryHandler(() =>
      prisma.school.delete({ where: { school_id } }),
    );
  };

  getByName = async (school_name: string) => {
    return await queryHandler(() =>
      prisma.school.findUnique({ where: { school_name } }),
    );
  };
  getBySlug = async (school_slug: string) => {
    return await queryHandler(() =>
      prisma.school.findUnique({ where: { school_slug } }),
    );
  };
}

export default SchoolRepository;
