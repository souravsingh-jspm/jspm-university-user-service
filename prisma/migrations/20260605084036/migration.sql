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
    `cms_is_active` BOOLEAN NOT NULL DEFAULT false,
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
CREATE TABLE `schools` (
    `school_id` VARCHAR(191) NOT NULL,
    `school_name` VARCHAR(191) NOT NULL,
    `school_slug` VARCHAR(191) NOT NULL,
    `school_description` TEXT NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `schools_school_name_key`(`school_name`),
    UNIQUE INDEX `schools_school_slug_key`(`school_slug`),
    PRIMARY KEY (`school_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `cms_pages` ADD CONSTRAINT `cms_pages_cms_parent_id_fkey` FOREIGN KEY (`cms_parent_id`) REFERENCES `cms_pages`(`cms_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cms_pages` ADD CONSTRAINT `cms_pages_cms_school_id_fkey` FOREIGN KEY (`cms_school_id`) REFERENCES `schools`(`school_id`) ON DELETE SET NULL ON UPDATE CASCADE;
