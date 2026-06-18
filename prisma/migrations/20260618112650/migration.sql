-- AlterTable
ALTER TABLE `paragraph` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `richtexteditor` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `subheading` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `titles` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateTable
CREATE TABLE `basiccard` (
    `basic_card_id` VARCHAR(191) NOT NULL,
    `content_block_id` VARCHAR(191) NULL,
    `basic_card_title` VARCHAR(191) NULL,
    `basic_card_description` VARCHAR(191) NULL,
    `basic_card_link` VARCHAR(191) NULL,
    `basic_card_label` VARCHAR(191) NULL,
    `basic_card_color` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `basiccard_content_block_id_idx`(`content_block_id`),
    PRIMARY KEY (`basic_card_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `programimagecard` (
    `program_image_card_id` VARCHAR(191) NOT NULL,
    `content_block_id` VARCHAR(191) NULL,
    `program_image_card_title` VARCHAR(191) NULL,
    `program_image_card_description` VARCHAR(191) NULL,
    `program_image_card_link` VARCHAR(191) NULL,
    `program_image_card_label` VARCHAR(191) NULL,
    `program_image_card_color` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `programimagecard_content_block_id_idx`(`content_block_id`),
    PRIMARY KEY (`program_image_card_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `imagecard` (
    `image_card_id` VARCHAR(191) NOT NULL,
    `content_block_id` VARCHAR(191) NULL,
    `image_card_title` VARCHAR(191) NULL,
    `image_card_description` VARCHAR(191) NULL,
    `image_card_link` VARCHAR(191) NULL,
    `image_card_label` VARCHAR(191) NULL,
    `image_card_color` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `imagecard_content_block_id_idx`(`content_block_id`),
    PRIMARY KEY (`image_card_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `testimonialAccordian` (
    `testimonial_accordian_id` VARCHAR(191) NOT NULL,
    `content_block_id` VARCHAR(191) NULL,
    `testimonial_accordian_student_name` VARCHAR(191) NULL,
    `testimonial_accordian_description` VARCHAR(191) NULL,
    `testimonial_accordian_image` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `testimonialAccordian_content_block_id_idx`(`content_block_id`),
    PRIMARY KEY (`testimonial_accordian_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `marquee` (
    `marquee_id` VARCHAR(191) NOT NULL,
    `content_block_id` VARCHAR(191) NULL,
    `marquee_text` VARCHAR(191) NULL,
    `marquee_element` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `marquee_content_block_id_idx`(`content_block_id`),
    PRIMARY KEY (`marquee_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `basiccard` ADD CONSTRAINT `basiccard_content_block_id_fkey` FOREIGN KEY (`content_block_id`) REFERENCES `page_content_blocks`(`page_content_block_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `programimagecard` ADD CONSTRAINT `programimagecard_content_block_id_fkey` FOREIGN KEY (`content_block_id`) REFERENCES `page_content_blocks`(`page_content_block_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `imagecard` ADD CONSTRAINT `imagecard_content_block_id_fkey` FOREIGN KEY (`content_block_id`) REFERENCES `page_content_blocks`(`page_content_block_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `testimonialAccordian` ADD CONSTRAINT `testimonialAccordian_content_block_id_fkey` FOREIGN KEY (`content_block_id`) REFERENCES `page_content_blocks`(`page_content_block_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `marquee` ADD CONSTRAINT `marquee_content_block_id_fkey` FOREIGN KEY (`content_block_id`) REFERENCES `page_content_blocks`(`page_content_block_id`) ON DELETE CASCADE ON UPDATE CASCADE;
