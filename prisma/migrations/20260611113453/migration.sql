-- CreateTable
CREATE TABLE `page_content_blocks` (
    `page_content_block_id` VARCHAR(191) NOT NULL,
    `cms_page_id` VARCHAR(191) NOT NULL,
    `block_type` ENUM('TITLE', 'PARAGRAPH', 'RICH_TEXT', 'SINGLE_FILE', 'GRID_TITLE', 'MULTIPLE_IMAGE_GRID') NOT NULL,
    `page_content_block_title` TEXT NULL,
    `page_content_block_content` LONGTEXT NULL,
    `page_content_block_file_url` TEXT NULL,
    `page_content_block_file_id` VARCHAR(191) NULL,
    `page_content_block_sort_order` INTEGER NOT NULL DEFAULT 0,
    `page_content_block_is_published` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `page_content_blocks_cms_page_id_idx`(`cms_page_id`),
    INDEX `page_content_blocks_block_type_idx`(`block_type`),
    INDEX `page_content_blocks_page_content_block_file_id_idx`(`page_content_block_file_id`),
    INDEX `page_content_blocks_page_content_block_sort_order_idx`(`page_content_block_sort_order`),
    PRIMARY KEY (`page_content_block_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `page_content_blocks` ADD CONSTRAINT `page_content_blocks_cms_page_id_fkey` FOREIGN KEY (`cms_page_id`) REFERENCES `cms_pages`(`cms_id`) ON DELETE CASCADE ON UPDATE CASCADE;
