/*
  Warnings:

  - The values [SUBHEADING] on the enum `page_content_blocks_block_type` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `page_content_blocks` MODIFY `block_type` ENUM('TITLE', 'SUB_HEADING', 'PARAGRAPH', 'RICH_TEXT', 'BASIC_CARD', 'PROGRAM_IMAGE_CARD', 'IMAGE_CARD', 'TESTIMONIAL_ACCORDIAN', 'MARQUEE', 'CONTACT_LIST', 'FEATURE_LIST', 'PROFILE_LIST', 'FACULTY_LIST') NOT NULL;
