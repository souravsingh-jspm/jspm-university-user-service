import prisma from "../configs/prisma.config";
import { createProgramType, updateProgramType } from "../types/program.type";
import { queryHandler } from "../utils/helper";

class ProgramRepository {
  create = async (data: createProgramType) => {
    return await queryHandler(() => prisma.program.create({ data }));
  };

  update = async (program_id: string, data: updateProgramType) => {
    return await queryHandler(() =>
      prisma.program.update({ where: { program_id }, data }),
    );
  };

  getById = async (program_id: string) => {
    return await queryHandler(() =>
      prisma.program.findUnique({ where: { program_id } }),
    );
  };

  delete = async (program_id: string) => {
    return await queryHandler(() =>
      prisma.program.delete({ where: { program_id } }),
    );
  };

  getAll = async (page: number, limit: number) => {
    const skip = (page - 1) * limit;

    return await queryHandler(async () => {
      const [data, count] = await Promise.all([
        prisma.program.findMany({
          skip,
          take: limit,
        }),
        prisma.program.count(),
      ]);
      return {
        data,
        count,
      };
    });
  };
}

export default ProgramRepository;
