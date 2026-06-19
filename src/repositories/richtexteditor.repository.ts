import prisma from "../configs/prisma.config";
import { queryHandler } from "../utils/helper";

class RichTextEditorRepository {
  create = async (data: any) => {
    return await queryHandler(() => prisma.richTextEditor.create({ data }));
  };

  update = async (rich_text_editor_id: string, data: any) => {
    return await queryHandler(() =>
      prisma.richTextEditor.update({ where: { rich_text_editor_id }, data }),
    );
  };

  getById = async (rich_text_editor_id: string) => {
    return await queryHandler(() =>
      prisma.richTextEditor.findUnique({ where: { rich_text_editor_id } }),
    );
  };

  delete = async (rich_text_editor_id: string) => {
    return await queryHandler(() =>
      prisma.richTextEditor.delete({ where: { rich_text_editor_id } }),
    );
  };

  async deleteByContentBlockId(content_block_id: string) {
    return await queryHandler(() =>
      prisma.richTextEditor.deleteMany({ where: { content_block_id } }),
    );
  }

  getAll = async (page: number, limit: number) => {
    const skip = (page - 1) * limit;

    return await queryHandler(async () => {
      const [pages, count] = await Promise.all([
        prisma.richTextEditor.findMany({
          skip,
          take: limit,
        }),
        prisma.richTextEditor.count(),
      ]);
      return { pages, count };
    });
  };
}

export default RichTextEditorRepository;
