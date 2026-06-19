import { queryHandler } from "../utils/helper";
import {
  createSPageContentBlockType,
  updateSPageContentBlockType,
} from "../types/pagecontent.type";
import prisma from "../configs/prisma.config";

class PageContentRepository {
  create = async (data: createSPageContentBlockType) => {
    return await queryHandler(() => prisma.pageContentBlock.create({ data }));
  };

  update = async (
    page_content_block_id: string,
    data: updateSPageContentBlockType,
  ) => {
    return await queryHandler(() =>
      prisma.pageContentBlock.update({
        where: { page_content_block_id },
        data,
      }),
    );
  };

  delete = async (page_content_block_id: string) => {
    return await queryHandler(() =>
      prisma.pageContentBlock.delete({ where: { page_content_block_id } }),
    );
  };

  getById = async (page_content_block_id: string) => {
    return await queryHandler(() =>
      prisma.pageContentBlock.findUnique({ where: { page_content_block_id } }),
    );
  };
  getAll = async (page: number, limit: number) => {
    return await queryHandler(async () => {
      const [pages, count] = await Promise.all([
        prisma.pageContentBlock.findMany({
          skip: (page - 1) * limit,
          take: limit,
          orderBy: { page_content_block_sort_order: "asc" },
        }),
        prisma.pageContentBlock.count(),
      ]);
      return {
        pages,
        count,
      };
    });
  };
  getByPageId = async (cms_page_id: string) => {
    return await queryHandler(() =>
      prisma.pageContentBlock.findMany({
        where: { cms_page_id },
        orderBy: { page_content_block_sort_order: "asc" },
      }),
    );
  };

  getContentByPageId = async (cms_page_id: string) => {
    return await queryHandler(() =>
      prisma.pageContentBlock.findMany({
        where: {
          cms_page_id,
        },
        orderBy: { page_content_block_sort_order: "asc" },
        include: {
          titles: true,
          paragraph: true,
          richTextEditor: true,
          subHeading: true,
          basicCard: true,
          programImageCard: true,
          imagecard: true,
          testimonialAccordian: true,
          marquee: true,
        },
      }),
    );
  };
}

export default PageContentRepository;
