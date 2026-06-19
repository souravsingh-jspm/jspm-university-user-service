/*
  Warnings:

  - The values [SINGLE_FILE,GRID_TITLE,MULTIPLE_IMAGE_GRID] on the enum `page_content_blocks_block_type` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `page_content_blocks` MODIFY `block_type` ENUM('TITLE', 'SUBHEADING', 'PARAGRAPH', 'RICH_TEXT', 'BASIC_CARD', 'PROGRAM_IMAGE_CARD', 'IMAGE_CARD', 'TESTIMONIAL_ACCORDIAN', 'MARQUEE') NOT NULL;
