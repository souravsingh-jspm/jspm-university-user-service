import prisma from "../configs/prisma.config";
import { createCMSPagelType, updateCMSPagelType } from "../types/page.type";
import { queryHandler } from "../utils/helper";

class CMSPageRepository {
  create = async (data: createCMSPagelType) => {
    return await queryHandler(() => prisma.cmsPage.create({ data }));
  };

  update = async (data: updateCMSPagelType, cms_id: string) => {
    return await queryHandler(() =>
      prisma.cmsPage.update({ where: { cms_id }, data }),
    );
  };

  getById = async (cms_id: string) => {
    return await queryHandler(() =>
      prisma.cmsPage.findUnique({ where: { cms_id } }),
    );
  };

  getAll = async (page: number, limit: number) => {
    const skip = (page - 1) * limit;
    return await queryHandler(() =>
      prisma.cmsPage.findMany({
        skip,
        take: limit,
      }),
    );
  };

  delete = async (cms_id: string) => {
    return await queryHandler(() =>
      prisma.cmsPage.delete({ where: { cms_id } }),
    );
  };

  getBySlug = async (cms_slug: string) => {
    return await queryHandler(() =>
      prisma.cmsPage.findUnique({ where: { cms_slug } }),
    );
  };
}

export default CMSPageRepository;
