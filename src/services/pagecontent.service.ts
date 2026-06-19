import { ApiError } from "common-microservices-utils";
import PageContentRepository from "../repositories/pagecontent.repository";

import { API_ERRORS } from "../constants/app.constant";
import TitleRepository from "../repositories/title.repository";
import SubHeadingRepository from "../repositories/subheading.repository";
import RichTextEditorRepository from "../repositories/richtexteditor.repository";
import ParagraphRepository from "../repositories/paragraph.repository";
import { ContentBlockType } from "@prisma/client";
import BasicCardRepository from "../repositories/bascicard.repository";
import ImageCardRepository from "../repositories/imagecard.repository";
import MarqueeRepository from "../repositories/marquee.repository";
import ProgramImageCardRepository from "../repositories/programimagecard.repository";
import TestimonialAccordianRepository from "../repositories/testimonialaccordian.repository";

class PageContentService {
  pageContentRepository: PageContentRepository;
  titleRepository: TitleRepository;
  subHeadingRepository: SubHeadingRepository;
  richTextEditorRepository: RichTextEditorRepository;
  paragraphRepository: ParagraphRepository;
  basicCardRepository: BasicCardRepository;
  imageCardRepository: ImageCardRepository;
  marqueeRepository: MarqueeRepository;
  programImageCardRepository: ProgramImageCardRepository;
  testimonialAccordianRepository: TestimonialAccordianRepository;

  constructor() {
    this.pageContentRepository = new PageContentRepository();
    this.titleRepository = new TitleRepository();
    this.subHeadingRepository = new SubHeadingRepository();
    this.richTextEditorRepository = new RichTextEditorRepository();
    this.paragraphRepository = new ParagraphRepository();
    this.basicCardRepository = new BasicCardRepository();
    this.imageCardRepository = new ImageCardRepository();
    this.marqueeRepository = new MarqueeRepository();
    this.programImageCardRepository = new ProgramImageCardRepository();
    this.testimonialAccordianRepository = new TestimonialAccordianRepository();
  }

  create = async (data: any) => {
    const contentData = {
      cms_page_id: data.cms_page_id,
      page_content_block_type: data.page_content_block_type,
      page_content_block_sort_order: data.page_content_block_sort_order,
    };
    const result = await this.pageContentRepository.create(contentData);

    const content_block_id = result.page_content_block_id;

    const title = data.title
      ? await this.titleRepository.create({
          ...data.title,
          content_block_id,
        })
      : null;
    const paragraph = data.paragraph
      ? await this.paragraphRepository.create({
          ...data.paragraph,
          content_block_id,
        })
      : null;

    const rich_text_editor = data.rich_text_editor
      ? await this.richTextEditorRepository.create({
          ...data.rich_text_editor,
          content_block_id,
        })
      : null;

    const sub_heading = data.sub_heading
      ? await this.subHeadingRepository.create({
          ...data.sub_heading,
          content_block_id,
        })
      : null;

    const basic_card = data.basic_card?.length
      ? await this.basicCardRepository.createMany(
          data.basic_card.map((card: any) => ({
            ...card,
            content_block_id,
          })),
        )
      : null;

    const program_image_card = data.program_image_card
      ? await this.programImageCardRepository.createMany(
          data.program_image_card.map((card: any) => ({
            ...card,
            content_block_id,
          })),
        )
      : null;

    const image_card = data.image_card
      ? await this.imageCardRepository.createMany(
          data.image_card.map((card: any) => ({
            ...card,
            content_block_id,
          })),
        )
      : null;

    const testimonial_accordian = data.testimonial_accordian
      ? await this.testimonialAccordianRepository.createMany(
          data.testimonial_accordian.map((card: any) => ({
            ...card,
            content_block_id,
          })),
        )
      : null;

    const marquee = data.marquee
      ? await this.marqueeRepository.createMany(
          data.marquee.map((card: any) => ({
            ...card,
            content_block_id,
          })),
        )
      : null;

    return {
      ...result,
      title,
      paragraph,
      rich_text_editor,
      sub_heading,
      program_image_card,
      image_card,
      testimonial_accordian,
      marquee,
      basic_card,
    };
  };

