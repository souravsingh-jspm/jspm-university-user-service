-- CreateTable
CREATE TABLE `programs` (
    `program_id` VARCHAR(191) NOT NULL,
    `program_school_id` VARCHAR(191) NULL,
    `program_select_type` ENUM('UNDER_GRADUATION_PROGRAMS', 'POST_GRADUATE', 'INTEGRATED', 'POST_DIPLOMA', 'POST_GRADUATE_DIPLOMA', 'CERTIFICATE') NOT NULL,
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
    `contact_level` VARCHAR(191) NULL,
    `contact_program_id` VARCHAR(191) NULL,
    `contanct_message` VARCHAR(191) NULL,
    `contact_authorize` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`contact_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `programs` ADD CONSTRAINT `programs_program_school_id_fkey` FOREIGN KEY (`program_school_id`) REFERENCES `schools`(`school_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `contact` ADD CONSTRAINT `contact_contact_program_id_fkey` FOREIGN KEY (`contact_program_id`) REFERENCES `programs`(`program_id`) ON DELETE SET NULL ON UPDATE CASCADE;
