/*
  Warnings:

  - You are about to drop the column `page_content_block_content` on the `page_content_blocks` table. All the data in the column will be lost.
  - You are about to drop the column `page_content_block_file_id` on the `page_content_blocks` table. All the data in the column will be lost.
  - You are about to drop the column `page_content_block_file_url` on the `page_content_blocks` table. All the data in the column will be lost.
  - You are about to drop the column `page_content_block_title` on the `page_content_blocks` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `page_content_blocks_page_content_block_file_id_idx` ON `page_content_blocks`;

-- AlterTable
ALTER TABLE `page_content_blocks` DROP COLUMN `page_content_block_content`,
    DROP COLUMN `page_content_block_file_id`,
    DROP COLUMN `page_content_block_file_url`,
    DROP COLUMN `page_content_block_title`;

-- CreateTable
CREATE TABLE `titles` (
    `title_id` VARCHAR(191) NOT NULL,
    `title_content_block_id` VARCHAR(191) NULL,
    `title_description` VARCHAR(191) NULL,

    INDEX `titles_title_content_block_id_idx`(`title_content_block_id`),
    PRIMARY KEY (`title_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `titles` ADD CONSTRAINT `titles_title_content_block_id_fkey` FOREIGN KEY (`title_content_block_id`) REFERENCES `page_content_blocks`(`page_content_block_id`) ON DELETE CASCADE ON UPDATE CASCADE;
