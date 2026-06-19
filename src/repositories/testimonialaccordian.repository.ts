import prisma from "../configs/prisma.config";
import { queryHandler } from "../utils/helper";

class TestimonialAccordianRepository {
  async create(data: any) {
    return await queryHandler(() =>
      prisma.testimonialAccordian.create({ data }),
    );
  }

  async createMany(data: any) {
    return await queryHandler(() =>
      prisma.testimonialAccordian.createMany({
        data,
      }),
    );
  }

  async getById(testimonial_accordian_id: string) {
    return await queryHandler(() =>
      prisma.testimonialAccordian.findUnique({
        where: { testimonial_accordian_id },
      }),
    );
  }

  async update(testimonial_accordian_id: string, data: any) {
    return await queryHandler(() =>
      prisma.testimonialAccordian.update({
        where: { testimonial_accordian_id },
        data,
      }),
    );
  }

  async delete(testimonial_accordian_id: string) {
    return await queryHandler(() =>
      prisma.testimonialAccordian.delete({
        where: { testimonial_accordian_id },
      }),
    );
  }

  async deleteByContentBlockId(content_block_id: string) {
    return await queryHandler(() =>
      prisma.testimonialAccordian.deleteMany({ where: { content_block_id } }),
    );
  }

  async getAll(page: number, limit: number) {
    return await queryHandler(async () => {
      const [data, count] = await Promise.all([
        prisma.testimonialAccordian.findMany({
          skip: (page - 1) * limit,
          take: limit,
        }),

        prisma.testimonialAccordian.count(),
      ]);
      return {
        data,
        count,
      };
    });
  }
}

export default TestimonialAccordianRepository;
