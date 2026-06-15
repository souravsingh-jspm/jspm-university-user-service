-- CreateTable
CREATE TABLE `faculties` (
    `faculty_id` VARCHAR(191) NOT NULL,
    `faculty_name` VARCHAR(191) NOT NULL,
    `faculty_file_id` VARCHAR(191) NULL,
    `faculty_sequance` INTEGER NOT NULL DEFAULT 0,
    `faculty_description` VARCHAR(191) NULL,
    `facult_is_active` BOOLEAN NOT NULL DEFAULT true,
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`faculty_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
