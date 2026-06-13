-- CreateTable
CREATE TABLE `news` (
    `news_id` VARCHAR(191) NOT NULL,
    `news_title` VARCHAR(191) NULL,
    `news_image1_file_id` VARCHAR(191) NULL,
    `news_image2_file_id` VARCHAR(191) NULL,
    `news_short_description` TEXT NULL,
    `news_long_description` LONGTEXT NULL,
    `news_type` ENUM('HOME', 'SCHOOL') NOT NULL DEFAULT 'HOME',
    `news_school_id` VARCHAR(191) NULL,
    `news_date` DATETIME(3) NULL,
    `news_is_active` BOOLEAN NULL DEFAULT true,
    `news_order` INTEGER NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`news_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `news` ADD CONSTRAINT `news_news_school_id_fkey` FOREIGN KEY (`news_school_id`) REFERENCES `schools`(`school_id`) ON DELETE SET NULL ON UPDATE CASCADE;
