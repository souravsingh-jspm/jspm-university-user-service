-- CreateTable
CREATE TABLE `cms_pages` (
    `cms_id` VARCHAR(191) NOT NULL,
    `cms_page_name` VARCHAR(191) NOT NULL,
    `cms_slug` VARCHAR(191) NOT NULL,
    `cms_parent_id` VARCHAR(191) NULL,
    `cms_page_order` INTEGER NOT NULL DEFAULT 1,
    `cms_external_url` TEXT NULL,
    `cms_page_title` VARCHAR(191) NOT NULL,
    `cms_meta_description` TEXT NULL,
    `cms_meta_keywords` TEXT NULL,
    `cms_is_published` BOOLEAN NOT NULL DEFAULT false,
    `cms_school_id` VARCHAR(191) NULL,
    `cms_is_active` BOOLEAN NOT NULL DEFAULT true,
    `cms_section` ENUM('HOME', 'SCHOOL', 'NONE') NOT NULL DEFAULT 'HOME',
    `cms_page_type` ENUM('TOP', 'HEADER', 'FOOTER', 'MAIN', 'NONE') NOT NULL DEFAULT 'NONE',
    `cms_content_type` ENUM('CONTENT_PAGE', 'URL') NOT NULL DEFAULT 'CONTENT_PAGE',
    `cms_target` ENUM('SELF', 'NEW') NOT NULL DEFAULT 'SELF',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `cms_pages_cms_slug_key`(`cms_slug`),
    INDEX `cms_pages_cms_slug_idx`(`cms_slug`),
    INDEX `cms_pages_cms_section_idx`(`cms_section`),
    INDEX `cms_pages_cms_school_id_idx`(`cms_school_id`),
    INDEX `cms_pages_cms_is_published_idx`(`cms_is_published`),
    INDEX `cms_pages_cms_parent_id_idx`(`cms_parent_id`),
    PRIMARY KEY (`cms_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `faculties` (
    `faculty_id` VARCHAR(191) NOT NULL,
    `faculty_name` VARCHAR(191) NOT NULL,
    `faculty_file_id` VARCHAR(191) NULL,
    `faculty_sequance` INTEGER NOT NULL DEFAULT 0,
    `faculty_description` VARCHAR(191) NULL,
    `facult_is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`faculty_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `schools` (
    `school_id` VARCHAR(191) NOT NULL,
    `school_name` VARCHAR(191) NOT NULL,
    `school_file_id` VARCHAR(191) NULL,
    `school_faculty_id` VARCHAR(191) NULL,
    `school_slug` VARCHAR(191) NOT NULL,
    `school_description` TEXT NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `schools_school_name_key`(`school_name`),
    UNIQUE INDEX `schools_school_slug_key`(`school_slug`),
    PRIMARY KEY (`school_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `programs` (
    `program_id` VARCHAR(191) NOT NULL,
    `program_school_id` VARCHAR(191) NULL,
    `program_select_type` ENUM('UNDER_GRADUATION', 'POST_GRADUATE', 'INTEGRATED', 'POST_DIPLOMA', 'POST_GRADUATE_DIPLOMA', 'CERTIFICATE') NOT NULL,
    `program_duration` VARCHAR(191) NULL,
    `program_fee_per_year` VARCHAR(191) NULL,
    `program_eligibility` VARCHAR(191) NULL,
    `program_intake` VARCHAR(191) NULL,
    `program_is_active` BOOLEAN NOT NULL DEFAULT true,
    `program_sequance` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`program_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contact` (
    `contact_id` VARCHAR(191) NOT NULL,
    `contact_name` VARCHAR(191) NULL,
    `contact_phone` VARCHAR(191) NULL,
    `contact_email` VARCHAR(191) NULL,
    `contact_level` ENUM('UNDER_GRADUATION', 'POST_GRADUATE', 'INTEGRATED', 'POST_DIPLOMA', 'POST_GRADUATE_DIPLOMA', 'CERTIFICATE') NULL,
    `contact_program_id` VARCHAR(191) NULL,
    `contanct_message` VARCHAR(191) NULL,
    `contact_authorize` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`contact_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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
    `event_order` INTEGER NOT NULL DEFAULT 0,
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
    `blog_order` INTEGER NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`blog_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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
ALTER TABLE `cms_pages` ADD CONSTRAINT `cms_pages_cms_parent_id_fkey` FOREIGN KEY (`cms_parent_id`) REFERENCES `cms_pages`(`cms_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cms_pages` ADD CONSTRAINT `cms_pages_cms_school_id_fkey` FOREIGN KEY (`cms_school_id`) REFERENCES `schools`(`school_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `schools` ADD CONSTRAINT `schools_school_faculty_id_fkey` FOREIGN KEY (`school_faculty_id`) REFERENCES `faculties`(`faculty_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `programs` ADD CONSTRAINT `programs_program_school_id_fkey` FOREIGN KEY (`program_school_id`) REFERENCES `schools`(`school_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `contact` ADD CONSTRAINT `contact_contact_program_id_fkey` FOREIGN KEY (`contact_program_id`) REFERENCES `programs`(`program_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `page_content_blocks` ADD CONSTRAINT `page_content_blocks_cms_page_id_fkey` FOREIGN KEY (`cms_page_id`) REFERENCES `cms_pages`(`cms_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EVENTS` ADD CONSTRAINT `EVENTS_event_school_id_fkey` FOREIGN KEY (`event_school_id`) REFERENCES `schools`(`school_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BLOGS` ADD CONSTRAINT `BLOGS_blog_school_id_fkey` FOREIGN KEY (`blog_school_id`) REFERENCES `schools`(`school_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `news` ADD CONSTRAINT `news_news_school_id_fkey` FOREIGN KEY (`news_school_id`) REFERENCES `schools`(`school_id`) ON DELETE SET NULL ON UPDATE CASCADE;
