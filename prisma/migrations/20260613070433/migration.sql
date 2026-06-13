-- CreateTable
CREATE TABLE `EVENTS` (
    `event_id` VARCHAR(191) NOT NULL,
    `event_title` VARCHAR(191) NULL,
    `event_image1_file_id` VARCHAR(191) NULL,
    `event_image2_file_id` VARCHAR(191) NULL,
    `event_short_description` TEXT NULL,
    `event_long_description` LONGTEXT NULL,
    `event_place` VARCHAR(191) NULL,
    `event_type` ENUM('HOME', 'SCHOOL') NOT NULL DEFAULT 'HOME',
    `event_school_id` VARCHAR(191) NULL,
    `event_date` DATETIME(3) NULL,
    `event_is_active` BOOLEAN NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`event_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BLOGS` (
    `blog_id` VARCHAR(191) NOT NULL,
    `blog_title` VARCHAR(191) NULL,
    `blog_image1_file_id` VARCHAR(191) NULL,
    `blog_image2_file_id` VARCHAR(191) NULL,
    `blog_short_description` TEXT NULL,
    `blog_long_description` LONGTEXT NULL,
    `blog_type` ENUM('HOME', 'SCHOOL') NOT NULL DEFAULT 'HOME',
    `blog_school_id` VARCHAR(191) NULL,
    `blog_date` DATETIME(3) NULL,
    `blog_is_active` BOOLEAN NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`blog_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `EVENTS` ADD CONSTRAINT `EVENTS_event_school_id_fkey` FOREIGN KEY (`event_school_id`) REFERENCES `schools`(`school_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BLOGS` ADD CONSTRAINT `BLOGS_blog_school_id_fkey` FOREIGN KEY (`blog_school_id`) REFERENCES `schools`(`school_id`) ON DELETE SET NULL ON UPDATE CASCADE;
