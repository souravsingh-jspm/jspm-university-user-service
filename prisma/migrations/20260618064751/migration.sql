/*
  Warnings:

  - You are about to drop the column `paragraph_content_block_id` on the `paragraph` table. All the data in the column will be lost.
  - You are about to drop the column `rich_text_editor_content_block_id` on the `richtexteditor` table. All the data in the column will be lost.
  - You are about to drop the column `subheading_content_block_id` on the `subheading` table. All the data in the column will be lost.
  - You are about to drop the column `title_content_block_id` on the `titles` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `paragraph` DROP FOREIGN KEY `paragraph_paragraph_content_block_id_fkey`;

-- DropForeignKey
ALTER TABLE `richtexteditor` DROP FOREIGN KEY `richtexteditor_rich_text_editor_content_block_id_fkey`;

-- DropForeignKey
ALTER TABLE `subheading` DROP FOREIGN KEY `subheading_subheading_content_block_id_fkey`;

-- DropForeignKey
ALTER TABLE `titles` DROP FOREIGN KEY `titles_title_content_block_id_fkey`;

-- DropIndex
DROP INDEX `paragraph_paragraph_content_block_id_idx` ON `paragraph`;

-- DropIndex
DROP INDEX `richtexteditor_rich_text_editor_content_block_id_idx` ON `richtexteditor`;

-- DropIndex
DROP INDEX `subheading_subheading_content_block_id_idx` ON `subheading`;

-- DropIndex
DROP INDEX `titles_title_content_block_id_idx` ON `titles`;

-- AlterTable
ALTER TABLE `page_content_blocks` MODIFY `block_type` ENUM('TITLE', 'SUBHEADING', 'PARAGRAPH', 'RICH_TEXT', 'SINGLE_FILE', 'GRID_TITLE', 'MULTIPLE_IMAGE_GRID') NOT NULL;

-- AlterTable
ALTER TABLE `paragraph` DROP COLUMN `paragraph_content_block_id`,
    ADD COLUMN `content_block_id` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `richtexteditor` DROP COLUMN `rich_text_editor_content_block_id`,
    ADD COLUMN `content_block_id` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `subheading` DROP COLUMN `subheading_content_block_id`,
    ADD COLUMN `content_block_id` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `titles` DROP COLUMN `title_content_block_id`,
    ADD COLUMN `content_block_id` VARCHAR(191) NULL;

-- CreateIndex
CREATE INDEX `paragraph_content_block_id_idx` ON `paragraph`(`content_block_id`);

-- CreateIndex
CREATE INDEX `richtexteditor_content_block_id_idx` ON `richtexteditor`(`content_block_id`);

-- CreateIndex
CREATE INDEX `subheading_content_block_id_idx` ON `subheading`(`content_block_id`);

-- CreateIndex
CREATE INDEX `titles_content_block_id_idx` ON `titles`(`content_block_id`);

-- AddForeignKey
ALTER TABLE `titles` ADD CONSTRAINT `titles_content_block_id_fkey` FOREIGN KEY (`content_block_id`) REFERENCES `page_content_blocks`(`page_content_block_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `subheading` ADD CONSTRAINT `subheading_content_block_id_fkey` FOREIGN KEY (`content_block_id`) REFERENCES `page_content_blocks`(`page_content_block_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `richtexteditor` ADD CONSTRAINT `richtexteditor_content_block_id_fkey` FOREIGN KEY (`content_block_id`) REFERENCES `page_content_blocks`(`page_content_block_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `paragraph` ADD CONSTRAINT `paragraph_content_block_id_fkey` FOREIGN KEY (`content_block_id`) REFERENCES `page_content_blocks`(`page_content_block_id`) ON DELETE CASCADE ON UPDATE CASCADE;
