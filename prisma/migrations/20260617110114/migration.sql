-- CreateTable
CREATE TABLE `subheading` (
    `subheading_id` VARCHAR(191) NOT NULL,
    `subheading_content_block_id` VARCHAR(191) NULL,
    `subheading_description` VARCHAR(191) NULL,

    INDEX `subheading_subheading_content_block_id_idx`(`subheading_content_block_id`),
    PRIMARY KEY (`subheading_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `richtexteditor` (
    `rich_text_editor_id` VARCHAR(191) NOT NULL,
    `rich_text_editor_content_block_id` VARCHAR(191) NULL,
    `rich_text_editor_description` LONGTEXT NULL,

    INDEX `richtexteditor_rich_text_editor_content_block_id_idx`(`rich_text_editor_content_block_id`),
    PRIMARY KEY (`rich_text_editor_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `paragraph` (
    `paragraph_id` VARCHAR(191) NOT NULL,
    `paragraph_content_block_id` VARCHAR(191) NULL,
    `paragraph_description` LONGTEXT NULL,

    INDEX `paragraph_paragraph_content_block_id_idx`(`paragraph_content_block_id`),
    PRIMARY KEY (`paragraph_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `subheading` ADD CONSTRAINT `subheading_subheading_content_block_id_fkey` FOREIGN KEY (`subheading_content_block_id`) REFERENCES `page_content_blocks`(`page_content_block_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `richtexteditor` ADD CONSTRAINT `richtexteditor_rich_text_editor_content_block_id_fkey` FOREIGN KEY (`rich_text_editor_content_block_id`) REFERENCES `page_content_blocks`(`page_content_block_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `paragraph` ADD CONSTRAINT `paragraph_paragraph_content_block_id_fkey` FOREIGN KEY (`paragraph_content_block_id`) REFERENCES `page_content_blocks`(`page_content_block_id`) ON DELETE CASCADE ON UPDATE CASCADE;