  update = async (id: string, data: any) => {
    const checkExists = await this.pageContentRepository.getById(id);
    if (!checkExists) {
      throw new ApiError(404, API_ERRORS.PAGE_CONTENT_NOT_FOUND);
    }
    const contentData = {
      cms_page_id: data.cms_page_id,
      page_content_block_type: data.page_content_block_type,
      page_content_block_sort_order: data.page_content_block_sort_order,
    };

    const result = await this.pageContentRepository.update(id, contentData);
    let content = null;
    switch (result.page_content_block_type) {
      case ContentBlockType.PARAGRAPH:
        await this.paragraphRepository.deleteByContentBlockId(id);
        content = data.paragraph
          ? await this.paragraphRepository.create({
              ...data.paragraph,
              content_block_id: id,
            })
          : null;
        break;
      case ContentBlockType.TITLE:
        await this.titleRepository.deleteByContentBlockId(id);

        content = data.title
          ? await this.titleRepository.create({
              ...data.title,
              content_block_id: id,
            })
          : null;
        break;
      case ContentBlockType.SUBHEADING:
        await this.subHeadingRepository.deleteByContentBlockId(id);

        content = data.sub_heading
          ? await this.subHeadingRepository.create({
              ...data.sub_heading,
              content_block_id: id,
            })
          : null;
        break;
      case ContentBlockType.RICH_TEXT:
        await this.richTextEditorRepository.deleteByContentBlockId(id);

        content = data.rich_text_editor
          ? await this.richTextEditorRepository.create({
              ...data.rich_text_editor,
              content_block_id: id,
            })
          : null;

      case ContentBlockType.BASIC_CARD:
        await this.basicCardRepository.deleteByContentBlockId(id);

        content = data.basic_card?.length
          ? await this.basicCardRepository.createMany(
              data.basic_card.map((card: any) => ({
                ...card,
                content_block_id: id,
              })),
            )
          : null;
        break;

      case ContentBlockType.PROGRAM_IMAGE_CARD:
        await this.programImageCardRepository.deleteByContentBlockId(id);

        content = data.program_image_card?.length
          ? await this.programImageCardRepository.createMany(
              data.program_image_card.map((card: any) => ({
                ...card,
                content_block_id: id,
              })),
            )
          : null;
        break;

      case ContentBlockType.IMAGE_CARD:
        await this.imageCardRepository.deleteByContentBlockId(id);

        content = data.image_card?.length
          ? await this.imageCardRepository.createMany(
              data.image_card.map((card: any) => ({
                ...card,
                content_block_id: id,
              })),
            )
          : null;
        break;

      case ContentBlockType.TESTIMONIAL_ACCORDIAN:
        await this.testimonialAccordianRepository.deleteByContentBlockId(id);

        content = data.testimonial_accordian?.length
          ? await this.testimonialAccordianRepository.createMany(
              data.testimonial_accordian.map((card: any) => ({
                ...card,
                content_block_id: id,
              })),
            )
          : null;
        break;

      case ContentBlockType.MARQUEE:
        await this.marqueeRepository.deleteByContentBlockId(id);

        content = data.marquee?.length
          ? await this.marqueeRepository.createMany(
              data.marquee.map((card: any) => ({
                ...card,
                content_block_id: id,
              })),
            )
          : null;
        break;
    }
    return { ...result, content };
  };

  delete = async (id: string) => {
    const checkExists = await this.pageContentRepository.getById(id);
    if (!checkExists) {
      throw new ApiError(404, API_ERRORS.PAGE_CONTENT_NOT_FOUND);
    }
    return await this.pageContentRepository.delete(id);
  };

  getById = async (id: string) => {
    const checkExists = await this.pageContentRepository.getById(id);
    if (!checkExists) {
      throw new ApiError(404, API_ERRORS.PAGE_CONTENT_NOT_FOUND);
    }
    return await this.pageContentRepository.getById(id);
  };

  getAll = async (page: number, limit: number) => {
    const data = await this.pageContentRepository.getAll(page, limit);
    return data;
  };

  getByPageId = async (id: string) => {
    return await this.pageContentRepository.getByPageId(id);
  };

  getContentByPageId = async (id: string) => {
    return await this.pageContentRepository.getContentByPageId(id);
  };
}
export default PageContentService;
