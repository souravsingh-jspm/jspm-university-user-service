-- CreateTable
CREATE TABLE `PageContentContact` (
    `page_content_contact_id` VARCHAR(191) NOT NULL,
    `content_block_id` VARCHAR(191) NULL,
    `page_content_contact_image` VARCHAR(191) NULL,
    `page_content_contact_name` VARCHAR(191) NOT NULL,
    `page_content_contact_position` VARCHAR(191) NULL,
    `page_content_contact_email` VARCHAR(191) NULL,
    `page_content_contact_contact` VARCHAR(191) NULL,
    `page_content_contact_sort_order` INTEGER NOT NULL DEFAULT 0,
    `page_content_contact_is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`page_content_contact_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `page_content_features` (
    `page_content_feature_id` VARCHAR(191) NOT NULL,
    `content_block_id` VARCHAR(191) NOT NULL,
    `page_content_feature_image` VARCHAR(191) NULL,
    `page_content_feature_title` VARCHAR(191) NOT NULL,
    `page_content_feature_sort_order` INTEGER NOT NULL DEFAULT 0,
    `page_content_feature_is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `page_content_features_content_block_id_idx`(`content_block_id`),
    PRIMARY KEY (`page_content_feature_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `page_content_profiles` (
    `page_content_profile_id` VARCHAR(191) NOT NULL,
    `content_block_id` VARCHAR(191) NOT NULL,
    `page_content_profile_image` VARCHAR(191) NULL,
    `page_content_profile_name` VARCHAR(191) NOT NULL,
    `page_content_profile_designation` VARCHAR(191) NULL,
    `page_content_profile_sort_order` INTEGER NOT NULL DEFAULT 0,
    `page_content_profile_is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `page_content_profiles_content_block_id_idx`(`content_block_id`),
    PRIMARY KEY (`page_content_profile_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `page_content_faculty_members` (
    `page_content_faculty_member_id` VARCHAR(191) NOT NULL,
    `content_block_id` VARCHAR(191) NOT NULL,
    `page_content_faculty_member_image` VARCHAR(191) NULL,
    `page_content_faculty_member_name` VARCHAR(191) NOT NULL,
    `page_content_faculty_member_designation` VARCHAR(191) NULL,
    `page_content_faculty_member_profile_link` VARCHAR(191) NULL,
    `page_content_faculty_member_linkedin_url` VARCHAR(191) NULL,
    `page_content_faculty_member_vidwan_url` VARCHAR(191) NULL,
    `page_content_faculty_member_sort_order` INTEGER NOT NULL DEFAULT 0,
    `page_content_faculty_member_is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `page_content_faculty_members_content_block_id_idx`(`content_block_id`),
    PRIMARY KEY (`page_content_faculty_member_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PageContentContact` ADD CONSTRAINT `PageContentContact_content_block_id_fkey` FOREIGN KEY (`content_block_id`) REFERENCES `page_content_blocks`(`page_content_block_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `page_content_features` ADD CONSTRAINT `page_content_features_content_block_id_fkey` FOREIGN KEY (`content_block_id`) REFERENCES `page_content_blocks`(`page_content_block_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `page_content_profiles` ADD CONSTRAINT `page_content_profiles_content_block_id_fkey` FOREIGN KEY (`content_block_id`) REFERENCES `page_content_blocks`(`page_content_block_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `page_content_faculty_members` ADD CONSTRAINT `page_content_faculty_members_content_block_id_fkey` FOREIGN KEY (`content_block_id`) REFERENCES `page_content_blocks`(`page_content_block_id`) ON DELETE CASCADE ON UPDATE CASCADE;
